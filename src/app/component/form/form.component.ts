import { Component, OnInit } from '@angular/core';

import { Meal } from 'src/app/meal';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  meals!: Meal []

  constructor() { }

  ngOnInit(): void {
  }

}
