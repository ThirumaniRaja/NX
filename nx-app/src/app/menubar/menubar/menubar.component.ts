import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import localData from '../../assest/localData.json';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  data = [];
  submenuData = [];
  ckindex:number = 0;
  dialogData ;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.data = localData;
  }
  onScroll() {
    console.log("scrolled")
    if(document.body.scrollHeight >= 625){
      document.querySelector('.active').scrollIntoView();
    }
  }

  showSubMenu(data,index){
    if(this.ckindex !== index){
      console.log(this.ckindex)
      document.getElementById('showsubmenu_' + this.ckindex).style.display = 'none';
    }
    this.submenuData = data;
    this.ckindex = index;
  
    console.log(data,index)
    if (document.getElementById('showsubmenu_' + index).style.display === 'none' ) {
    document.getElementById('showsubmenu_' + index).style.display = 'block';
    }
    else if(document.getElementById('showsubmenu_' + index).style.display === 'block'){
      document.getElementById('showsubmenu_' + index).style.display = 'none';
    }
  }

  onCLickMenu(data,index){
    this.dialogData = data
    console.log(this.dialogData)
    this.openDialog();
    
  }

  openDialog(): void {
    console.log(this.dialogData)
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {id: this.dialogData.id, message: this.dialogData.message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
