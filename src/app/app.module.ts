import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';

import { DayDao } from '../providers/dataBase/day-dao';
import { TaskDao } from '../providers/dataBase/task-dao';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CalendarPage } from '../pages/calendar/calendar';
import { TasksListPage } from '../pages/tasks-list/tasks-list';
import { TaskPage } from '../pages/task/task';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalendarPage,
    TasksListPage,
    TaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalendarPage,
    TasksListPage,
    TaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    TaskDao,
    DayDao,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
