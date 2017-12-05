define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TotalUpdate {
        constructor(total) {
            this.total = total;
        }
    }
    exports.TotalUpdate = TotalUpdate;
    class LoginStatus {
        constructor(status, message = '') {
            this.status = status;
            this.message = message;
        }
    }
    exports.LoginStatus = LoginStatus;
});
//# sourceMappingURL=messages.js.map