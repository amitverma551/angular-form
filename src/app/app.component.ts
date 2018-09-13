import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'vue'];
  topicHasError = true;

  userModel = new User('', 'amitverma916@gmail.com',9899999999,'default','morning',true);

  validateTopic(value){
   if(value === "default"){
     this.topicHasError = true;
   }else{
     this.topicHasError = false;
   }
  }
}
