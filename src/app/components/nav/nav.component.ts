import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'ui-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  cdn = environment.cdn;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
