import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-allsujet',
  templateUrl: './allsujet.component.html',
  styleUrls: ['./allsujet.component.css']
})
export class AllsujetComponent implements OnInit {

  
  displayedColumns: string[] = ['title', 'description'];
  dataSource: any;
  isDeleted = false;
  @ViewChild(MatSortModule, {static: false}) sort: MatSortModule;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getsujet();
  }
 getsujet() {
  this.userService.getallsujet().subscribe((res:any)=>{
    this.dataSource = res;
  })
 }

}
