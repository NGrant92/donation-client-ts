var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./fixtures", "./messages", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, fixtures_1, messages_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let DonationService = class DonationService {
        constructor(data, ea) {
            this.donations = [];
            this.methods = [];
            this.candidates = [];
            this.total = 0;
            this.users = data.users;
            this.donations = data.donations;
            this.candidates = data.candidates;
            this.methods = data.methods;
            this.ea = ea;
        }
        donate(amount, method, candidate) {
            const donation = {
                amount: amount,
                method: method,
                candidate: candidate,
            };
            this.donations.push(donation);
            console.log(`${amount} donated to ${candidate.firstName} ${candidate.lastName} : ${method}`);
            this.total = this.total + amount;
            console.log('Total so far ' + this.total);
            this.ea.publish(new messages_1.TotalUpdate(this.total));
        }
        addCandidate(firstName, lastName, office) {
            const candidate = {
                firstName: firstName,
                lastName: lastName,
                office: office,
            };
            this.candidates.push(candidate);
        }
        register(firstName, lastName, email, password) {
            const newUser = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            this.users.set(email, newUser);
        }
        login(email, password) {
            const loginStatus = new messages_1.LoginStatus(false);
            const user = this.users.get(email);
            if (user) {
                if (user.password === password) {
                    loginStatus.status = true;
                    loginStatus.message = 'logged in';
                }
                else {
                    loginStatus.message = 'Incorrect password';
                }
            }
            else {
                loginStatus.message = 'Unknown user';
            }
            this.ea.publish(loginStatus);
        }
        logout() {
            this.ea.publish(new messages_1.LoginStatus(false));
        }
    };
    DonationService = __decorate([
        aurelia_framework_1.inject(fixtures_1.default, aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [fixtures_1.default, aurelia_event_aggregator_1.EventAggregator])
    ], DonationService);
    exports.DonationService = DonationService;
});
//# sourceMappingURL=donation-service.js.map