import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  private id: number;
  private name: String; 
  private progress: number;
  private difficultyLevel: number;
  private note: String;  
  private modeCreate: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.name = this.navParams.get('name');
    this.progress = this.navParams.get('progress');
    this.difficultyLevel = this.navParams.get('difficulty');
    this.note = this.navParams.get('note');
    this.modeCreate = this.navParams.get('mode');
    if (!this.modeCreate) {
      this.id = this.navParams.get('id');
    }
  }  

  //save datas of Task
  private save(): void {
    if (this.modeCreate) {
      
    } else {

    }
  }

}
