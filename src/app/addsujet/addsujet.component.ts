import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-addsujet',
  templateUrl: './addsujet.component.html',
  styleUrls: ['./addsujet.component.css']
})
export class AddsujetComponent implements OnInit {
  token = localStorage.getItem('token') || {};
  decoded = jwt_decode(this.token);
  constructor(private userService: UserService) { }
  sujetForm: FormGroup;

  ngOnInit(): void {
    this.sujetForm = new FormGroup({
      // image : File,
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
    console.log(this.decoded);
    
  }
  post() {
    this.userService.addsujet(this.sujetForm.value, this.decoded.data._id).subscribe((res: any) => {
      console.log(res);

    });
  }

}
