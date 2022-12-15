import { Component } from '@angular/core';
import { Tasks } from './home.component.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public Title : string;
  public Description: string;
  public tasks:Tasks[];
  // public taskslist: Tasks;
  
  // public title: any;
  // public declarations:any;
  // public error='Please enter valid task';
constructor(){
  this.Title='';
  this.Description='';

  this.tasks= [];
}

  public addTask(){
    let newtasks: Tasks={
      title: this.Title,
      description: this.Description

    };
    this.tasks.push(newtasks);

    this.Title = this.Description ='';
      
    }
  }



