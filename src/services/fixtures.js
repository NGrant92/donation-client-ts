define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Fixtures {
        constructor() {
            this.baseUrl = 'http://localhost:4000';
            this.methods = ['Cash', 'Paypal'];
            this.candidates = [
                {
                    firstName: 'Lisa',
                    lastName: 'Simpson',
                    office: 'President',
                },
                {
                    firstName: 'Bart',
                    lastName: 'Simpson',
                    office: 'President',
                }
            ];
            this.donations = [
                {
                    amount: 23,
                    method: 'cash',
                    candidate: this.candidates[0],
                },
                {
                    amount: 212,
                    method: 'paypal',
                    candidate: this.candidates[1],
                },
            ];
            this.users = new Map()
                .set('homer@simpson.com', {
                firstName: 'Homer',
                lastName: 'Simpson',
                email: 'homer@simpson.com',
                password: 'secret',
            })
                .set('marge@simpson.com', {
                firstName: 'Marge',
                lastName: 'Simpson',
                email: 'marge@simpson.com',
                password: 'secret',
            });
        }
    }
    exports.default = Fixtures;
});
//# sourceMappingURL=fixtures.js.map