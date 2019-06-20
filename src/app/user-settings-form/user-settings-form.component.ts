import { Component, OnInit } from '@angular/core';
import { UserSettings } from './../data/user-settings';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { DataService } from './../data/data.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  userSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  singleModel = 'On';

  originalUserSettings: UserSettings = { ...this.userSettings };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('Form valid: ', form.valid);

    if (form.valid) {
      this.dataService
        .postUserSettingsForm(this.userSettings)
        .subscribe(
          result => console.log('success:', result),
          error => this.onHttpError(error)
        );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors';
    }
  }
}
