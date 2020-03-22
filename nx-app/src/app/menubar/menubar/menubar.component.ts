import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import localData from '../../assest/localData.json';
import { CommondialogComponent } from 'src/app/globaldialog/commondialog/commondialog.component';
import { EventEmitter } from 'protractor';
import { style } from '@angular/animations';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  data = [];
  rightview = 'initial';
  submenuData = [];
  ckindex: number = 0;
  dialogData;
  submenu_index: number = 0;
  i: number;
  j: number;
  navigate: string = '';
  arrow: boolean = false;;
  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.data = localData;
  }
  
  onScroll() {
    document.querySelector('.active').scrollIntoView();
    if (document.getElementById('showsubmenu_' + this.submenu_index).style.display === 'block') {
      document.getElementById('showsubmenu_' + this.submenu_index).style.display = 'none';
      document.getElementById('showsubmenu_' + this.ckindex).setAttribute("style", "display:none");
      document.getElementById('main_menu' + this.ckindex).style.backgroundColor = 'white';
      
    }
    
  }

  showSubMenu(menuview,data, index) {
    console.log(menuview)
    this.submenu_index = index
    if (this.ckindex !== index) {
      console.log("ck", this.ckindex)
      document.getElementById('showsubmenu_' + this.ckindex).style.display = 'none';
      document.getElementById('main_menu' + this.ckindex).style.backgroundColor = 'white';
    }
    this.submenuData = data;
    this.ckindex = index;

    if (document.getElementById('showsubmenu_' + index).style.display === 'none') {
      document.getElementById('showsubmenu_' + index).style.display = 'block';
      document.getElementById('main_menu' + index).style.backgroundColor = 'yellow';
      this.onMenuViewHandle(menuview,index);
    }
    else if (document.getElementById('showsubmenu_' + index).style.display === 'block') {
      document.getElementById('showsubmenu_' + index).style.display = 'none';
      document.getElementById('main_menu' + index).style.backgroundColor = 'white';
    }
  }

  onCLickMenu(data, ix, index) {
    this.i = ix;
    this.j = index;
    let jindex = 0;
    if (jindex !== index) {
      document.getElementById('sb_menu' + ix + jindex).style.backgroundColor = 'white';
    }
    jindex = index;

    if (document.getElementById('sb_menu' + ix + index).style.backgroundColor === 'white') {
      document.getElementById('sb_menu' + ix + index).style.backgroundColor = 'yellow';
    }
    else if (document.getElementById('sb_menu' + ix + index).style.backgroundColor === 'yellow') {
      document.getElementById('sb_menu' + ix + index).style.backgroundColor = 'white';

    }

    this.dialogData = data
    this.openDialog();

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CommondialogComponent, {
      width: '500px',
      data: { id: this.dialogData.id, message: this.dialogData.message }
    });

    dialogRef.afterClosed().subscribe(result => {
      document.getElementById('sb_menu' + this.i + this.j).style.backgroundColor = 'white';

    });
  }

  onClickLeft() {
    this.rightview = 'left';
    this.arrow = false;
    this.navigate = 'start';
    localStorage.setItem("nav", this.navigate);
    document.getElementById('active_scroll').setAttribute("style", "position:relative; float: left;");
  }

  onClickRight() {
    this.rightview = 'right';
    this.navigate = 'end'
    this.arrow = true;
    localStorage.setItem("nav", this.navigate);
    document.getElementById('active_scroll').setAttribute("style", "position:relative; float: right;");
   
  }

  onMenuViewHandle(data,index){
    console.log(data,index)
    if(this.rightview === 'right'){
      if(data === 'start'){
        document.getElementById('showsubmenu_' + index).setAttribute("style", "position:fixed;top:35px;");
      }
      else if(data === 'end'){
        document.getElementById('showsubmenu_'+index).setAttribute("style", "position: fixed;margin-right: 96px;top: 525px;");
      }
    }
    else {
      if(data === 'start'){
        document.getElementById('showsubmenu_' + index).setAttribute("style", "position:fixed;top:35px; left:125px");
      }
      else if(data === 'end'){
        document.getElementById('showsubmenu_'+index).setAttribute("style", "position: fixed;margin-right: 96px;top: 525px;left: 125px;");
      }
    }
   
  }

  clearStaticView(){

  }
}
