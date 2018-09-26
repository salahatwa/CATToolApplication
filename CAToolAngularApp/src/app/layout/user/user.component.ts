import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { UsersService } from './user.service';
import { Subject } from 'rxjs';

class Person {
  id: number;
  first_name: string;
  last_name: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  persons: Person[];
  AllData : any = [];
  constructor(private getData : UsersService,
    private _activatedRouter: ActivatedRoute,
    public router: Router,
    private http: HttpClient) { 

  }

  //private loadcomponent=false;

  addusers()
  {
   // this.loadcomponent=true;
    this.router.navigate(['/adduser']);
  }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      responsive: true};

    this.getData.CollectData().subscribe(result => 
      {
      this.AllData = result ;
      this.dtTrigger.next();
      console.log(this.AllData);
      }); 

  }
  //   const that = this;
  //    let headers = new HttpHeaders();
  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     pageLength: 2,
  //     serverSide: true,
  //     processing: true,
  //     ajax: (dataTablesParameters: any, callback) => {
  //       console.log(dataTablesParameters);
  //       headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  //       that.http
  //         .post<DataTablesResponse>(
  //           'http://localhost:8090/user/get',
  //           dataTablesParameters, {headers : headers}
  //         ).subscribe(resp => {
  //           that.persons = resp.data;
  //           console.log(that.persons);
  //           console.log(dataTablesParameters);
  //           callback({
  //             recordsTotal: resp.recordsTotal,
  //             recordsFiltered: resp.recordsFiltered,
  //             data: []
  //           });
  //         });
  //     },
  //     columns: [{ data: 'id' }, { data: 'first_name' }, { data: 'last_name' }]
  //   };
  // }
  }
