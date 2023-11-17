import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  cdn = environment.cdn;

  constructor() { }

  ngOnInit(): void {
  }

}
