import { Component, OnInit,Inject,ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Feedback, ChartType, Xaxisvalues,AxisData } from '../shared/feedback';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-chartdialog',
  templateUrl: './chartdialog.component.html',
  styleUrls: ['./chartdialog.component.scss']
})
export class ChartDialogComponent implements OnInit {
  @ViewChild('fform',{static: false}) feedbackFormDirective;
  heading:string;
  constructor(private fb: FormBuilder,
  public dialogRef: MatDialogRef<ChartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.heading=data.title;
      this.createForm();
    }
    feedbackForm: FormGroup;
    feedback: Feedback;
    feedbackcopy:Feedback;
    fberrMess: string;
    chartType = ChartType;
    Xaxisvalues = Xaxisvalues;
    Data=[];
    formErrors = {
      'charttype': '',
      'title': '',
      'yaxis': '',
      'xaxis':''
    };
  
    validationMessages = {
      'charttype': {
        'required':      'Chart Type is required.'
      },
      'title': {
        'required':      'Title is required.',
        'maxlength':     'Title cannot be more than 25 characters long.'
      },
      'yaxis': {
        'required':      ' yaxis is required.',
      },
      'xaxis': {
        'required':      ' yaxis is required.',
      }
    };
  
    
          
  
    ngOnInit() {
    }
  
    createForm() {
      this.feedbackForm = this.fb.group({
        charttype: ['', Validators.required ],
        title: ['', Validators.required ],
        subtitle:'',
        yaxis: ['', Validators.required ],
        xaxis: ['', Validators.required ],
        table: false,
        message: ''
      });
  
      this.feedbackForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
  
      this.onValueChanged(); // (re)set validation messages now
    }
    onValueChanged(data?: any) {
      if(this.feedbackForm.value.charttype){
        this.Data=AxisData;
      }
      if (!this.feedbackForm) { return; }
      const form = this.feedbackForm;
      for (const field in this.formErrors) {
        if (this.formErrors.hasOwnProperty(field)) {
          // clear previous error message (if any)
          this.formErrors[field] = '';
          const control = form.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
            for (const key in control.errors) {
              if (control.errors.hasOwnProperty(key)) {
                this.formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
      }
    }
  
    onSubmit() {
      const fb:Feedback={
      charttype:this.feedbackForm.value.charttype,
      title:this.feedbackForm.value.title,
      subtitle:this.feedbackForm.value.subtitle,
      yaxis:this.feedbackForm.value.yaxis,
      table:this.feedbackForm.value.table,
      xaxis:this.feedbackForm.value.xaxis,
      message:this.feedbackForm.value.message
    };
      this.feedbackcopy=fb;
      console.log(this.feedbackcopy);
      this.feedbackForm = this.fb.group({
        charttype: ['', [Validators.required] ],
        title: ['', [Validators.required, Validators.maxLength(25)] ],
        subtitle:'',
        xaxis: ['', [Validators.required] ],
        yaxis: ['', [Validators.required] ],
        table: false,
        message: ''
      });
      //this.feedbackFormDirective.resetForm();
      this.dialogRef.close({event:'close',data:this.feedbackcopy});
    }
  
  }
