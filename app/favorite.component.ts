import {Component, Input} from 'angular2/core';


@Component ({
	
	selector: 'favorite',
	template: ` 
	<i 
	class= "glyphicon"
	[ngClass]="{
		'glyphicon-star-empty': !isFavorite,
		'glyphicon-star': isFavorite
	}"
	(click)="onClick()">
	</i>
	`
})
export class FavoriteComponent {
	@Input() isFavorite = false;
	onClick(){
		this.isFavorite = !this.isFavorite; 
	}
}