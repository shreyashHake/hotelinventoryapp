import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'taj-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName: string = 'Taj Hotels';
  numberOfRooms: number = 10;

  /**
   * banana syntax : (banana)
   * pop syntax : [pop]
   */

  hideRooms: boolean = false;
  title: string = 'Taj Hotel';
  selectedRoom!: RoomList;
  roomList: RoomList[] = [];


  // Dependency Enjection : now we can call services inside ngOnIt()
  constructor(@SkipSelf() private roomService : RoomsService ) { }

  /** @SkipSelf() : this decorator will tell to skip the 'provider' search in this file
   * and search in the parent one . . .
   */

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  // @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent; /** by default the static is 'false' and so we can not use it in ngOnInit() to reduce error */
  // * @ViewChild() :
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  // * @ViewChildren() :
  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;


  ngAfterViewInit(): void {
    // * @ViewChild() :
    console.log('From view child : ' + this.headerComponent);
    this.headerComponent.title = this.title;

    // // * @ViewChildren() :
    // console.log(this.headerComponents);
    // this.headerComponents.last.title = "Children Component"

  }

  ngAfterViewChecked() { /** In development mode the code is checked twice, and this ngAfterViewChecked executes after 1 out of 2 lifecycle. */
  }

  ngOnInit(): void {
    console.log('From view child : ' + this.headerComponent);
    this.roomList = this.roomService.getRooms();
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomType: 'Delux Room',
      amenities: 'AC, TV',
      price: 3489,
      photos: 'World',
      checkInTime: new Date('16-Jan-2020'),
      checkOutTime: new Date('19-Jan-2020'),
    };

    // this.roomList.push(room); /*Without "changeDetection" */
    this.roomList = [...this.roomList, room]; /*With "changeDetection" */
  }

}
