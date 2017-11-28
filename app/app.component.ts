import {Component} from 'angular2/core';
import{BootstrapPanel} from './bootstrap.panel.component';

@Component({
    selector: 'my-app',
    directives: '[BootstrapPanel]',
    template:  ` <bs-panel > 
    <div class="heading"> my heading </div>
    <div class= "body"> This is the body! </div>
     </bs-panel>  
    	
    `
}) 
export class AppComponent { 

}
