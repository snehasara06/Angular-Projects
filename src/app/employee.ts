import { EmailValidator } from "@angular/forms";

export class Employee {
    constructor(
        public firstname:string,
        public lastname:string,
        public email:EmailValidator,
    ){}
}
