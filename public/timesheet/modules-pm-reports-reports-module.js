(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pm-reports-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <div class=\"card-header pl-0 pr-0 border-bottom\">\n        <h4 class=\"main-title mt-2\"><span>{{'timesheet.title' | translate}}</span></h4>\n        <div class=\"card-buttons d-flex\" *ngIf=\"isPageLoaded\">\n            <div class=\"btn calender-day\" (click)=\"preMonth()\">\n                <i class=\"calendar-icon fa fa-chevron-left\"></i>\n            </div>\n            <div class=\"ml-2\">\n                <a class=\"btn btn-create mb-0\" id=\"calendar-filter\" (bsValueChange)=\"changeMonth($event)\" #dp1=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" ><i class=\"fa fa-calendar-plus-o\"></i></a>\n            </div>\n            <div class=\"mr-2\">\n               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"month\" readonly />\n            </div>\n            <div class=\"btn calender-day\" (click)=\"nextMonth()\"  *ngIf=\"month <= currentMonth\">\n                <i class=\"calendar-icon fa fa-chevron-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"defects_table\">\n\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th colspan=\"2\">Full Name</th>\n                            <th>Total</th>\n                            <th *ngFor=\"let day of daysInMonth; let i = index\">\n                                <div *ngIf=\"day.stt==0\">CN<br>{{day.day}}</div>\n                                <div *ngIf=\"day.stt>0\">T{{day.stt + 1}}<br>{{day.day}}</div>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"exportTableData?.length != 0\">\n                        <ng-container *ngFor=\"let user of exportTableData; let i = index\">\n                            <tr>\n                                <td rowspan=\"2\" colspan=\"2\">{{user.firstname}} {{user.lastname}}</td>\n                                <td>{{user.timesheet_total}}</td>\n                                <td *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <div *ngIf=\"user.timesheet[j] && user.timesheet[j].check\">{{user.timesheet[j].value | number:'1.0-1'}}</div>\n                                </td>\n                            </tr>\n                            <tr style=\"background-color: rgba(160, 136, 0, 0.11);text-align: center;\">\n                                <td>{{user.timesheet_ot_total}}</td>\n                                <td *ngFor=\"let day of daysInMonth; let j = index\">\n                                    <div *ngIf=\"user.timesheet_ot[j] && user.timesheet_ot[j].value && user.timesheet_ot[j].value > 0\">{{user.timesheet_ot[j].value | number:'1.0-1'}}</div>\n                                </td>\n                            </tr>\n                        </ng-container>\n                        <!-- <tr *ngFor=\"let user of exportTableData; let i = index\" >\n                            <td rowspan=\"2\">{{user.firstname}} {{user.lastname}}</td>\n                            <td *ngFor=\"let day of daysInMonth; let j = index\">\n                                <div *ngIf=\"user.timesheet[j] && user.timesheet[j].check\">{{user.timesheet[j].value | number:'1.0-1'}}</div>\n                            </td>\n                        </tr> -->\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <h4 class=\"main-title mt-2\"><span>{{'reports.headings.incident_report' | translate}}</span></h4>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"incidents_table\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>{{'incidents.columns.id' | translate}}</th>\n                            <th>{{'incidents.columns.incident_name' | translate}}</th>\n                            <th>{{'incidents.columns.start_date' | translate}}</th>\n                            <th>{{'incidents.columns.end_date' | translate}}</th>\n                            <th>{{'incidents.columns.actual_hours' | translate}}</th>\n                            <th>{{'incidents.columns.creator' | translate}}</th>\n                            <th>{{'incidents.columns.assigned' | translate}}</th>\n                            <th>{{'incidents.columns.type' | translate}}</th>\n                            <th>{{'incidents.columns.priority' | translate}}</th>\n                            <th>{{'incidents.columns.status' | translate}}</th>\n                            <th>{{'incidents.columns.project' | translate}}</th>\n                            <th>{{'incidents.columns.project_version' | translate}}</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"incidents?.length != 0\">\n                        <tr *ngFor=\"let incident of incidents\">\n                            <td>{{incident.generated_id}}</td>\n                            <td>{{incident.incident_name}}</td>\n                            <td>{{incident.start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n                            <td>{{incident.end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n                            <td>\n                                <ng-container *ngIf=\"incident.actual_hours else elseBlock2;\">{{incident.actual_hours}}</ng-container>\n                                <ng-template #elseBlock2>-</ng-template>\n                            </td>\n                            <td class=\"people-lists\">\n                                <a [routerLink]=\"['/users/profile', incident.create_user_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{incident.created_firstname}} {{incident.created_lastname}}\">\n                                    <img *ngIf=\"incident.created_avatar\" src=\"{{apiUrl}}/uploads/profile/{{incident.created_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    <img *ngIf=\"!incident.created_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                </a>\n                            </td>\n                            <td class=\"people-lists\">\n                                <ng-container *ngIf=\"incident.assign_to == 'Unassign' || incident.assign_to == '' || incident.assign_to == null; else elseBlock\">\n                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-container>\n                                <ng-template #elseBlock>\n                                    <a [routerLink]=\"['/users/profile', incident.assign_to]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{incident.assigned_firstname}} {{incident.assigned_lastname}}\">\n                                        <img *ngIf=\"incident.assigned_avatar\" src=\"{{apiUrl}}/uploads/profile/{{incident.assigned_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                        <img *ngIf=\"!incident.assigned_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-template>\n                            </td>\n                            <td class=\"budges-status\">\n                                <ng-container *ngFor=\"let type of ('incidents.incident_types' | translate)\">\n                                    <span class=\"badge badge-secondary\" *ngIf=\"type.id == incident.incident_type\">{{type.label}}</span>\n                                </ng-container>\n                            </td>\n                            <td class=\"budges-status\">\n                                <ng-container *ngFor=\"let priority of ('incidents.priorities' | translate)\">\n                                    <span class=\"badge {{priority.class}}\" *ngIf=\"priority.id == incident.priority\">{{priority.label}}</span>\n                                </ng-container>\n                            </td>\n                            <td class=\"budges-status\">\n                                <ng-container *ngFor=\"let status of ('incidents.status' | translate)\">\n                                    <span class=\"badge {{status.class}}\" *ngIf=\"status.id == incident.status\">{{status.label}}</span>\n                                </ng-container>\n                            </td>\n                            <td>{{incident.project_name}}</td>\n                            <td><span class=\"badge badge-secondary\">{{incident.project_version}}</span></td>\n                        </tr>\n                    </tbody>\n                    <tfoot>\n                        <tr>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.id' | translate}}\" name=\"incident_Id\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.incident_name' | translate}}\" name=\"incident_name\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.start_date' | translate}}\" name=\"start_date\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.end_date' | translate}}\" name=\"end_date\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.actual_hours' | translate}}\" name=\"actual_hours\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.creator' | translate}}\" name=\"created\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.assigned' | translate}}\" name=\"assigned\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.type' | translate}}\" name=\"incident_type\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.priority' | translate}}\" name=\"priority\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.status' | translate}}\" name=\"status\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.project' | translate}}\" name=\"project\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'incidents.columns.project_version' | translate}}\" name=\"project_version\" />\n                            </th>\n                        </tr>\n                    </tfoot>\n                    <tfoot *ngIf=\"incidents?.length == 0\" class=\"tfoot_dt\">\n                        <tr>\n                            <td colspan=\"12\" class=\"text-center\">\n                                <img src=\"assets/img/norecord-img.png\" width=\"50\">\n                                <p class=\"mt-1\">{{'common.empty_message.incidents' | translate}}</p>\n                            </td>\n                        </tr>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/project-reports/project-reports.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/project-reports/project-reports.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <h4 class=\"main-title mt-2\"><span>{{'reports.headings.project_report' | translate}}</span></h4>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" id=\"projects_table\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>{{'projects.columns.id' | translate}}</th>\n                            <th>{{'projects.columns.project_name' | translate}}</th>\n                            <th>{{'projects.columns.start' | translate}}</th>\n                            <th>{{'projects.columns.end' | translate}}</th>\n                            <th>{{'projects.columns.output_cost' | translate}}/{{'projects.columns.input_cost' | translate}}</th>\n                            <th>Work allowance</th>\n                            <th>Payment</th>\n                            <!-- <th>{{'projects.columns.progress' | translate}}</th> -->\n                            <th>{{'projects.columns.creator' | translate}}</th>\n                            <th>{{'projects.columns.assigned_To' | translate}}</th>\n                            <th>{{'projects.columns.status' | translate}}</th>\n                            <!-- <th>{{'projects.columns.billing' | translate}}</th>\n                            <th>{{'projects.columns.budget' | translate}}</th>\n                            <th>{{'projects.columns.client' | translate}}</th> -->\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"projects?.length != 0\">\n                        <tr *ngFor=\"let project of projects\">\n                            <td>{{project.generated_id}}</td>\n                            <td>{{project.project_name}}</td>\n                            <td>{{project.start_date | date: 'yyyy-MM-dd' }}</td>\n                            <td>{{project.end_date | date: 'yyyy-MM-dd' }}</td>\n                            <!-- <td>\n                                <ng-container *ngIf=\"project.actual_hours else elseBlock4;\">{{project.actual_hours}}</ng-container>\n                                <ng-template #elseBlock4>-</ng-template>\n                            </td> -->\n                            <td class=\"budges-status\">\n                                <div class=\"budges-status\">\n                                    <span class=\"medium\" *ngIf=\"project.price_rate >= project.cost\">{{project.cost | number:'1.0-0'}}/{{project.price_rate | number:'1.0-0'}}</span>\n                                    <span class=\"urgent\" *ngIf=\"project.price_rate < project.cost\">{{project.cost | number:'1.0-0'}}/{{project.price_rate | number:'1.0-0'}}</span>\n                                </div>\n                            </td>\n                            <td>\n                                {{project.workallowance | number:'1.0-0'}}\n                            </td>\n                            <td class=\"budges-status\">\n                                <div class=\"budges-status\">\n                                    <span class=\"medium\" *ngIf=\"project.payment >= project.paymentTotal\">{{project.payment | number:'1.0-0'}}/{{project.paymentTotal | number:'1.0-0'}}</span>\n                                    <span class=\"urgent\" *ngIf=\"project.payment < project.paymentTotal\">{{project.payment | number:'1.0-0'}}/{{project.paymentTotal | number:'1.0-0'}}</span>\n                                </div>\n                            </td>\n                            <!-- <td>{{project.progress}}%</td> -->\n                            <td class=\"people-lists\">\n                                <a [routerLink]=\"['/users/profile', project.created_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{project.created_firstname}} {{project.created_lastname}}\">\n                                    <img *ngIf=\"project.created_avatar\" src=\"{{apiUrl}}/uploads/profile/{{project.created_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    <img *ngIf=\"!project.created_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                </a>\n                            </td>\n                            <td class=\"people-lists\">\n                                <ng-container *ngIf=\"project.assign_members == 'Unassign' || project.assign_members == '' || project.assign_members == null; else elseBlock1;\">\n                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle popover-item text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-container>\n                                <ng-template #elseBlock1>\n                                    <ng-container *ngFor=\"let user_id of project.assign_members | stringToArrayFilter index as i; odd as isOdd; even as isEven\">\n                                        <a *ngIf=\"userLists[user_id]\" [routerLink]=\"['/users/profile', user_id]\" tooltip=\"{{userLists[user_id].firstname}} {{userLists[user_id].lastname}}\" class=\"btn rounded-circle popover-item text-dark\" [ngClass]=\"{'btn-profile-info': isOdd, 'btn-profile-danger': isEven}\">\n                                            <img *ngIf=\"userLists[user_id].avatar\" src=\"{{apiUrl}}/uploads/profile/{{userLists[user_id].avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                            <img *ngIf=\"!userLists[user_id].avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                        </a>\n                                    </ng-container>\n                                </ng-template>\n                            </td>\n                            <td class=\"budges-status\">\n                                <ng-container *ngFor=\"let status of ('projects.status' | translate)\">\n                                    <span class=\"badge {{status.class}}\" *ngIf=\"status.id == project.status\">{{status.label}}</span>\n                                </ng-container>\n                            </td>\n                            <!-- <td>\n                                <ng-container *ngIf=\"project.billing_type; else elseBlock2;\">\n                                    <ng-container *ngFor=\"let type of ('projects.billing_types' | translate)\">\n                                        <span class=\"badge badge-secondary\" *ngIf=\"type.id == project.billing_type\">{{type.label}}</span>\n                                    </ng-container>\n                                </ng-container>\n                                <ng-template #elseBlock2>-</ng-template>\n                            </td>\n                            <td>\n                                <ng-container *ngIf=\"project.price_rate else elseBlock3;\">{{project.price_rate}}</ng-container>\n                                <ng-template #elseBlock3>-</ng-template>\n                            </td>\n                            <td class=\"people-lists\">\n                                <ng-container *ngIf=\"project.client_id; else elseBlock5;\">\n                                    <a [routerLink]=\"['/users/profile', project.client_id]\" class=\"btn btn-profile-info rounded-circle text-dark\" tooltip=\"{{project.client_firstname}} {{project.client_lastname}}\">\n                                        <img *ngIf=\"project.client_avatar\" src=\"{{apiUrl}}/uploads/profile/{{project.client_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                        <img *ngIf=\"!project.client_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-container>\n                                <ng-template #elseBlock5>-</ng-template>\n                            </td> -->\n                        </tr>\n                    </tbody>\n                    <tfoot>\n                        <tr>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.id' | translate}}\" name=\"generated_id\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.project_name' | translate}}\" name=\"project_name\" />\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.start' | translate}}\" name=\"start_date\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.end' | translate}}\" name=\"end_date\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.hours' | translate}}\" name=\"hours\" /> -->\n                            </th>\n                            <!-- <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.progress' | translate}}\" name=\"progress\" />\n                            </th> -->\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.creator' | translate}}\" name=\"created\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.assigned_To' | translate}}\" name=\"assigned\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.status' | translate}}\" name=\"status\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.status' | translate}}\" name=\"status\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.status' | translate}}\" name=\"status\" /> -->\n                            </th>\n                            <!-- <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.billing' | translate}}\" name=\"billing\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.budget' | translate}}\" name=\"budget\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'projects.columns.client' | translate}}\" name=\"client\" />\n                            </th> -->\n                        </tr>\n                    </tfoot>\n                    <tfoot *ngIf=\"projects?.length == 0\" class=\"tfoot_dt\">\n                        <tr>\n                            <td colspan=\"10\" class=\"text-center\">\n                                <img src=\"assets/img/norecord-img.png\" width=\"50\">\n                                <p class=\"mt-1\">{{ 'common.empty_message.projects' | translate }}</p>\n                            </td>\n                        </tr>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/task-reports/task-reports.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/task-reports/task-reports.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Card header -->\n<div class=\"pl-0 pr-0 border-bottom\">\n    <h4 class=\"main-title mt-2\"><span>{{'reports.headings.task_report' | translate}}</span></h4>\n</div>\n<!-- Card body -->\n<div class=\"card-body pt-3 overflow-x-scroll overflow-y-hidden\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 mb-3\">\n            <div class=\"table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover b4-datatable\" width=\"100%\" id=\"tasks_table\">\n                    <thead>\n                        <tr class=\"display_all\">\n                            <th>{{'tasks.columns.id' | translate}}</th>\n                            <th>{{'tasks.columns.task_name' | translate}}</th>\n                            <th>{{'tasks.columns.project' | translate}}</th>\n                            <!-- <th>{{'tasks.columns.planned_start' | translate}}</th>\n                            <th>{{'tasks.columns.planned_end' | translate}}</th> -->\n                            <th>{{'tasks.columns.start_date' | translate}}</th>\n                            <th>{{'tasks.columns.end_date' | translate}}</th>\n                            <th>{{'tasks.columns.hours' | translate}}/{{'tasks.create.fields.estimate_hours' | translate}}</th>\n                            <th>{{'projects.columns.output_cost' | translate}}/{{'projects.columns.input_cost' | translate}}</th>\n                            <!-- <th>{{'tasks.columns.progress' | translate}}</th> -->\n                            <th>{{'tasks.columns.creator' | translate}}</th>\n                            <th>{{'tasks.columns.assigned' | translate}}</th>\n                            <th>{{'tasks.columns.priority' | translate}}</th>\n                            <th>{{'tasks.columns.status' | translate}}</th>\n                            <!-- <th>{{'tasks.columns.project_version' | translate}}</th> -->\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"tasks?.length != 0\">\n                        <tr *ngFor=\"let task of tasks\">\n                            <td>{{task.generated_id}}</td>\n                            <td>{{task.name}}</td>\n                            <td>{{task.project_name}}</td>\n                            <!-- <td>{{task.planned_start_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td>\n                            <td>{{task.planned_end_date | dateTimeFormatFilter: loginUser.settings.date_format }}</td> -->\n                            <td>{{task.task_start_date | date: 'yyyy-MM-dd' }}</td>\n                            <td>{{task.task_end_date | date: 'yyyy-MM-dd' }}</td>\n                            <td class=\"budges-status\">\n                                <div class=\"budges-status\">\n                                    <span class=\"medium\" *ngIf=\"convertTimeToDecimal(task.actual_hours) < task.estimated_hours\">{{convertTimeToDecimal(task.actual_hours)}}/{{task.estimated_hours}}</span>\n                                    <span class=\"urgent\" *ngIf=\"convertTimeToDecimal(task.actual_hours) >= task.estimated_hours\">{{convertTimeToDecimal(task.actual_hours)}}/{{task.estimated_hours}}</span>\n                                </div>\n                            </td>\n                            <td class=\"budges-status\">\n                                <div class=\"budges-status\">\n                                    <span class=\"medium\" *ngIf=\"task.price_rate >= task.cost\">{{task.cost | number:'1.0-0'}}/{{task.price_rate | number:'1.0-0'}}</span>\n                                    <span class=\"urgent\" *ngIf=\"task.price_rate < task.cost\">{{task.cost | number:'1.0-0'}}/{{task.price_rate | number:'1.0-0'}}</span>\n                                </div>\n                            </td>\n                            <!-- <td>{{task.progress}}%</td> -->\n                            <td class=\"people-lists\">\n                                <a [routerLink]=\"['/users/profile', task.created_by]\" class=\"btn btn-profile-danger rounded-circle text-dark\" tooltip=\"{{task.created_firstname}} {{task.created_lastname}}\">\n                                    <img *ngIf=\"task.created_avatar\" src=\"{{apiUrl}}/uploads/profile/{{task.created_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    <img *ngIf=\"!task.created_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                </a>\n                            </td>\n                            <td class=\"people-lists\">\n                                <ng-container *ngIf=\"task.assign_to == null; else elseBlock2\">\n                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\n                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-container>\n                                <ng-template #elseBlock2>\n                                    <a [routerLink]=\"['/users/profile', task.assign_to]\" class=\"btn btn-profile-danger rounded-circle text-dark\" tooltip=\"{{task.assign_firstname}} {{task.assign_lastname}}\">\n                                        <img *ngIf=\"task.assign_avatar\" src=\"{{apiUrl}}/uploads/profile/{{task.assign_avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                        <img *ngIf=\"!task.assign_avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\n                                    </a>\n                                </ng-template>\n                            </td>\n                            <td class=\"budges-status\">\n                                <ng-container *ngFor=\"let priority of ('tasks.priorities' | translate)\">\n                                    <span class=\"badge {{priority.class}}\" *ngIf=\"priority.id == task.priority\">{{priority.label}}</span>\n                                </ng-container>\n                            </td>\n                            <td class=\"budges-status\">\n                                <ng-container *ngFor=\"let status of ('tasks.status' | translate)\">\n                                    <span class=\"badge {{status.class}}\" *ngIf=\"status.id == task.status\">{{status.label}}</span>\n                                </ng-container>\n                            </td>\n                            <!-- <td><span class=\"badge badge-secondary\">{{task.project_version}}</span></td> -->\n                        </tr>\n                    </tbody>\n                    <tfoot>\n                        <tr>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.id' | translate}}\" name=\"task_id\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.task_name' | translate}}\" name=\"name\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.project' | translate}}\" name=\"project\" />\n                            </th>\n                            <!-- <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.planned_start' | translate}}\" name=\"planned_start\" />\n                            </th>\n                            <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.planned_end' | translate}}\" name=\"planned_end\" />\n                            </th> -->\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.actual_start' | translate}}\" name=\"actual_start_date\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.actual_end' | translate}}\" name=\"actual_end_date\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.hours' | translate}}\" name=\"actual_hours\" /> -->\n                            </th>\n                            <th>\n\n                            </th>\n                            <!-- <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.progress' | translate}}\" name=\"progress\" />\n                            </th> -->\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.creator' | translate}}\" name=\"task_created\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.assigned' | translate}}\" name=\"assigned\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.priority' | translate}}\" name=\"priority\" /> -->\n                            </th>\n                            <th>\n                                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.status' | translate}}\" name=\"status\" /> -->\n                            </th>\n                            <!-- <th>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"{{'tasks.columns.project_version' | translate}}\" name=\"project_version\" />\n                            </th> -->\n                        </tr>\n                    </tfoot>\n                    <tfoot *ngIf=\"tasks?.length == 0\" class=\"tfoot_dt\">\n                        <tr>\n                            <td colspan=\"11\" class=\"text-center\">\n                                <img src=\"assets/img/norecord-img.png\" width=\"50\">\n                                <p class=\"mt-1\">{{ 'common.empty_message.tasks' | translate }}</p>\n                            </td>\n                        </tr>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/pages/reports/reports.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/pages/reports/reports.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"detail-page\">\n\t<div class=\"card\">\n\t\t<tabset class=\"nav nav-tabs d-flex justify-content-center mb-2\">\n\t\t\t<tab customClass=\"text-left\" id=\"3\" (selectTab)=\"setActiveReportTab($event)\">\n\t\t\t\t<ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-user-circle\"></i><span class=\"mt-1 ml-1\">TimeSheet</span></div></ng-template>\n\t\t\t\t<app-defect-reports *ngIf=\"getActiveReportTab('3')\"></app-defect-reports>\n\t\t\t</tab>\n\t\t\t<tab customClass=\"text-left active\" id=\"1\" (selectTab)=\"setActiveReportTab($event)\">\n\t\t\t\t<ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-product-hunt\"></i><span class=\"mt-1 ml-1\">{{'reports.headings.project_report' | translate}}</span></div></ng-template>\n\t\t\t\t<app-project-reports *ngIf=\"getActiveReportTab('1')\"></app-project-reports>\n\t\t\t</tab>\n\t\t\t<tab customClass=\"text-left\" id=\"2\" (selectTab)=\"setActiveReportTab($event)\">\n\t\t\t\t<ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-tasks\"></i><span class=\"mt-1 ml-1\">{{'reports.headings.task_report' | translate}}</span></div></ng-template>\n\t\t\t\t<app-task-reports *ngIf=\"getActiveReportTab('2')\"></app-task-reports>\n\t\t\t</tab>\n\t\t\t<!-- <tab customClass=\"text-left\" id=\"4\" (selectTab)=\"setActiveReportTab($event)\">\n\t\t\t\t<ng-template tabHeading><div class=\"d-flex\"><i class=\"fa fa-ticket\"></i><span class=\"mt-1 ml-1\">{{'reports.headings.incident_report' | translate}}</span></div></ng-template>\n\t\t\t\t<app-incident-reports *ngIf=\"getActiveReportTab('4')\"></app-incident-reports>\n\t\t\t</tab> -->\n\t\t</tabset>\n\t</div>\n</section>\n");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n\n.table-bordered {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.table-bordered td {\n  border: 1px solid black;\n  padding: 8px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvZGVmZWN0LXJlcG9ydHMvQzpcXHhhbXBwXFxodGRvY3NcXGd2LWRldmVsb3BlclxcYW5ndWxhci9zcmNcXGFwcFxcbW9kdWxlc1xccG1cXHJlcG9ydHNcXGNvbXBvbmVudHNcXGRlZmVjdC1yZXBvcnRzXFxkZWZlY3QtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvZGVmZWN0LXJlcG9ydHMvZGVmZWN0LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL3JlcG9ydHMvY29tcG9uZW50cy9kZWZlY3QtcmVwb3J0cy9kZWZlY3QtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAub2RkIHtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbi50YWJsZS1ib3JkZXJlZCB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLnRhYmxlLWJvcmRlcmVkIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA4cHg7IFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxuICB9XG4gICIsIjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DefectReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectReportsComponent", function() { return DefectReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_14__);













Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_11__["defineLocale"])('vi', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_12__["viLocale"]);


var DefectReportsComponent = /** @class */ (function () {
    function DefectReportsComponent(translate, http, datePipe, authenticationService, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.datePipe = datePipe;
        this.authenticationService = authenticationService;
        this.exportAsService = exportAsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtOptions = {};
        this.currentMonth = this.datePipe.transform(new Date(), 'yyyy/MM');
        this.month = this.datePipe.transform(new Date(), 'yyyy/MM');
        this.defects = [];
        this.exportTableData = [];
        this.daysInMonth = [{}];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'defects_table',
        };
        this.datepickerConfig = {
            dateInputFormat: 'YYYY-MM',
            containerClass: 'theme-red',
            minMode: 'month',
            maxDate: new Date(),
            locale: 'vi',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    DefectReportsComponent.prototype.ngOnInit = function () {
        this.daysInMonth = this.getTotalDaysInMonth(this.month);
        this.loadDatatable();
    };
    DefectReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        this.http.post(this.apiUrl + '/api/defect/defect-report', { month: this.month }, {})
            .subscribe(function (resp) {
            _this.exportTableData = resp.data;
            _this.exportTableData.forEach(function (element, index) {
                var timesheetconvert = _this.exportTableDataArray(element.timesheet);
                console.log(timesheetconvert);
                element.timesheet = timesheetconvert.data;
                element.timesheet_total = timesheetconvert.total;
                var timesheetconvertOT = _this.exportTableDataArray(element.timesheet_ot);
                element.timesheet_ot = timesheetconvertOT.data;
                element.timesheet_ot_total = timesheetconvertOT.total;
                element.actual_working_day = 0;
                element.timesheet.forEach(function (element2, index2) {
                    element2.check = _this.compareValues(element2, 8.5);
                    if (element2.check) {
                        element.actual_working_day++;
                    }
                });
            });
            // console.log(this.exportTableData);
            // this.defects = resp.data;
            _this.isPageLoaded = true;
            // callback({
            // 	recordsTotal: 0,
            // 	recordsFiltered: 0,
            // 	data: [],
            // });
        });
        return;
    };
    DefectReportsComponent.prototype.exportTableDataArray = function (data) {
        var total = 0;
        var dataReturn = Object.keys(data).map(function (key) {
            var value = parseFloat(data[key]);
            if (isNaN(value))
                value = 0;
            total += value;
            return {
                key: key,
                value: value
            };
        });
        return { total: total, data: dataReturn };
    };
    DefectReportsComponent.prototype.compareValues = function (timesheet, working_hours) {
        var isEqual = Number(timesheet.value) === Number(working_hours);
        var todayCheck = new Date(timesheet.key);
        var isSaturday = todayCheck.getDay() === 6;
        var weekOfMonth = this.getWeekOfMonth(todayCheck);
        // const isSecondOrFourthWeek = (weekOfMonth === 2 || weekOfMonth === 4);
        var newDate = new Date();
        var today = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["startOfDay"])(new Date(newDate.getFullYear(), newDate.getMonth(), 25));
        var currentWeekMonday = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["startOfWeek"])(today, { weekStartsOn: 1 });
        var isWeekdayAndFuture = todayCheck > currentWeekMonday && Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["getDay"])(todayCheck) >= 1 && Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["getDay"])(todayCheck) <= 5;
        return isEqual;
        // (isSaturday && isSecondOrFourthWeek) ||
        //  isWeekdayAndFuture;
    };
    DefectReportsComponent.prototype.getWeekOfMonth = function (date) {
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var firstDayOfWeek = firstDay.getDay();
        var dayOfMonth = date.getDate();
        return Math.ceil((dayOfMonth + firstDayOfWeek) / 7);
    };
    DefectReportsComponent.prototype.nextMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["addMonths"])(this.month, 1));
    };
    DefectReportsComponent.prototype.preMonth = function () {
        this.changeMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["subMonths"])(this.month, 1));
    };
    DefectReportsComponent.prototype.changeMonth = function (selectedDate) {
        this.month = this.datePipe.transform(selectedDate, 'yyyy/MM');
        this.daysInMonth = this.getTotalDaysInMonth(this.month);
        this.loadDatatable();
    };
    DefectReportsComponent.prototype.getTotalDaysInMonth = function (date) {
        var start = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["startOfMonth"])(date);
        var end = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["endOfMonth"])(date);
        var daysInMonth = [];
        for (var d = start; d <= end; d.setDate(d.getDate() + 1)) {
            daysInMonth.push({ date: Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["format"])(new Date(d), 'YYYY-MM-DD'), stt: Number(Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["format"])(new Date(d), 'd')), day: Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["getDate"])(new Date(d)) });
        }
        return daysInMonth;
    };
    DefectReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('reports.headings.defect_report')).subscribe(function () { });
    };
    DefectReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    DefectReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.exportTableData.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    DefectReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], DefectReportsComponent.prototype, "dtElement", void 0);
    DefectReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defect-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defect-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defect-reports.component.scss */ "./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"]])
    ], DefectReportsComponent);
    return DefectReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvaW5jaWRlbnQtcmVwb3J0cy9DOlxceGFtcHBcXGh0ZG9jc1xcZ3YtZGV2ZWxvcGVyXFxhbmd1bGFyL3NyY1xcYXBwXFxtb2R1bGVzXFxwbVxccmVwb3J0c1xcY29tcG9uZW50c1xcaW5jaWRlbnQtcmVwb3J0c1xcaW5jaWRlbnQtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvaW5jaWRlbnQtcmVwb3J0cy9pbmNpZGVudC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvaW5jaWRlbnQtcmVwb3J0cy9pbmNpZGVudC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5vZGQge1xuICAgIGRpc3BsYXk6IG5vbmVcbn0iLCI6Om5nLWRlZXAgLm9kZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: IncidentReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentReportsComponent", function() { return IncidentReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__);











var IncidentReportsComponent = /** @class */ (function () {
    function IncidentReportsComponent(translate, http, authenticationService, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.authenticationService = authenticationService;
        this.exportAsService = exportAsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtOptions = {};
        this.incidents = [];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'incidents_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    IncidentReportsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    IncidentReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            responsive: true,
            searching: true,
            processing: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': true,
                    'target': [4]
                },
                {
                    'sortable': true,
                    'target': [5]
                },
                {
                    'sortable': true,
                    'target': [6]
                },
                {
                    'sortable': true,
                    'target': [7]
                },
                {
                    'sortable': true,
                    'target': [8]
                },
                {
                    'sortable': true,
                    'target': [9]
                },
                {
                    'sortable': true,
                    'target': [10]
                },
                {
                    'sortable': true,
                    'target': [11]
                }
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('reports.headings.incident_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('reports.headings.incident_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('reports.headings.incident_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }
            ],
            language: {
                "sEmptyTable": this.translate.instant('common.datatable.sEmptyTable'),
                "sInfo": this.translate.instant('common.datatable.sInfo'),
                "sInfoEmpty": this.translate.instant('common.datatable.sInfoEmpty'),
                "sSearch": "",
                "sInfoPostFix": this.translate.instant('common.datatable.sInfoPostFix'),
                "sInfoThousands": this.translate.instant('common.datatable.sInfoThousands'),
                "sLengthMenu": this.translate.instant('common.datatable.sLengthMenu'),
                "sLoadingRecords": this.translate.instant('common.datatable.sLoadingRecords'),
                "sProcessing": this.translate.instant('common.datatable.sProcessing'),
                "sZeroRecords": this.translate.instant('common.datatable.sZeroRecords'),
                "sSearchPlaceholder": this.translate.instant('common.datatable.sSearchPlaceholder'),
                "oPaginate": {
                    "sFirst": this.translate.instant('common.datatable.oPaginate.sFirst'),
                    "sLast": this.translate.instant('common.datatable.oPaginate.sLast'),
                    "sNext": this.translate.instant('common.datatable.oPaginate.sNext'),
                    "sPrevious": this.translate.instant('common.datatable.oPaginate.sPrevious')
                },
                "oAria": {
                    "sSortAscending": this.translate.instant('common.datatable.oAria.sSortAscending'),
                    "sSortDescending": this.translate.instant('common.datatable.oAria.sSortDescending')
                }
            },
            ajax: function (dataTablesParameters, callback) {
                _this.http
                    .post(_this.apiUrl + '/api/incident/incident-report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.incidents = resp.data;
                    _this.isPageLoaded = true;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    IncidentReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('reports.headings.incident_report')).subscribe(function () { });
    };
    IncidentReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    IncidentReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.incidents.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    IncidentReportsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                        that.search(this['value']).draw();
                    }
                });
            });
        });
    };
    IncidentReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], IncidentReportsComponent.prototype, "dtElement", void 0);
    IncidentReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./incident-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./incident-reports.component.scss */ "./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], IncidentReportsComponent);
    return IncidentReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/project-reports/project-reports.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/project-reports/project-reports.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvcHJvamVjdC1yZXBvcnRzL0M6XFx4YW1wcFxcaHRkb2NzXFxndi1kZXZlbG9wZXJcXGFuZ3VsYXIvc3JjXFxhcHBcXG1vZHVsZXNcXHBtXFxyZXBvcnRzXFxjb21wb25lbnRzXFxwcm9qZWN0LXJlcG9ydHNcXHByb2plY3QtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvcHJvamVjdC1yZXBvcnRzL3Byb2plY3QtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL3Byb2plY3QtcmVwb3J0cy9wcm9qZWN0LXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm9kZCB7XG4gICAgZGlzcGxheTogbm9uZVxufSIsIjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/project-reports/project-reports.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/project-reports/project-reports.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProjectReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectReportsComponent", function() { return ProjectReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_11__);












var ProjectReportsComponent = /** @class */ (function () {
    function ProjectReportsComponent(translate, http, userService, authenticationService, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.exportAsService = exportAsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isPageLoaded = false;
        this.dtOptions = {};
        this.projects = [];
        this.userLists = [];
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'projects_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    ProjectReportsComponent.prototype.ngOnInit = function () {
        this.getUserkeyBy();
        this.loadProjectDatatable();
    };
    ProjectReportsComponent.prototype.getUserkeyBy = function () {
        var _this = this;
        this.userService.getUserkeyBy().subscribe(function (data) {
            _this.userLists = data;
        });
    };
    ProjectReportsComponent.prototype.loadProjectDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            searching: true,
            processing: true,
            responsive: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'width': "5%",
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': false,
                    'target': [4]
                },
                {
                    'sortable': false,
                    'target': [5]
                },
                {
                    'sortable': false,
                    'target': [6]
                },
                {
                    'sortable': false,
                    'target': [7]
                }, {
                    'sortable': false,
                    'target': [8]
                }, {
                    'sortable': false,
                    'target': [9]
                },
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('reports.headings.project_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('reports.headings.project_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('reports.headings.project_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }
            ],
            language: {
                "sEmptyTable": this.translate.instant('common.datatable.sEmptyTable'),
                "sInfo": this.translate.instant('common.datatable.sInfo'),
                "sInfoEmpty": this.translate.instant('common.datatable.sInfoEmpty'),
                "sSearch": "",
                "sInfoPostFix": this.translate.instant('common.datatable.sInfoPostFix'),
                "sInfoThousands": this.translate.instant('common.datatable.sInfoThousands'),
                "sLengthMenu": this.translate.instant('common.datatable.sLengthMenu'),
                "sLoadingRecords": this.translate.instant('common.datatable.sLoadingRecords'),
                "sProcessing": this.translate.instant('common.datatable.sProcessing'),
                "sZeroRecords": this.translate.instant('common.datatable.sZeroRecords'),
                "sSearchPlaceholder": this.translate.instant('common.datatable.sSearchPlaceholder'),
                "oPaginate": {
                    "sFirst": this.translate.instant('common.datatable.oPaginate.sFirst'),
                    "sLast": this.translate.instant('common.datatable.oPaginate.sLast'),
                    "sNext": this.translate.instant('common.datatable.oPaginate.sNext'),
                    "sPrevious": this.translate.instant('common.datatable.oPaginate.sPrevious')
                },
                "oAria": {
                    "sSortAscending": this.translate.instant('common.datatable.oAria.sSortAscending'),
                    "sSortDescending": this.translate.instant('common.datatable.oAria.sSortDescending')
                }
            },
            ajax: function (dataTablesParameters, callback) {
                _this.http
                    .post(_this.apiUrl + '/api/projects/project-report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.projects = resp.data;
                    _this.isPageLoaded = true;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    ProjectReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('reports.headings.project_report')).subscribe(function () { });
    };
    ProjectReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProjectReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.projects.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    ProjectReportsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                        that.search(this['value']).draw();
                    }
                });
            });
        });
    };
    ProjectReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], ProjectReportsComponent.prototype, "dtElement", void 0);
    ProjectReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/project-reports/project-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-reports.component.scss */ "./src/app/modules/pm/reports/components/project-reports/project-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], ProjectReportsComponent);
    return ProjectReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/components/task-reports/task-reports.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/task-reports/task-reports.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .odd {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvdGFzay1yZXBvcnRzL0M6XFx4YW1wcFxcaHRkb2NzXFxndi1kZXZlbG9wZXJcXGFuZ3VsYXIvc3JjXFxhcHBcXG1vZHVsZXNcXHBtXFxyZXBvcnRzXFxjb21wb25lbnRzXFx0YXNrLXJlcG9ydHNcXHRhc2stcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wbS9yZXBvcnRzL2NvbXBvbmVudHMvdGFzay1yZXBvcnRzL3Rhc2stcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9jb21wb25lbnRzL3Rhc2stcmVwb3J0cy90YXNrLXJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm9kZCB7XG4gICAgZGlzcGxheTogbm9uZVxufSIsIjo6bmctZGVlcCAub2RkIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pm/reports/components/task-reports/task-reports.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/pm/reports/components/task-reports/task-reports.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TaskReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskReportsComponent", function() { return TaskReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__);











var TaskReportsComponent = /** @class */ (function () {
    function TaskReportsComponent(translate, http, authenticationService, exportAsService) {
        var _this = this;
        this.translate = translate;
        this.http = http;
        this.authenticationService = authenticationService;
        this.exportAsService = exportAsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.dtOptions = {};
        this.tasks = [];
        this.isPageLoaded = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'tasks_table',
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TaskReportsComponent.prototype.ngOnInit = function () {
        this.loadDatatable();
    };
    TaskReportsComponent.prototype.loadDatatable = function () {
        var _this = this;
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: that.loginUser.settings.tables_pagination_limit,
            serverSide: true,
            searching: true,
            processing: true,
            responsive: true,
            dom: '<"html5buttons"B>ltfrtip',
            order: [0],
            columns: [
                {
                    'sortable': true,
                    'width': "5%",
                    'target': [0]
                },
                {
                    'sortable': true,
                    'target': [1]
                },
                {
                    'sortable': true,
                    'target': [2]
                },
                {
                    'sortable': true,
                    'target': [3]
                },
                {
                    'sortable': true,
                    'target': [4]
                },
                {
                    'sortable': false,
                    'target': [5]
                },
                {
                    'sortable': false,
                    'target': [6]
                },
                {
                    'sortable': false,
                    'target': [7]
                },
                {
                    'sortable': false,
                    'target': [8]
                },
                {
                    'sortable': false,
                    'target': [9]
                }, {
                    'sortable': false,
                    'target': [10]
                },
            ],
            buttons: [
                {
                    extend: 'csv',
                    title: this.translate.instant('reports.headings.task_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('csv');
                    }
                }, {
                    extend: 'excel',
                    title: this.translate.instant('reports.headings.task_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('xlsx');
                    }
                }, {
                    extend: 'pdf',
                    title: this.translate.instant('reports.headings.task_report'),
                    className: "btn btn-datatable-gredient",
                    action: function (e, dt, node, config) {
                        that.exportFiles('pdf');
                    }
                }
            ],
            language: {
                "sEmptyTable": this.translate.instant('common.datatable.sEmptyTable'),
                "sInfo": this.translate.instant('common.datatable.sInfo'),
                "sInfoEmpty": this.translate.instant('common.datatable.sInfoEmpty'),
                "sSearch": "",
                "sInfoPostFix": this.translate.instant('common.datatable.sInfoPostFix'),
                "sInfoThousands": this.translate.instant('common.datatable.sInfoThousands'),
                "sLengthMenu": this.translate.instant('common.datatable.sLengthMenu'),
                "sLoadingRecords": this.translate.instant('common.datatable.sLoadingRecords'),
                "sProcessing": this.translate.instant('common.datatable.sProcessing'),
                "sZeroRecords": this.translate.instant('common.datatable.sZeroRecords'),
                "sSearchPlaceholder": this.translate.instant('common.datatable.sSearchPlaceholder'),
                "oPaginate": {
                    "sFirst": this.translate.instant('common.datatable.oPaginate.sFirst'),
                    "sLast": this.translate.instant('common.datatable.oPaginate.sLast'),
                    "sNext": this.translate.instant('common.datatable.oPaginate.sNext'),
                    "sPrevious": this.translate.instant('common.datatable.oPaginate.sPrevious')
                },
                "oAria": {
                    "sSortAscending": this.translate.instant('common.datatable.oAria.sSortAscending'),
                    "sSortDescending": this.translate.instant('common.datatable.oAria.sSortDescending')
                }
            },
            ajax: function (dataTablesParameters, callback) {
                _this.http
                    .post(_this.apiUrl + '/api/tasks/task-report', dataTablesParameters, {})
                    .subscribe(function (resp) {
                    _this.tasks = resp.data;
                    _this.isPageLoaded = true;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsFiltered,
                        data: [],
                    });
                });
            }
        };
    };
    TaskReportsComponent.prototype.convertTimeToDecimal = function (time) {
        var _a;
        if (!time || time.trim() === '') {
            return 0;
        }
        if (typeof time !== 'string') {
            time = String(time);
        }
        var hours;
        var minutes = 0;
        if (time.includes(':')) {
            _a = time.split(':').map(Number), hours = _a[0], minutes = _a[1];
        }
        else {
            hours = Number(time);
        }
        var decimalMinutes = minutes / 60;
        return hours + decimalMinutes;
    };
    TaskReportsComponent.prototype.exportFiles = function (type) {
        this.exportAsConfig.type = type;
        this.exportAsService.save(this.exportAsConfig, this.translate.instant('reports.headings.task_report')).subscribe(function () { });
    };
    TaskReportsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    TaskReportsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            setTimeout(function () {
                _this.dtTrigger.next();
                if (_this.tasks.length > 0) {
                    $('.tfoot_dt').addClass('d-none');
                }
                else {
                    $('.tfoot_dt').removeClass('d-none');
                }
            });
        });
    };
    TaskReportsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.columns().every(function () {
                var that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this['value']) {
                        that.search(this['value']).draw();
                    }
                });
            });
        });
    };
    TaskReportsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], TaskReportsComponent.prototype, "dtElement", void 0);
    TaskReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/components/task-reports/task-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-reports.component.scss */ "./src/app/modules/pm/reports/components/task-reports/task-reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"]])
    ], TaskReportsComponent);
    return TaskReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/pages/reports/reports.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pm/reports/pages/reports/reports.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG0vcmVwb3J0cy9wYWdlcy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pm/reports/pages/reports/reports.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/pm/reports/pages/reports/reports.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
        this.activeActiveReportTab = '3';
    }
    ReportsComponent.prototype.ngOnInit = function () { };
    ReportsComponent.prototype.setActiveReportTab = function ($event) {
        this.activeActiveReportTab = $event.id;
    };
    ReportsComponent.prototype.getActiveReportTab = function (tab) {
        return this.activeActiveReportTab === tab;
    };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/reports/pages/reports/reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reports.component.scss */ "./src/app/modules/pm/reports/pages/reports/reports.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/reports-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/pm/reports/reports-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reports/reports.component */ "./src/app/modules/pm/reports/pages/reports/reports.component.ts");





var routes = [
    {
        path: '',
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
        component: _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"],
        data: {
            permissions: {
                only: ['reports_view']
            }
        }
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pm/reports/reports.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/pm/reports/reports.module.ts ***!
  \******************************************************/
/*! exports provided: ReportsModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/modules/pm/reports/reports-routing.module.ts");
/* harmony import */ var _components_project_reports_project_reports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/project-reports/project-reports.component */ "./src/app/modules/pm/reports/components/project-reports/project-reports.component.ts");
/* harmony import */ var _components_task_reports_task_reports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/task-reports/task-reports.component */ "./src/app/modules/pm/reports/components/task-reports/task-reports.component.ts");
/* harmony import */ var _components_defect_reports_defect_reports_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/defect-reports/defect-reports.component */ "./src/app/modules/pm/reports/components/defect-reports/defect-reports.component.ts");
/* harmony import */ var _components_incident_reports_incident_reports_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/incident-reports/incident-reports.component */ "./src/app/modules/pm/reports/components/incident-reports/incident-reports.component.ts");
/* harmony import */ var _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/reports/reports.component */ "./src/app/modules/pm/reports/pages/reports/reports.component.ts");

















;

var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_project_reports_project_reports_component__WEBPACK_IMPORTED_MODULE_13__["ProjectReportsComponent"],
                _components_task_reports_task_reports_component__WEBPACK_IMPORTED_MODULE_14__["TaskReportsComponent"],
                _components_defect_reports_defect_reports_component__WEBPACK_IMPORTED_MODULE_15__["DefectReportsComponent"],
                _components_incident_reports_incident_reports_component__WEBPACK_IMPORTED_MODULE_16__["IncidentReportsComponent"],
                _pages_reports_reports_component__WEBPACK_IMPORTED_MODULE_17__["ReportsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_12__["ReportsRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]
            ]
        })
    ], ReportsModule);
    return ReportsModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-pm-reports-reports-module.js.map