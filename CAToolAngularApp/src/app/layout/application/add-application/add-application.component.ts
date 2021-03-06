import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AddApplicationService } from './add-application.service';
import { Application } from '../Application';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.scss']
})
export class AddApplicationComponent implements OnInit {

  application: Application = new Application();
  submitted = false;
  
  constructor(private router:Router,private addapplicationService:AddApplicationService) { }

  ngOnInit() {}

  createApplication(): void {
      this.submitted = false;
      this.application = new Application();
    }
   
    save() {
      this.addapplicationService.createApplication(this.application)
        .subscribe(data => console.log(data), error => console.log(error));
      this.application = new Application();
      this.router.navigate(['/application']);
    }
   
    onSubmit() {
      this.submitted = true;
      this.save();
    }

}
