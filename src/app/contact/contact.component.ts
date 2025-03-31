import { Component } from '@angular/core';
import { FormControl, FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactData = {
    name:"",
    email:"",
    message:"",
    privacyPolicy: false
  }

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

    if (this.invalidFields.length === 0) {
      console.log('Form submitted successfully!', this.contactData);
    }
  }
  
}
