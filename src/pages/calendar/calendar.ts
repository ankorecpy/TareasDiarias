import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TasksListPage } from '../tasks-list/tasks-list';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  private calendar: Array<number[]>;
  private month: number;
  private year: number;
  private monthName: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.calendar = new Array<number[]>();
  }

  ionViewWillEnter() {
    let date: Date = new Date();
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
    this.calendar = this.calculateCalendar(this.getInitialDayMonth(this.month, this.year), this.getNumberDaysMonth(this.month, this.year));
    this.calculateNameOfMonth(this.month);
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
    for (var row = 0; row < 6; row++) {
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

  //get name of a specific month
  private calculateNameOfMonth(month: number): void {
    let result: String = "";
    if (month >= 1 && month <= 12) {
      let nameMonthsCol: String[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      result = nameMonthsCol[month - 1];
    }
    this.monthName = result;
  }

  //open taskList page and send datas like day, month and selected year, too send a flag of creation
  private goToTaskList(day: number): void {
    var todayDate: Date = new Date();
    let creationPermission: boolean = this.year > todayDate.getFullYear();
    let currentMonth: number = todayDate.getMonth() + 1;
    if (!creationPermission && (this.year == todayDate.getFullYear() && this.month >= currentMonth)) {
      creationPermission = this.month > currentMonth ? true : day >= todayDate.getDate();
    }
    this.navCtrl.push(TasksListPage, { day: day, month: this.month, year: this.year, monthName: this.monthName, creationPermission: creationPermission });
  }

  //calculate datas of next month of this year, or first month of next year
  private calculateNextMonth(): void {
    this.month++;
    if (this.month == 13) {
      this.month = 1;
      this.year++;
    }
    this.calendar = this.calculateCalendar(this.getInitialDayMonth(this.month, this.year), this.getNumberDaysMonth(this.month, this.year));
    this.calculateNameOfMonth(this.month);
  }

  //calculate datas of previous month of this year, or last month of previous year
  private calculatePreviousMonth(): void {
    this.month--;
    if (this.month == 0) {
      this.month = 12;
      this.year--;
    }
    this.calendar = this.calculateCalendar(this.getInitialDayMonth(this.month, this.year), this.getNumberDaysMonth(this.month, this.year));
    this.calculateNameOfMonth(this.month);
  }

}