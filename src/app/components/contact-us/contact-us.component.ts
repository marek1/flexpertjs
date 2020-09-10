import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { EmailService } from '../../service/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  constructor(private emailService: EmailService) {
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required
      ]),
      message: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    this.emailService.sendEmail(this.contactForm.value.name, this.contactForm.value.email, this.contactForm.value.message);
  }
}
