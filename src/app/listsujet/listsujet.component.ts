import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSortModule} from '@angular/material/sort';
import * as jwt_decode from 'jwt-decode';
import { UserService } from '../service/user.service';



@Component({
  selector: 'app-listsujet',
  templateUrl: './listsujet.component.html',
  styleUrls: ['./listsujet.component.css']
})
export class ListsujetComponent implements OnInit {

  
  token = localStorage.getItem('token') || {};
  decoded = jwt_decode(this.token);
  displayedColumns: string[] = ['title', 'description'];
  dataSource: any;
  isDeleted = false;
  @ViewChild(MatSortModule, {static: false}) sort: MatSortModule;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getsujetbyiduser();
  }
 getsujetbyiduser() {
  this.userService.getsujetbyid(this.decoded.data._id).subscribe((res:any)=>{
    this.dataSource = res;
  })
 }

}
