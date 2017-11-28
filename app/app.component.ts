import {Component} from 'angular2/core';



@Component({
    selector: 'my-app',
    template: `   
    	<ul class= "nav nav-pills">
    		<li [class.active]="viewMode == 'map'"> <a (click)="viewMode= 'map'"> Map View </a></li> 
    		<li [class.active]="viewMode == 'list'"> <a (click)="viewMode= 'list'"> list View </a></li> 
    	</ul>
    	<div [ngSwitch]= "viewMode"> 
    		<template [ngSwitchWhen]="'map'" ngSwitchDefault> Map View Content </template>

    `
}) 
export class AppComponent { 
	viewMode = 'map';

}