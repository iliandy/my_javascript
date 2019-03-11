import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Easy Pressure Cooker Pot Roast", "Yummy tender beef, carrots, and potatos!", "http://images.media-allrecipes.com/userphotos/720x405/3553277.jpg"),
    new Recipe("Pressure Cooker Beef Chili", "Yummy tender beefy chili!", "http://images.media-allrecipes.com/userphotos/720x405/961322.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
