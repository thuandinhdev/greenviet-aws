(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/angular-checklist/fesm5/angular-checklist.js":
/*!*******************************************************************!*\
  !*** ./node_modules/angular-checklist/fesm5/angular-checklist.js ***!
  \*******************************************************************/
/*! exports provided: ChecklistDirective, ChecklistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDirective", function() { return ChecklistDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistModule", function() { return ChecklistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ChecklistDirective = /** @class */ (function () {
    function ChecklistDirective() {
        this.maxSelectedItems = -1;
        this.checklistChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ////////////
    ChecklistDirective.prototype.ngOnChanges = function () {
        var checklist = this.checklist || [];
        this.isChecked = checklist.indexOf(this.checklistValue) >= 0;
    };
    ChecklistDirective.prototype.triggerOnChange = function (target) {
        var updatedList;
        var checklist = this.checklist || [];
        if (target && target.checked) {
            if (this.maxSelectedItems === -1 || checklist.length < this.maxSelectedItems) {
                updatedList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(checklist, [this.checklistValue]);
                this.checklistChange.emit(updatedList);
            }
            else {
                target.checked = false;
            }
        }
        else {
            var i = checklist.indexOf(this.checklistValue);
            updatedList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(checklist.slice(0, i), checklist.slice(i + 1));
            this.checklistChange.emit(updatedList);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChecklistDirective.prototype, "checklist", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChecklistDirective.prototype, "checklistValue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChecklistDirective.prototype, "maxSelectedItems", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ChecklistDirective.prototype, "checklistChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('checked')
    ], ChecklistDirective.prototype, "isChecked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event.target'])
    ], ChecklistDirective.prototype, "triggerOnChange", null);
    ChecklistDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[checklist]'
        })
    ], ChecklistDirective);
    return ChecklistDirective;
}());

var ChecklistModule = /** @class */ (function () {
    function ChecklistModule() {
    }
    ChecklistModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                ChecklistDirective,
            ],
            imports: [],
            exports: [
                ChecklistDirective,
            ]
        })
    ], ChecklistModule);
    return ChecklistModule;
}());

/*
 * Public API Surface of angular-checklist
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=angular-checklist.js.map


/***/ }),

/***/ "./src/app/core/services/defect.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/defect.service.ts ***!
  \*************************************************/
/*! exports provided: DefectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectService", function() { return DefectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DefectService = /** @class */ (function () {
    function DefectService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DefectService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/defect");
    };
    DefectService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/defect/" + id);
    };
    DefectService.prototype.create = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect", defect);
    };
    DefectService.prototype.update = function (defect) {
        return this.http.put(this.apiUrl + "/api/defect/" + defect.id, defect);
    };
    DefectService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/defect/" + id);
    };
    DefectService.prototype.updateNotes = function (defect) {
        return this.http.put(this.apiUrl + "/api/defect/notes/" + defect.id, defect);
    };
    DefectService.prototype.changeStatus = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/" + defect.id + "/change-status", { "status": defect.status });
    };
    DefectService.prototype.changeSeverity = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/" + defect.id + "/change-severity", { "severity": defect.severity });
    };
    DefectService.prototype.getDefectPermission = function (id, type) {
        return this.http.get(this.apiUrl + "/api/defect/" + id + "/permission/" + type, {});
    };
    DefectService.prototype.getDefectForKanban = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/kanban", defect);
    };
    DefectService.prototype.updateKanbanStatusList = function (defect) {
        return this.http.post(this.apiUrl + "/api/defect/update-kanban", defect);
    };
    DefectService.prototype.getDefectForCalendar = function (obj) {
        if (obj === void 0) { obj = {}; }
        return this.http.post(this.apiUrl + "/api/defect/calendar", obj);
    };
    DefectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DefectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DefectService);
    return DefectService;
}());



/***/ }),

/***/ "./src/app/core/services/department.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/department.service.ts ***!
  \*****************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    DepartmentService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/departments");
    };
    DepartmentService.prototype.getDepartmentRoles = function () {
        return this.http.get(this.apiUrl + "/api/get-department-roles");
    };
    DepartmentService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/departments/" + id);
    };
    DepartmentService.prototype.create = function (department) {
        return this.http.post(this.apiUrl + "/api/departments", department);
    };
    DepartmentService.prototype.update = function (department) {
        return this.http.put(this.apiUrl + "/api/departments/" + department.id, department);
    };
    DepartmentService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/departments/" + id);
    };
    DepartmentService.prototype.deleteDepartmentRole = function (id, roleId) {
        return this.http.delete(this.apiUrl + "/api/departments/" + id + "/" + roleId);
    };
    DepartmentService.prototype.getDepartmentDetail = function (id, roleId) {
        return this.http.get(this.apiUrl + "/api/departments/" + id + "/" + roleId);
    };
    DepartmentService.prototype.updateDepartmentDetail = function (id, roleId, menu) {
        return this.http.put(this.apiUrl + "/api/departments/" + id + "/" + roleId, menu);
    };
    DepartmentService.prototype.getDepartmentsClientsRoles = function () {
        return this.http.get(this.apiUrl + "/api/departments/clients-roles");
    };
    DepartmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/core/services/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    RoleService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/roles");
    };
    RoleService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/roles/" + id);
    };
    RoleService.prototype.create = function (role) {
        return this.http.post(this.apiUrl + "/api/roles", role);
    };
    RoleService.prototype.update = function (role) {
        return this.http.put(this.apiUrl + "/api/roles/" + role.id, role);
    };
    RoleService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/roles/" + id);
    };
    RoleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map