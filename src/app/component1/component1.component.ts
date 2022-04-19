import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit{
// @Input() title1:string="";
// @Input() registerUser():FormGroup ="";
  // @Input() title1:string="";
  // @Input() registerUser():FormGroup ="";
  // public form: FormGroup | undefined;
  

  constructor() { }

  ngOnInit(): void {
  }

}
