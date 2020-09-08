import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-sujetinfo',
  templateUrl: './sujetinfo.component.html',
  styleUrls: ['./sujetinfo.component.css']
})
export class SujetinfoComponent implements OnInit {

  constructor(private _Activatedroute: ActivatedRoute, private userService: UserService) { }
  id = this._Activatedroute.snapshot.paramMap.get('id');
  token = localStorage.getItem('token') || {};
  decoded = jwt_decode(this.token);
  table;
  ngOnInit(): void {
    this.getsujetById() ;
  }
  getsujetById() {
   this.userService.sujetbyid(this.id).subscribe((res:any)=>{
     console.log(res);
     this.table = res;
   })
  }
  oui() {
    this.userService.oui(this.id, this.decoded.data._id).subscribe((res:any)=>{
      console.log(res);
    });
  }
  no(){
    this.userService.no(this.id, this.decoded.data._id).subscribe((res:any)=>{
      console.log(res);
    });
  }

}
