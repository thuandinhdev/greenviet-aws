(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-pm-defects-defects-module~modules-pm-projects-projects-module~modules-pm-tasks-tasks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i>&nbsp;Add Payment</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"createTodoForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"price\">{{'todos.create.fields.price' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"text\" appNumberFormat placeholder=\"{{'todos.create.placeholders.placeholder4' | translate}}\" class=\"form-control\" id=\"price\" formControlName=\"price\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.price.errors }\"/>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && todoControl.price.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.price.errors.required\">{{'todos.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.price.errors.pattern\">{{'todos.create.error_messages.message7' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"due_date\">Estimated date<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" formControlName=\"due_date\" id=\"due_date\" placeholder=\"{{'todos.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.due_date.errors }\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && todoControl.due_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div>Please select a valid estimated date.</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'todos.create.fields.description' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<textarea type=\"text\" placeholder=\"{{'todos.create.placeholders.placeholder1' | translate}}\" class=\"form-control\" id=\"description\" formControlName=\"description\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.description.errors }\"></textarea>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && todoControl.description.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.description.errors.required\">{{'todos.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.description.errors.minlength\">{{'todos.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.description.errors.maxlength\">{{'todos.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i>&nbsp;{{'todos.title' | translate}}</h2>\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<form class=\"form\" [formGroup]=\"editTodoForm\" (ngSubmit)=\"onSubmit()\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"form-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"price\">{{'todos.create.fields.price' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<input type=\"text\" appNumberFormat placeholder=\"{{'todos.create.placeholders.placeholder4' | translate}}\" class=\"form-control\" id=\"price\" formControlName=\"price\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.price.errors }\"/>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && todoControl.price.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.price.errors.required\">{{'todos.create.error_messages.message6' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.price.errors.pattern\">{{'todos.create.error_messages.message7' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"due_date\">{{'todos.create.fields.due_date' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" formControlName=\"due_date\" id=\"due_date\" placeholder=\"{{'todos.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.due_date.errors }\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && todoControl.due_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"todoControl.due_date.errors.required\">{{'todos.create.error_messages.message5' | translate}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-md-12\" *ngIf=\"editTodoForm.value.status == 2\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payment_date\">Payment Date<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" formControlName=\"payment_date\" id=\"payment_date\" placeholder=\"{{'todos.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.payment_date.errors }\" />\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && todoControl.payment_date.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"todoControl.payment_date.errors.required\">Please select a valid payment date.</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.status.errors }\">\n                        <label for=\"status\">{{'tasks.create.fields.status' | translate }}&nbsp;<span class=\"text-danger\">*</span> </label>\n                        <ng-select [searchable]=\"true\"\n                            [items]=\"status\"\n                            [selectOnTab]=\"true\"\n                            bindLabel=\"label\"\n                            bindValue=\"id\"\n                            labelForId=\"status\"\n                            formControlName=\"status\"\n                            [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.status.errors }\"\n                            placeholder=\"{{'tasks.create.placeholders.placeholder9' | translate }}\">\n                        </ng-select>\n                        <div *ngIf=\"isFormSubmitted && todoControl.status.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"todoControl.status.errors.required\">Please select a valid payment status.</div>\n                        </div>\n                    </div>\n                </div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">{{'todos.create.fields.description' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<textarea type=\"text\" placeholder=\"{{'todos.create.placeholders.placeholder1' | translate}}\" class=\"form-control\" id=\"description\" formControlName=\"description\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.description.errors }\"></textarea>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && todoControl.description.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.description.errors.required\">{{'todos.create.error_messages.message1' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.description.errors.minlength\">{{'todos.create.error_messages.message2' | translate}}</div>\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.description.errors.maxlength\">{{'todos.create.error_messages.message3' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.status.errors }\">\n\t\t\t\t\t\t<label for=\"status\">{{'todos.create.fields.status' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\n\t\t\t\t\t\t<ng-select [items]=\"('todos.status' | translate)\"\n\t\t\t\t\t\t\tbindLabel=\"label\"\n\t\t\t\t\t\t\tbindValue=\"id\"\n\t\t\t\t\t\t\t[multiple]=\"false\"\n\t\t\t\t\t\t\tformControlName=\"status\"\n\t\t\t\t\t\t\tplaceholder=\"{{'todos.create.placeholders.placeholder2' | translate}}\"\n\t\t\t\t\t\t\t[searchable]=\"true\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.status.errors }\">\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.label}}</ng-template>\n\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && todoControl.status.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.status.errors.required\">{{'todos.create.error_messages.message4' | translate}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\n\t</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"isPageloaded\">\n\t<div class=\"col-sm-12\">\n\t\t<div class=\"card bg-transparent\">\n\t\t\t<div class=\"card-header p-0\">\n\t\t\t\t<h4 class=\"sub-title mt-2\"><span>Payment process ({{totalcompleted| number:'1.0-0'}}/{{total| number:'1.0-0'}})</span></h4>\n\t\t\t\t<button class=\"btn btn-create mr-2 mb-0\" tooltip=\"{{'common.create' | translate}}\" (click)=\"openTodoCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_create']\">\n\t\t\t\t\t<i class=\"fa fa-plus\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"card-content pt-1\" *ngIf=\"todos.open?.length > 0 || todos.completed?.length > 0\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n\t\t\t\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" >\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t\t\t<th>Estimated date</th>\n\t\t\t\t\t\t\t\t\t<th>Payment date</th>\n\t\t\t\t\t\t\t\t\t<th>Status</th>p\n\t\t\t\t\t\t\t\t\t<th>{{'common.actions' | translate}}</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody *ngIf=\"todos.open?.length > 0 || todos.completed?.length > 0\">\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of todos.open; index as i\">\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{ i + 1 }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{item.price| number:'1.0-0'}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{item.description}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{item.due_date}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{item.payment_date}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"status-dropdown\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"overdue-td\">\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle id=\"button-basic\" type=\"button\" class=\"btn dropdown-toggle select-btn-lg\" aria-controls=\"dropdown-basic\">Pending&nbsp;<span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li ><a class=\"dropdown-item btn btn-sm open active\">Pending</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li ><a class=\"dropdown-item btn btn-sm completed\" (click)=\"changeStatus(item, 2)\">completed</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"item.is_overdue\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o overdue-icon\" aria-hidden=\"true\" tooltip=\"{{'common.overdue' | translate}}\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-2\" aria-controls=\"dropdown-basic-2\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-2\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openTodoEditModal(item)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_delete']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteTodo(item.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of todos.completed; index as i\" style=\"background:#c1ebd3;\">\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{ todos.open.length + (i + 1) }}</td>\n\t\t\t\t\t\t\t\t\t<td>{{item.price| number:'1.0-0'}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{item.description}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{item.due_date}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{item.payment_date}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"status-dropdown\">\n                                        <div class=\"budges-status\">\n                                            <span class=\"completed\">Completed</span>\n                                        </div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"actions-dropdown\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-2\" aria-controls=\"dropdown-basic-2\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-2\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openTodoEditModal(item)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t<tfoot *ngIf=\"todos.open?.length == 0 && todos.completed?.length == 0\" class=\"tfoot_dt\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td colspan=\"7\" class=\"no-data-available text-center\">{{'common.datatable.sEmptyTable' | translate}}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo/todo.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo/todo.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageloaded\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card pl-2 pr-2\">\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\n\t\t\t\t\t<h4 class=\"main-title mb-0 mt-2\"><span>{{'todos.title' | translate}}</span></h4>\n\t\t\t\t\t<button class=\"btn btn-create mb-0\" (click)=\"openTodoCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_create']\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"drag-container\">\n\t\t\t\t\t\t\t\t\t<div class=\"section-heading\">{{'common.status.open' | translate}}</div>\n\t\t\t\t\t\t\t\t\t<div cdkDropList #pendingList=\"cdkDropList\" [cdkDropListData]=\"todos.open\" [cdkDropListConnectedTo]=\"[doneList]\" class=\"item-list\" (cdkDropListDropped)=\"drop($event)\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"item-box\" *ngFor=\"let item of todos.open\" cdkDrag>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-textarea [name]=\"'description'\" [fieldValue]=\"item.description\" [elementFor]=\"'todos.inline_edit.description' | translate\" [isRequired]=\"'true'\" (updateValue)=\"saveTodosDetail(item, 'description', $event);\"></inline-edit-textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.due_date\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.due_date | dateTimeFormatFilter: loginUser.settings.date_format }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-4 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-date [name]=\"'due_date'\" [fieldValue]=\"item.due_date\" [elementFor]=\"'todos.inline_edit.due_date' | translate\" [isRequired]=\"'true'\" [datepickerConfigs]=\"datepickerConfigs\" [format]=\"loginUser.settings.date_format\" (updateValue)=\"saveTodosDetail(item, 'due_date', $event);\"></inline-edit-date>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 actions-dropdown text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openTodoEditModal(item)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_delete']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a  (click)=\"deleteTodo(item.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"drag-container\">\n\t\t\t\t\t\t\t\t\t<div class=\"section-heading\">{{'common.status.completed' | translate}}</div>\n\t\t\t\t\t\t\t\t\t<div cdkDropList #doneList=\"cdkDropList\" [cdkDropListData]=\"todos.completed\" [cdkDropListConnectedTo]=\"[pendingList]\" class=\"item-list\" (cdkDropListDropped)=\"drop($event)\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"item-box\" *ngFor=\"let item of todos.completed\" cdkDrag>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-textarea [name]=\"'description'\" [fieldValue]=\"item.description\" [elementFor]=\"'todos.inline_edit.description' | translate\" [isRequired]=\"'true'\" (updateValue)=\"saveTodosDetail(item, 'description', $event);\"></inline-edit-textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.due_date\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.due_date | dateTimeFormatFilter: loginUser.settings.date_format }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-5 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-date [name]=\"'due_date'\" [fieldValue]=\"item.due_date\" [elementFor]=\"'todos.inline_edit.due_date' | translate\" [isRequired]=\"'true'\" [datepickerConfigs]=\"datepickerConfigs\" [format]=\"loginUser.settings.date_format\" (updateValue)=\"saveTodosDetail(item, 'due_date', $event);\"></inline-edit-date>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 actions-dropdown text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-2\" aria-controls=\"dropdown-basic-2\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-2\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_edit']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openTodoEditModal(item)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_delete']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a  (click)=\"deleteTodo(item.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./src/app/core/services/custom-fields.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/custom-fields.service.ts ***!
  \********************************************************/
/*! exports provided: CustomFieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldsService", function() { return CustomFieldsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var CustomFieldsService = /** @class */ (function () {
    function CustomFieldsService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    CustomFieldsService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/customfields");
    };
    CustomFieldsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/customfields/" + id);
    };
    CustomFieldsService.prototype.create = function (customField) {
        return this.http.post(this.apiUrl + "/api/customfields", customField);
    };
    CustomFieldsService.prototype.update = function (customField) {
        return this.http.put(this.apiUrl + "/api/customfields/" + customField.id, customField);
    };
    CustomFieldsService.prototype.delete = function (id, tabData) {
        return this.http.delete(this.apiUrl + "/api/customfields/" + tabData + "/" + id);
    };
    CustomFieldsService.prototype.changeStatus = function (customField) {
        return this.http.post(this.apiUrl + "/api/customfields/" + customField.id + "/change-status", { status: customField.status });
    };
    CustomFieldsService.prototype.getFormTables = function () {
        return this.http.get(this.apiUrl + "/api/customfields/form");
    };
    CustomFieldsService.prototype.getCustomFieldByForm = function (formId) {
        return this.http.get(this.apiUrl + "/api/customfields/form/" + formId);
    };
    CustomFieldsService.prototype.getCustomFieldDetailByForm = function (formId, isView) {
        return this.http.get(this.apiUrl + "/api/customfields/form/" + formId + "/1");
    };
    CustomFieldsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CustomFieldsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomFieldsService);
    return CustomFieldsService;
}());



/***/ }),

/***/ "./src/app/core/services/team.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/team.service.ts ***!
  \***********************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TeamService = /** @class */ (function () {
    function TeamService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TeamService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/teams");
    };
    TeamService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/teams/" + id);
    };
    TeamService.prototype.create = function (team) {
        return this.http.post(this.apiUrl + "/api/teams", team);
    };
    TeamService.prototype.update = function (team) {
        return this.http.put(this.apiUrl + "/api/teams/" + team.id, team);
    };
    TeamService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/teams/" + id);
    };
    TeamService.prototype.getTeamForTeamBoard = function () {
        return this.http.get(this.apiUrl + "/api/teams/teamboard");
    };
    TeamService.prototype.import = function (importTeams) {
        return this.http.post(this.apiUrl + "/api/teams/import", importTeams);
    };
    TeamService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TeamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/core/services/todo.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/todo.service.ts ***!
  \***********************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TodoService.prototype.getAllTodos = function (params) {
        return this.http.post(this.apiUrl + "/api/todos/list", params);
    };
    TodoService.prototype.changeTodosStatus = function (todos) {
        return this.http.post(this.apiUrl + "/api/todos/update-list", todos);
    };
    TodoService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/todos");
    };
    TodoService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/todos/" + id);
    };
    TodoService.prototype.create = function (todo) {
        return this.http.post(this.apiUrl + "/api/todos", todo);
    };
    TodoService.prototype.update = function (todo) {
        return this.http.put(this.apiUrl + "/api/todos/" + todo.id, todo);
    };
    TodoService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/todos/" + id);
    };
    TodoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdG9kby9jb21wb25lbnRzL2NyZWF0ZS10b2RvLW1vZGFsL2NyZWF0ZS10b2RvLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CreateTodoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTodoModalComponent", function() { return CreateTodoModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/todo.service */ "./src/app/core/services/todo.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");











var CreateTodoModalComponent = /** @class */ (function () {
    function CreateTodoModalComponent(translate, datepipe, bsModalRef, formBuilder, toastr, todoService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.todoService = todoService;
        this.authenticationService = authenticationService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_8__["datepickerConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    CreateTodoModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.minDate = new Date();
        this.loadForms();
    };
    CreateTodoModalComponent.prototype.loadForms = function () {
        this.createTodoForm = this.formBuilder.group({
            description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]],
            due_date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            module_id: [this.todoParams.module_id],
            module_related_id: [this.todoParams.module_related_id]
        });
    };
    Object.defineProperty(CreateTodoModalComponent.prototype, "todoControl", {
        get: function () { return this.createTodoForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateTodoModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createTodoForm.invalid) {
            return;
        }
        if (typeof this.createTodoForm.value.price === 'string') {
            this.createTodoForm.value.price = this.createTodoForm.value.price.replace(/,/g, '');
        }
        this.createTodoForm.value.due_date = this.datepipe.transform(this.createTodoForm.value.due_date, 'yyyy-MM-dd');
        this.todoService.create(this.createTodoForm.value)
            .subscribe(function (data) {
            // this.toastr.success(this.translate.instant('todos.messages.create'), this.translate.instant('todos.title'));
            _this.toastr.success("Create payment successfully!", "Payment process");
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateTodoModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateTodoModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateTodoModalComponent.prototype, "todoParams", void 0);
    CreateTodoModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-todo-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-todo-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-todo-modal.component.scss */ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]])
    ], CreateTodoModalComponent);
    return CreateTodoModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdG9kby9jb21wb25lbnRzL2VkaXQtdG9kby1tb2RhbC9lZGl0LXRvZG8tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditTodoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoModalComponent", function() { return EditTodoModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/todo.service */ "./src/app/core/services/todo.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");












var EditTodoModalComponent = /** @class */ (function () {
    function EditTodoModalComponent(translate, bsModalRef, formBuilder, datepipe, toastr, userService, todoService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.toastr = toastr;
        this.userService = userService;
        this.todoService = todoService;
        this.authenticationService = authenticationService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.users = [];
        this.assignMembers = [];
        this.status = [{ 'id': 1, "label": "Pending" }, { 'id': 2, "label": "Completed" }];
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_8__["datepickerConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    EditTodoModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.loadForms();
    };
    EditTodoModalComponent.prototype.loadForms = function () {
        // if(this.todo.due_date){
        // 	this.todo.due_date = new Date(this.todo.due_date);
        // }
        this.editTodoForm = this.formBuilder.group({
            id: [this.todo.id],
            price: [this.todo.price, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.todo.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            status: [this.todo.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            due_date: [this.todo.due_date, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            payment_date: [this.todo.payment_date, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            module_id: [this.todo.module_id],
            module_related_id: [this.todo.module_related_id]
        });
    };
    Object.defineProperty(EditTodoModalComponent.prototype, "todoControl", {
        get: function () { return this.editTodoForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditTodoModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editTodoForm.value.status == 1) {
            this.editTodoForm.value.payment_date = null;
            this.editTodoForm.get('payment_date').clearValidators();
            this.editTodoForm.get('payment_date').updateValueAndValidity();
        }
        if (this.editTodoForm.invalid) {
            return;
        }
        if (typeof this.editTodoForm.value.price === 'string') {
            this.editTodoForm.value.price = this.editTodoForm.value.price.replace(/,/g, '');
        }
        this.editTodoForm.value.due_date = this.datepipe.transform(this.editTodoForm.value.due_date, 'yyyy-MM-dd');
        this.editTodoForm.value.payment_date = this.datepipe.transform(this.editTodoForm.value.payment_date, 'yyyy-MM-dd');
        this.todoService.update(this.editTodoForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditTodoModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditTodoModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__["TodoService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    EditTodoModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-todo-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-todo-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-todo-modal.component.scss */ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__["TodoService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], EditTodoModalComponent);
    return EditTodoModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".checkbox-container-custom {\n  padding-left: 0 !important;\n}\n\n.section-heading {\n  padding: 5px 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.drag-container {\n  max-width: 100%;\n  vertical-align: top;\n  padding: 10px 0;\n  border-radius: 5px;\n}\n\n.item-list {\n  min-height: 30px;\n  border-radius: 4px;\n  display: block;\n}\n\n.item-box {\n  padding: 8px 10px;\n  border: solid 1px #ccc;\n  margin-bottom: 5px;\n  color: rgba(0, 0, 0, 0.87);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  border-radius: 8px;\n}\n\n.item-box:hover {\n  box-shadow: 0 6px 0px 0 rgba(0, 0, 0, 0.01), 0 15px 32px 0 rgba(0, 0, 0, 0.06);\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 20px;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.item-list.cdk-drop-list-dragging .item-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi90b2RvL3BhZ2VzL3RvZG8tZGV0YWlsL0M6XFx4YW1wcFxcaHRkb2NzXFxndi1kZXZlbG9wZXJcXGFuZ3VsYXIvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluXFx0b2RvXFxwYWdlc1xcdG9kby1kZXRhaWxcXHRvZG8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL3RvZG8vcGFnZXMvdG9kby1kZXRhaWwvdG9kby1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywwQkFBQTtBQ0NEOztBRENBO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFRDs7QURBQTtFQUVDLGVBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NEOztBRENBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFRDs7QURBQTtFQUNDLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxzQkFBQTtNQUFBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHRDs7QURGQztFQUNDLDhFQUFBO0FDSUY7O0FEREE7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7RUFHQSxtQkFBQTtBQ0VEOztBREFBO0VBQ0MsVUFBQTtBQ0dEOztBRERBO0VBQ0Msc0RBQUE7QUNJRDs7QURGQTtFQUNDLHNEQUFBO0FDS0QiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL3RvZG8vcGFnZXMvdG9kby1kZXRhaWwvdG9kby1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tib3gtY29udGFpbmVyLWN1c3RvbSB7XG5cdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuLnNlY3Rpb24taGVhZGluZyB7XG5cdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRyYWctY29udGFpbmVyIHtcblx0Ly8gd2lkdGg6IDY2MHB4O1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0cGFkZGluZzogMTBweCAwO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaXRlbS1saXN0IHtcblx0bWluLWhlaWdodDogMzBweDtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbi5pdGVtLWJveCB7XG5cdHBhZGRpbmc6IDhweCAxMHB4O1xuXHRib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGN1cnNvcjogbW92ZTtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHQmOmhvdmVyIHtcblx0XHRib3gtc2hhZG93OiAwIDZweCAwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDEpLCAwIDE1cHggMzJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNik7XG5cdH1cbn1cbi5jZGstZHJhZy1wcmV2aWV3IHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG5cdDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG5cdDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuXHRvcGFjaXR5OiAwO1xufVxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbi5pdGVtLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuaXRlbS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4iLCIuY2hlY2tib3gtY29udGFpbmVyLWN1c3RvbSB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4uc2VjdGlvbi1oZWFkaW5nIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kcmFnLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pdGVtLWxpc3Qge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaXRlbS1ib3gge1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5pdGVtLWJveDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4wMSksIDAgMTVweCAzMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLml0ZW0tbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5pdGVtLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TodoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailComponent", function() { return TodoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/todo.service */ "./src/app/core/services/todo.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/create-todo-modal/create-todo-modal.component */ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts");
/* harmony import */ var _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/edit-todo-modal/edit-todo-modal.component */ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts");














var TodoDetailComponent = /** @class */ (function () {
    function TodoDetailComponent(translate, ngxRolesService, modalService, http, datePipe, toastr, todoService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.datePipe = datePipe;
        this.toastr = toastr;
        this.todoService = todoService;
        this.authenticationService = authenticationService;
        this.isPageloaded = false;
        this.total = 0;
        this.totalcompleted = 0;
        this.datepickerConfigs = { dateInputFormat: 'YYYY-MM-DD' };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TodoDetailComponent.prototype.ngOnInit = function () {
        this.todoParams = {
            'length': 10,
            'module_id': this.module_id,
            'module_related_id': this.module_related_id
        };
        this.getTodos();
    };
    TodoDetailComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.changeTodosStatus();
    };
    TodoDetailComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getAllTodos(this.todoParams)
            .subscribe(function (data) {
            _this.totalcompleted = 0;
            _this.total = 0;
            data['open'].forEach(function (element) {
                _this.total += element.price;
                if (element.due_date < _this.datePipe.transform(new Date(), 'yyyy-MM-dd')) {
                    element.is_overdue = true;
                }
            });
            data['completed'].forEach(function (element2) {
                _this.total += element2.price;
                _this.totalcompleted += element2.price;
            });
            _this.todos = data;
            _this.isPageloaded = true;
        }, function (error) { });
    };
    TodoDetailComponent.prototype.changeTodosStatus = function () {
        var _this = this;
        this.todoService.changeTodosStatus(this.todos)
            .subscribe(function (data) {
            _this.toastr.success("Update payment status successfully!", "Payment process");
        }, function (error) { });
    };
    TodoDetailComponent.prototype.changeStatus = function (todo, status) {
        todo.status = status;
        this.openTodoEditModal(todo);
        // this.todoService.update(todo)
        // .subscribe(
        //     data => {
        //         this.toastr.success("Update payment status successfully!", "Payment process");
        //         this.getTodos();
        // });
    };
    TodoDetailComponent.prototype.openTodoCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                todoParams: this.todoParams
            }
        };
        this.modalRef = this.modalService.show(_components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_12__["CreateTodoModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoDetailComponent.prototype.openTodoEditModal = function (todo) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                todo: todo
            }
        };
        this.modalRef = this.modalService.show(_components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_13__["EditTodoModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoDetailComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.todoService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('todos.messages.delete'), _this.translate.instant('todos.title'));
                    _this.getTodos();
                });
            }
        });
    };
    TodoDetailComponent.prototype.saveTodosDetail = function (todo, index, value) {
        var _this = this;
        todo[index] = value;
        this.todoService.update(todo)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.getTodos();
        });
    };
    TodoDetailComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__["TodoService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TodoDetailComponent.prototype, "module_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TodoDetailComponent.prototype, "module_related_id", void 0);
    TodoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-detail.component.scss */ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__["TodoService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], TodoDetailComponent);
    return TodoDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/pages/todo/todo.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/todo/pages/todo/todo.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-heading {\n  padding: 5px 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.drag-container {\n  width: 600px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n  background-color: #E9ECEF;\n  padding: 15px;\n  border-radius: 5px;\n}\n\n.item-list {\n  min-height: 60px;\n  border-radius: 4px;\n  display: block;\n}\n\n.item-box {\n  padding: 8px 10px;\n  border: solid 1px #ccc;\n  margin-bottom: 5px;\n  color: rgba(0, 0, 0, 0.87);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  border-radius: 20px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 20px;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.item-list.cdk-drop-list-dragging .item-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi90b2RvL3BhZ2VzL3RvZG8vQzpcXHhhbXBwXFxodGRvY3NcXGd2LWRldmVsb3BlclxcYW5ndWxhci9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW5cXHRvZG9cXHBhZ2VzXFx0b2RvXFx0b2RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL3RvZG8vcGFnZXMvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURDQTtFQUNDLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFRDs7QURBQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDR0Q7O0FEREE7RUFDQyxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO01BQUEsbUJBQUE7RUFDQSxzQkFBQTtNQUFBLG1CQUFBO0VBQ0Esc0JBQUE7TUFBQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSUQ7O0FERkE7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7RUFHQSxtQkFBQTtBQ0dEOztBRERBO0VBQ0MsVUFBQTtBQ0lEOztBREZBO0VBQ0Msc0RBQUE7QUNLRDs7QURIQTtFQUNDLHNEQUFBO0FDTUQiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL3RvZG8vcGFnZXMvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taGVhZGluZyB7XG5cdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRyYWctY29udGFpbmVyIHtcblx0d2lkdGg6IDYwMHB4O1xuXHRtYXgtd2lkdGg6IDEwMCU7XG5cdG1hcmdpbjogMCAyNXB4IDI1cHggMDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFQ0VGO1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaXRlbS1saXN0IHtcblx0bWluLWhlaWdodDogNjBweDtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbi5pdGVtLWJveCB7XG5cdHBhZGRpbmc6IDhweCAxMHB4O1xuXHRib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGN1cnNvcjogbW92ZTtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jZGstZHJhZy1wcmV2aWV3IHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG5cdDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG5cdDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuXHRvcGFjaXR5OiAwO1xufVxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbi5pdGVtLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuaXRlbS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4iLCIuc2VjdGlvbi1oZWFkaW5nIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kcmFnLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUNFRjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaXRlbS1saXN0IHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLml0ZW0tYm94IHtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uaXRlbS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLml0ZW0tYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/admin/todo/pages/todo/todo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/todo/pages/todo/todo.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/todo.service */ "./src/app/core/services/todo.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/create-todo-modal/create-todo-modal.component */ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts");
/* harmony import */ var _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/edit-todo-modal/edit-todo-modal.component */ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts");














var TodoComponent = /** @class */ (function () {
    function TodoComponent(translate, ngxRolesService, modalService, http, toastr, todoService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.toastr = toastr;
        this.todoService = todoService;
        this.authenticationService = authenticationService;
        this.datepickerConfigs = { dateInputFormat: 'YYYY-MM-DD' };
        this.isPageloaded = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.todoParams = {
            'length': 10,
            'module_id': 6,
            'module_related_id': 0
        };
        this.getTodos();
    };
    TodoComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.changeTodosStatus();
    };
    TodoComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getAllTodos({ 'length': 10 })
            .subscribe(function (data) {
            _this.todos = data;
            _this.isPageloaded = true;
        }, function (error) { });
    };
    TodoComponent.prototype.changeTodosStatus = function () {
        var _this = this;
        this.todoService.changeTodosStatus(this.todos)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.status'), _this.translate.instant('todos.title'));
            _this.getTodos();
        }, function (error) { });
    };
    TodoComponent.prototype.openTodoCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                todoParams: this.todoParams
            }
        };
        this.modalRef = this.modalService.show(_components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_12__["CreateTodoModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoComponent.prototype.openTodoEditModal = function (todo) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                todo: todo
            }
        };
        this.modalRef = this.modalService.show(_components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_13__["EditTodoModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.todoService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('todos.messages.delete'), _this.translate.instant('todos.title'));
                    _this.getTodos();
                });
            }
        });
    };
    TodoComponent.prototype.saveTodosDetail = function (todo, index, value) {
        var _this = this;
        todo[index] = value;
        this.todoService.update(todo)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.getTodos();
        });
    };
    TodoComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__["TodoService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo/todo.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo.component.scss */ "./src/app/modules/admin/todo/pages/todo/todo.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__["TodoService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/todo-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/admin/todo/todo-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TodoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRoutingModule", function() { return TodoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/todo/todo.component */ "./src/app/modules/admin/todo/pages/todo/todo.component.ts");
/* harmony import */ var _pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/todo-detail/todo-detail.component */ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.ts");






var routes = [
    {
        path: '',
        component: _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"]
    },
    {
        path: 'detail',
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
        component: _pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_5__["TodoDetailComponent"],
        data: {
            breadcrumbs: {
                text: "common.detail",
                icon: "fa fa-product-hunt",
                show: true,
                isHome: true
            }
        }
    },
];
var TodoRoutingModule = /** @class */ (function () {
    function TodoRoutingModule() {
    }
    TodoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TodoRoutingModule);
    return TodoRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/todo.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/admin/todo/todo.module.ts ***!
  \***************************************************/
/*! exports provided: TodoModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _todo_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todo-routing.module */ "./src/app/modules/admin/todo/todo-routing.module.ts");
/* harmony import */ var _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/todo/todo.component */ "./src/app/modules/admin/todo/pages/todo/todo.component.ts");
/* harmony import */ var _components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/create-todo-modal/create-todo-modal.component */ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts");
/* harmony import */ var _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/edit-todo-modal/edit-todo-modal.component */ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts");
/* harmony import */ var _pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/todo-detail/todo-detail.component */ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.ts");



















var TodoModule = /** @class */ (function () {
    function TodoModule() {
    }
    TodoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_15__["TodoComponent"],
                _components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_16__["CreateTodoModalComponent"],
                _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_17__["EditTodoModalComponent"],
                _pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_18__["TodoDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _todo_routing_module__WEBPACK_IMPORTED_MODULE_14__["TodoRoutingModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            exports: [_pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_18__["TodoDetailComponent"]],
            entryComponents: [_components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_16__["CreateTodoModalComponent"], _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_17__["EditTodoModalComponent"]]
        })
    ], TodoModule);
    return TodoModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=default~modules-pm-defects-defects-module~modules-pm-projects-projects-module~modules-pm-tasks-tasks-module.js.map