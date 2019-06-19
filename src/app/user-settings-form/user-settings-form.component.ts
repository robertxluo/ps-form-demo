import { Component, OnInit } from '@angular/core';
import { UserSettings } from './../data/user-settings';
import { NgForm } from '@angular/forms';

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

  originalUserSettings: UserSettings = { ...this.userSettings };

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }
}
