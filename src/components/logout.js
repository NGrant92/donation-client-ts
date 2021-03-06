var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "../services/donation-service", "aurelia-framework"], function (require, exports, donation_service_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let Logout = class Logout {
        constructor(donationService) {
            this.donationService = donationService;
        }
        logout() {
            console.log('logging out');
            this.donationService.logout();
        }
    };
    Logout = __decorate([
        aurelia_framework_1.inject(donation_service_1.DonationService),
        __metadata("design:paramtypes", [donation_service_1.DonationService])
    ], Logout);
    exports.Logout = Logout;
});
//# sourceMappingURL=logout.js.map