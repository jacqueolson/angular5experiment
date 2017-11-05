import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.css']
})

export class AppRootComponent {

  public title = 'Warrendale Mobile Pharmacy';
  public appUser = 'Jacque Olson';

  public constructor(private appService: AppService) {
    appService.serviceUser = this.appUser;
    console.log(appService.showServiceUserName());
  }
}
