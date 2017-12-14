import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tasks-list',
  templateUrl: 'tasks-list.html',
})
export class TasksListPage {

  private day: number;
  private month: number;
  private year: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
  }

  ionViewWillEnter() {
    this.day = this.navParams.get('day');
    this.month = this.navParams.get('month');
    this.year = this.navParams.get('year');
  }

}
