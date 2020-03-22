import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenubarComponent } from '../menubar/menubar/menubar.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  message;

  constructor() { 
  }

    ngOnInit(): void {
      this.message = localStorage.setItem('nav','start')
    }


    ngDoCheck(){
      this.message = localStorage.getItem("nav")
    }
    
}
