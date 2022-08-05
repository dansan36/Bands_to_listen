import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emmitBandsList= new EventEmitter();

  public addItemBandsList:string=""

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemBandsList(){
    this.addItemBandsList=this.addItemBandsList.trim()
    if(this.addItemBandsList){
      console.log(this.addItemBandsList);
    this.emmitBandsList.emit(this.addItemBandsList)
    this.addItemBandsList="";

    }
    
  }
}
