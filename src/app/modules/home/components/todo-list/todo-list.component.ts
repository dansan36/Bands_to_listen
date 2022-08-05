import { Component, DoCheck, OnInit } from '@angular/core';
import { BandsList } from '../../model/bands-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck  {

  public bandsList:Array<BandsList>=JSON.parse(localStorage.getItem('list')|| '[]');

  constructor() { }

ngDoCheck() {
  this.setLocalStorage();
   
}

  public setEmitBandsList(event:string){
    this.bandsList.push({bands:event,checked:false})

  }
  public deleteItemBandList(event:number){
    this.bandsList.splice(event,1);
  }
 public deleteAll(){
  const confirm=window.confirm("Tem Certeza que deseja excluir tudo?")
  if(confirm==true){
    this.bandsList=[];
    
  }
  
 }

 public validationInput(event:string,index:number){
  if(!event.length){
    const confirm=window.confirm("O Campo está vazio, deseja excluir???")
    if(confirm){
      this.deleteItemBandList(index)
    }
  }
 }

 public setLocalStorage(){
  if(this.bandsList){
    this.bandsList.sort((first,last)=>Number(first.checked)-Number(last.checked));
    localStorage.setItem("list",JSON.stringify(this.bandsList))
  }

 }


}
