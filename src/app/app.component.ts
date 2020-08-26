import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Pipes Demo';
  today = new Date();
  day;
  month;
  year;
  currentDate;
  student = {name:'Yogesh',age:21,course:'PGP Java', address:{city:'New Delhi', state:'Delhi',country:'India',pin: 110023}};
  money;
  marks;
  age;
  weekDays = ['Mon' ,'Tues' ,'Wed' ,'Thur','Fri' ,'Sat','Sun'];
  name = 'Kanish Kalra';
  num;
  constructor()
  {
    this.day = this.today.getDate();
    this.month = this.today.getMonth()+1;
    this.year = this.today.getFullYear();
    this.currentDate = this.day +'-'+this.month+"-"+this.year;
    this.money= 456;
    this.marks = 0.53;
    this.age = 43.8;
    this.num = 729; 
  }

}
