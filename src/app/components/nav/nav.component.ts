import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllRoutes, FREELANCER_ROUTE, COMPANY_ROUTE } from '../../routes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public FREELANCER_ROUTE = FREELANCER_ROUTE;
  public COMPANY_ROUTE = COMPANY_ROUTE;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  isCurrentRoute(routerLink: string): boolean {
    return '/' + routerLink === this.router.url;
  }

}
