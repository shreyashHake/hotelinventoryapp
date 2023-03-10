import { style } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef, ElementRef, Optional, Inject } from '@angular/core';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import { LocalStorageToken } from './localstorage.token'

@Component({
  selector: 'taj-root',
  // Inline HTML and HTML ref :

  templateUrl: './app.component.html',
  styles: [`h1 {color : red}`],

  // styleUrls: ['./app.component.scss']

  /* template: `  <h1>Hello world</h1>
  <p>This is hotle inventory app.</p>`, */

})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'hotelinventoryapp';

  // role= 'Admin';
  role = 'Admin';

  //  1. Dynamically loading the components

  // @ViewChild('user', {read: ViewContainerRef}) vrc!: ViewContainerRef;
  ngAfterViewInit() {
    // const componentRef = this.vrc.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms =  50;
  }

  // 2. Accessing a div container
  @ViewChild('name', { static: true }) name!: ElementRef;

  // **. Optional resolution modifiers :
  constructor(@Optional() private loggerServices : LoggerService,

  @Inject(LocalStorageToken) private localStorage : any /** Injecting value here . .*/) {

  }
  //** It will make this service optional */

  ngOnInit() {
    console.log(this.name);
    this.name.nativeElement.innerText = 'Angular Says hello !';
    this.localStorage.setItem('name', 'Taj Hotels');
  }
}
