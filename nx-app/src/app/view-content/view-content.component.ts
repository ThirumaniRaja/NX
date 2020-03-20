import { Component, OnInit } from '@angular/core';
import localData from '../assest/localData.json';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.scss']
})
export class ViewContentComponent implements OnInit {
  data = [];
  submenuData = [];
  ckindex: number = 0;
  dialogData;
  submenu_index: number ;
  i: number;
  j: number;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.data = localData;
  }


  onScroll() {
    document.querySelector('.active').scrollIntoView();
    // console.log("scrolled")
    // if(document.body.scrollHeight >= 625){
    //   setTimeout(() => {

    //   }, 1000);

    //  // window.location.reload();
    // }
  }

  showSubMenu(data, index) {
    this.submenu_index = index
    console.log(index)
   // document.getElementById('main_menu'+index).setAttribute("style","background-color: yellow;");
    if (this.ckindex !== index) {
      console.log("ck",this.ckindex)
      document.getElementById('showsubmenu_' + this.ckindex).style.display = 'none';
      document.getElementById('main_menu'+this.ckindex).style.backgroundColor = 'white';
      //document.getElementById('main_menu'+index).setAttribute("style","background-color: white;");
    }
    this.submenuData = data;
    this.ckindex = index;

    console.log(data, index)
    if (document.getElementById('showsubmenu_' + index).style.display === 'none') {
      document.getElementById('showsubmenu_' + index).style.display = 'block';
      document.getElementById('main_menu'+index).style.backgroundColor = 'yellow';
    }
    else if (document.getElementById('showsubmenu_' + index).style.display === 'block') {
      document.getElementById('showsubmenu_' + index).style.display = 'none';
      document.getElementById('main_menu'+index).style.backgroundColor = 'white';
     // document.getElementById('main_menu'+index).setAttribute("style","background-color: white;");
    }
  }

  onCLickMenu(data, ix,index) {
    this.i = ix;
    this.j = index;
    console.log("j",index)
    console.log("i",ix)
   // document.getElementById('submenu'+index).style.backgroundColor = 'yellow';
    //document.getElementById('sb_menu'+ix+index).style.backgroundColor = 'yellow';
    let jindex = 0;
    if (jindex !== index) {
      document.getElementById('sb_menu'+ix+jindex).style.backgroundColor = 'white';
    }
    jindex = index;

    if(document.getElementById('sb_menu'+ix+index).style.backgroundColor === 'white'){
      document.getElementById('sb_menu'+ix+index).style.backgroundColor = 'yellow';
    }
    else if(document.getElementById('sb_menu'+ix+index).style.backgroundColor === 'yellow'){
      document.getElementById('sb_menu'+ix+index).style.backgroundColor = 'white';
    }

    this.dialogData = data
    console.log(this.dialogData,index)
    this.openDialog();

  }

  openDialog(): void {
    console.log(this.dialogData)
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: { id: this.dialogData.id, message: this.dialogData.message }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
        document.getElementById('sb_menu'+this.i+this.j).style.backgroundColor = 'white';
      
    });
  }

  onClickLeft() {
    document.getElementById('main_panel').setAttribute("style","position:relative; float: left;");
  }

  onClickRight() {
    document.getElementById('main_panel').setAttribute("style","position:relative; float: right;");
    }

}
