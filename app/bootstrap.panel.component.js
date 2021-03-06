System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BootstrapPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BootstrapPanel = (function () {
                function BootstrapPanel() {
                }
                BootstrapPanel = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: " <div class= \"panel panel-default\">\n    \t\t\t\t<div class= \"panel-heading\">\n    \t\t\t\t  <ng-content select= \".heading\">\n    \t\t\t\t  <ng-content>\n    \t\t\t\t </div>\n    \t\t\t\t<div class= \"panel-body\"> \n    \t\t\t\t  <ng-content select= \".body\">\n\n    \t\t\t\t  </ng-content>\n\n    \t\t\t\t</div>\n    \t\t\t</div>  \n    \t\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BootstrapPanel);
                return BootstrapPanel;
            }());
            exports_1("BootstrapPanel", BootstrapPanel);
        }
    }
});
//# sourceMappingURL=bootstrap.panel.component.js.map