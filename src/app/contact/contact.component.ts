import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  contactData = {
    name:"",
    email:"",
    message:"",
    privacyPolicy: false
  }

  post = {
    endPoint: 'https://christian-duus.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  invalidFields: string[] = [];

  validateForm() {
    this.invalidFields = [];

    if (!this.contactData.name || this.contactData.name.length < 3) {
      this.invalidFields.push('name');
      this.contactData.name = ''; 
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!this.contactData.email || !emailRegex.test(this.contactData.email)) {
      this.invalidFields.push('email');
      this.contactData.email = ''; 
    }

    if (!this.contactData.message || this.contactData.message.length < 10) {
      this.invalidFields.push('message');
      this.contactData.message = ''; 
    }
    if (!this.contactData.privacyPolicy) {
      this.invalidFields.push('checkBox');
      
    }

    if (this.invalidFields.length === 0) {
      this.contactData.name = '';
      this.contactData.email = ''; 
      this.contactData.message = '';
    }
  }

  onSubmit(ngForm: NgForm) {
    this.validateForm()
    if (ngForm.submitted && this.invalidFields.length === 0 ) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            
            ngForm.resetForm();
          },
          error: (error) => {
            console.log(error)
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid ) {

      ngForm.resetForm();
    }
  }
  
}
