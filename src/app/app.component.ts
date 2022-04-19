import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title1 = 'Reactive Forms';
  title2='Template Driven Forms';

  // loginForm=new FormGroup({
  //   user:new FormControl(),
  //   password:new FormControl(),
  // })

  // loginUser(){
  //   console.warn(this.loginForm.value);
  // }

  registerForm=new FormGroup({
    first:new FormControl(),
    // last:new FormControl(),
    mail:new FormControl(),
    phone:new FormControl()
    // password:new FormControl(),
    // conpass:new FormControl()
  })

  registerUser(item:any){
console.warn(item);
  }
}

