import { Component, OnInit } from '@angular/core';
import { MarcoPoloService } from './marco-polo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MyTest';
  marcoPolo: any;

  constructor(private marcoPoloSrv: MarcoPoloService) {

  }

  ngOnInit() {
    this.marcoPolo =  this.marcoPoloSrv.marcoPoloFunc(100);
    console.log('message', this.marcoPolo);
  }
}
