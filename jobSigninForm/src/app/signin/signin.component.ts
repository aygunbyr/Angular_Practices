import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Jobs } from '../models/jobs';
import { JobService } from '../services';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  myjob: Jobs;
  constructor(private jobService: JobService) { 
    this.myjob = new Jobs("","","","","");
  }

  ngOnInit(): void {
  }

  loginUser(jobApplicationForm: NgForm) {
    console.log(jobApplicationForm);
    console.log("Full name: " + jobApplicationForm.value.fullNameField);
    console.log("E-mail address: " + jobApplicationForm.value.emailAddressField);
    console.log("Work Experience: " + jobApplicationForm.value.workExperienceField);
    console.log("Cover Letter: " + jobApplicationForm.value.coverLetterField);
    console.log("Gender: " + jobApplicationForm.value.genderField);
    console.log("Agree to terms: " + jobApplicationForm.value.termsField);
    this.myjob = new Jobs(jobApplicationForm.value.fullNameField, 
                          jobApplicationForm.value.emailAddressField, 
                          jobApplicationForm.value.workExperienceField,
                          jobApplicationForm.value.coverLetterField,
                          jobApplicationForm.value.genderField)

    console.log(this.myjob);
    this.jobService.postDatas(this.myjob);
        
  }

}
