import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myUsers: import("d:/mytest4mongoAngula/front/my_app/src/app/models/user").User[] | undefined;

  constructor( private UserSev: UserService) {
    this.getAllUsers()

   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   addUser(frm:NgForm){
    console.log( frm.value.fName)
    console.log(frm.value.accountNumber)
    console.log(frm.value.dateOfOperations)
    let temp= new User()
    temp.fName=frm.value.fName
    temp.accountNumber=frm.value.accountNumber
    temp.DateOfOperations=frm.value.dateOfOperations
    this.UserSev.addUser(temp).subscribe(msg => console.log(msg))
    this.getAllUsers()

}

getAllUsers(){
  this.UserSev.getUsers().subscribe(userAR => this.myUsers=userAR)
}

delCar(userId:string){
  this.UserSev.delUser(userId).subscribe(msg => console.log(msg))
  this.getAllUsers()
}
}





