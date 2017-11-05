import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  public serviceUser: string;

  constructor() {
   }

   public showServiceUserName(): string {
    return this.serviceUser + 'App Service';
   }

}
