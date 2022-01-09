import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.css']
})
export class Lesson4Component implements OnInit {
  public search = '';
  public arr = [] as any;
  public editIndex! : number;
  public showAdd = false;
  public showEdit = false;
  public editPhoneInpt = '';
  public editLastNameInpt = '';
  public editFirstNameInpt = '';
  public newPhoneInpt = '';
  public newLastNameInpt = '';
  public newFirstNameInpt = '';
  public type = '';
  public firstType = '';
public firstAscVar  = false;
public firstDescVar = false;
public secondType = '';
public secondAscVar  = false;
public secondDescVar = false;
public phoneType = '';
public phoneAscVar  = false;
public phoneDescVar = false;
public activeColumn = '';

  constructor() { }

  ngOnInit(): void {
  }

  addPhone(): void {
    if (this.newPhoneInpt.length > 1 && this.newLastNameInpt.length > 1 && this.newFirstNameInpt.length > 1) {
      let obj = { first: this.newFirstNameInpt, last: this.newLastNameInpt, phone: this.newPhoneInpt }
      this.arr.push(obj);
      this.newPhoneInpt = '';
      this.newLastNameInpt = '';
      this.newFirstNameInpt = '';
      this.showAdd = false;
    } else {
      return
    }
  }
  openAdd() {
    this.showAdd = true;
  }



  editPhone(index: number): void {
    this.showEdit = true;
    this.editFirstNameInpt = this.arr[index].first;
    this.editLastNameInpt = this.arr[index].last;
    this.editPhoneInpt = this.arr[index].phone;
    this.editIndex = index;
  }
  deletePhone(index: number): void {
    this.arr.splice(index, 1);
  }
  saveEditPhone(): void {
    this.showEdit = false;
    this.arr[this.editIndex].first = this.editFirstNameInpt;
    this.arr[this.editIndex].last = this.editLastNameInpt;
    this.arr[this.editIndex].phone = this.editPhoneInpt;
    this.newFirstNameInpt = '';
    this.newLastNameInpt = '';
    this.newPhoneInpt = '';
  
  }
 
  firstSortClick() : void{
    this.activeColumn = 'first';
if(this.firstAscVar == false && this.firstDescVar == false){
  this.secondAscVar = false;
  this.secondDescVar = false;
  this.phoneAscVar = false;
  this.phoneDescVar = false;
  this.firstAscVar = true;
  this.type = 'asc';
  
}
else if(this.firstAscVar == true && this.firstDescVar == false){
  this.secondAscVar = false;
  this.secondDescVar = false;
  this.phoneAscVar = false;
  this.phoneDescVar = false;
  this.firstDescVar = true;
  this.firstAscVar = false;
  this.type = 'desc';
}
else if(this.firstAscVar == false && this.firstDescVar == true){
  this.secondAscVar = false;
  this.secondDescVar = false;
  this.phoneAscVar = false;
  this.phoneDescVar = false;
  this.firstDescVar = false;
  this.firstAscVar = true;
  this.type = 'asc';
}
  }
  phoneSortClick(){
     this.activeColumn = 'phone';
    if(this.phoneAscVar == false && this.phoneDescVar == false){
      this.secondAscVar = false;
      this.secondDescVar = false;
      this.phoneAscVar = true;
      this.phoneDescVar = false;
      this.firstAscVar = false;
      this.firstDescVar = false;
      this.type = 'asc';
    }
    else if(this.phoneAscVar == true && this.phoneDescVar == false){
      this.secondAscVar = false;
      this.secondDescVar = false;
      this.phoneAscVar = false;
      this.phoneDescVar = true;
      this.firstDescVar = false;
      this.firstAscVar = false;
      this.type = 'desc';
    }
    else if(this.phoneAscVar == false && this.phoneDescVar == true){
      this.secondAscVar = false;
      this.secondDescVar = false;
      this.phoneAscVar = true;
      this.phoneDescVar = false;
      this.firstDescVar = false;
      this.firstAscVar = false;
      this.type = 'asc';
    }
  }
  secondSortClick(){
    this.activeColumn = 'last';
    if(this.secondAscVar == false && this.secondDescVar == false){
      this.secondAscVar = true;
      this.secondDescVar = false;
      this.phoneAscVar = false;
      this.phoneDescVar = false;
      this.firstAscVar = false;
      this.firstDescVar = false;
      this.type = 'asc';
    }
    else if(this.secondAscVar == true && this.secondDescVar == false){
      this.secondAscVar = false;
      this.secondDescVar = true;
      this.phoneAscVar = false;
      this.phoneDescVar = false;
      this.firstDescVar =false;
      this.firstAscVar = false;
      this.type = 'desc';
    }
    else if(this.secondAscVar == false && this.secondDescVar == true){
      this.secondAscVar = true;
      this.secondDescVar = false;
      this.phoneAscVar = false;
      this.phoneDescVar = false;
      this.firstDescVar = false;
      this.firstAscVar = false;
      this.type = 'asc';
    }
  }
  changeSort(type : string) : void{
    this.type = type;
      }
}
