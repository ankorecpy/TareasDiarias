import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  private calendar: Array<number[]>;
  private month: number;
  private year: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.calendar = new Array<number[]>();
  }

  ionViewWillEnter() {
    let date: Date = new Date(); 
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
    this.calendar = this.calculateCalendar(this.getInitialDayMonth(this.month, this.year), this.getNumberDaysMonth(this.month, this.year));
  }

  //get index of fist day of year, index between 0 and 6
  private getInitialDayYear(year: number): number {
    let sequenceInitialDaysOfYears: number[] = [5, 0, 1, 2, 3, 5, 6, 0, 1, 3, 4, 5, 6, 1, 2, 3, 4, 6, 0, 1, 2, 4, 5, 6, 0, 2, 3, 4];
    let index = (year % 1000) % sequenceInitialDaysOfYears.length;
    return sequenceInitialDaysOfYears[index];
  }

  //get number of days of a specific month on a specific year
  private getNumberDaysMonth(month: number, year: number): number {
    let monthCol: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let result: number = -1;
    if (month >= 1 && month <= 12) {
      result = monthCol[month - 1];
      result += ((year % 4) == 0) && (month == 2) ? 1 : 0;
    }
    return result;
  }

  //get index of first day of month , index between 0 and 6
  private getInitialDayMonth(month: number, year: number): number {
    let indexInitialDayMonth: number = (this.getSumDays(month) + this.getInitialDayYear(year)) % 7;
    return indexInitialDayMonth;
  }

  //get sum of days since month 1 to a specific month
  private getSumDays(month: number): number {
    var result: number = -1;
    if (month >= 1 && month <= 12) {
      let monthCol: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      result = 0;
      for (var index = 0; index < (month - 1); index++) {
        result += monthCol[index];
      }
    }
    return result;
  }

  //get Array with 6 vectors of 7 days
  private calculateCalendar(indexFirstDayMonth: number, numberDays: number): Array<number[]> {
    var result: Array<number[]> = new Array<number[]>();
    var startIndex: number = indexFirstDayMonth, dayCounter: number = 1;
    for (var  row = 0; row < 6; row++) {
      let weekCol: number[] = [0, 0, 0, 0, 0, 0, 0];
      for (var day = startIndex; day < 7 && dayCounter <= numberDays; day++) {
        weekCol[day] = dayCounter;
        dayCounter++;
      }
      result.push(weekCol);
      startIndex = 0;
    }
    return result;
  }

}
