var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let App = class App {
        configureRouter(config, router) {
            config.map([
                {
                    route: ['', 'login'],
                    name: 'login',
                    moduleId: 'components/login',
                    nav: true,
                    title: 'Login',
                },
                {
                    route: 'signup',
                    name: 'signup',
                    moduleId: 'components/signup',
                    nav: true,
                    title: 'Signup',
                },
            ]);
            this.router = router;
        }
    };
    App = __decorate([
        aurelia_framework_1.inject(aurelia_framework_1.Aurelia, aurelia_event_aggregator_1.EventAggregator)
    ], App);
    exports.App = App;
});
//# sourceMappingURL=app.js.map