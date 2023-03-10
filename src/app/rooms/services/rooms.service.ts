import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../environments/environment'
import { APP_SERVICE_CONFIG } from '..//..//AppConfig/appconfig.services';
import { AppConfig } from '..//..//AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root',
})

export class RoomsService {
  roomList: RoomList[] = [
    {
      roomType: 'Delux room',
      amenities: 'Air Condition, Wifi',
      price: 20000,
      photos: 'Monalisa',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('11-Nov-2023'),
    },
    {
      roomType: 'Special room',
      amenities: 'Air Condition, AC',
      price: 15000,
      photos: 'Nature',
      checkInTime: new Date('18-Nov-2023'),
      checkOutTime: new Date('19-Nov-2023'),
    },
    {
      roomType: 'Normal room',
      amenities: 'Wifi, TV',
      price: 10000,
      photos: 'Picaso',
      checkInTime: new Date('11-Dec-2023'),
      checkOutTime: new Date('11-Dec-2023'),
    },
    {
      roomType: 'Star room',
      amenities: 'Air Condition, Wifi, AC',
      price: 20000,
      photos: 'Monalisa',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('11-Nov-2023'),
    },
  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private appConfig : AppConfig) {
    // console.log(environment.apiEndpoint); // directily assinging . . .
    
    console.log('Rooms services is called Globally!');
    console.log(this.appConfig.apiEndpoint);
  }

  getRooms(): RoomList[] {
    return this.roomList;
  }
}
