import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-commondialog',
  templateUrl: './commondialog.component.html',
  styleUrls: ['./commondialog.component.scss']
})
export class CommondialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CommondialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  onNoClick(): void {
    this.dialogRef.close('close');
  }
}
