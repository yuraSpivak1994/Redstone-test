import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { fader } from '../shared/route-animations';
import { AuthorizationService } from '../service/authorization.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  animations: [fader]
})
export class MainComponent {

  constructor(private authService: AuthorizationService, private router: Router) {}

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  public logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
