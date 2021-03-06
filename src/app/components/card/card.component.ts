import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  cards:Card[]=[
    {
      title:"Pizza",
      url:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=714&q=80",
      showAddButton:true,
      showButtonsGroup:false
    },

    {
      title:"Biscuit",
      url:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=714&q=80",
      showAddButton:true,
      showButtonsGroup:false
    },
     {
      title:"Biscuit",
      url:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=714&q=80",
      showAddButton:true,
      showButtonsGroup:false
    },
    {
      title:"Biscuit",
      url:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=714&q=80",
      showAddButton:true,
      showButtonsGroup:false
    },
    
  ]
 
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(card:Card){
    card.showAddButton=!card.showAddButton
    card.showButtonsGroup=!card.showButtonsGroup
  }

}


interface Card{
  title:string,
  url:string
  showAddButton:boolean
  showButtonsGroup:boolean
}