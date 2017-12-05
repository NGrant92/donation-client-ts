var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../services/donation-service"], function (require, exports, aurelia_framework_1, donation_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let Donate = class Donate {
        constructor(ds) {
            this.amount = 0;
            this.methods = [];
            this.selectedMethod = '';
            this.donationService = ds;
            this.methods = ds.methods;
            this.selectedMethod = this.methods[0];
            this.candidates = ds.candidates;
            this.selectedCandidate = this.candidates[0];
        }
        makeDonation() {
            this.donationService.donate(this.amount, this.selectedMethod, this.selectedCandidate);
        }
    };
    Donate = __decorate([
        aurelia_framework_1.inject(donation_service_1.DonationService),
        __metadata("design:paramtypes", [donation_service_1.DonationService])
    ], Donate);
    exports.Donate = Donate;
});
//# sourceMappingURL=donate.js.map