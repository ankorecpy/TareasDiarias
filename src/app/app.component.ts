import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';

import { DayDao } from '../providers/dataBase/day-dao';
import { TaskDao } from '../providers/dataBase/task-dao';

import { HomePage } from '../pages/home/home';
import { CalendarPage } from '../pages/calendar/calendar';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CalendarPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private sqlite: SQLite, public taskDao: TaskDao, public dayDao: DayDao) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.createDataBase();
      splashScreen.hide();
    });
  }

  private createDataBase(): void {
    this.sqlite.create({
      name: 'dailyTasks.db',
      location: 'default'
    })
    .then((db) => {
      this.dayDao.setDataBase(db);
      this.taskDao.setDataBase(db);     
      this.taskDao.createTable();
    })
    .catch(error => {
      console.log(error);
    })
  }

}

