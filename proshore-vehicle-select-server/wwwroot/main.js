(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev_Personal\Proshore\Dev\Front-end\proshore-vehicle-select-ui\src\main.ts */"zUnb");


/***/ }),

/***/ "7lLD":
/*!***************************************************************************!*\
  !*** ./src/app/vehicle-select/vehicle-select/vehicle-select.component.ts ***!
  \***************************************************************************/
/*! exports provided: VehicleSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleSelectComponent", function() { return VehicleSelectComponent; });
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _clr_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/icons */ "1RNg");
/* harmony import */ var _clr_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clr_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vehicle_select_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle-select.service */ "k44h");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function VehicleSelectComponent_clr_control_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "clr-control-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function VehicleSelectComponent_clr_control_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "clr-control-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function VehicleSelectComponent_clr_control_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "clr-control-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function VehicleSelectComponent_clr_control_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "clr-control-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function VehicleSelectComponent_clr_dg_row_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "clr-dg-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](user_r5.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](user_r5.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](user_r5.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](user_r5.number);
} }
class VehicleSelectComponent {
    constructor(_formBuilder, _vehicleSelectService) {
        this._formBuilder = _formBuilder;
        this._vehicleSelectService = _vehicleSelectService;
        this.cloneButtonState = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].DEFAULT;
        this.totalLoad = [];
        this.vehicle = "";
    }
    ngOnInit() {
        this.loadFormGroup = this._formBuilder.group({
            length: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            width: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    submit() {
        this.vehicle = "";
        if (this.loadFormGroup.valid) {
            this._vehicleSelectService.getVehicle(this.totalLoad)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
                console.log(error);
                this.vehicle = "Cannot find a suitable vehicle";
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }))
                .subscribe(result => {
                let response = result;
                this.vehicle = response.result;
            });
        }
    }
    isValid() {
        if (this.totalLoad.length > 0) {
            return false;
        }
        return true;
    }
    addLoad() {
        let load = {
            length: this.loadFormGroup.get('length').value,
            width: this.loadFormGroup.get('width').value,
            height: this.loadFormGroup.get('height').value
        };
        this.totalLoad.push({
            length: this.loadFormGroup.get('length').value,
            width: this.loadFormGroup.get('width').value,
            height: this.loadFormGroup.get('height').value,
            number: this.loadFormGroup.get('number').value
        });
    }
}
VehicleSelectComponent.??fac = function VehicleSelectComponent_Factory(t) { return new (t || VehicleSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_vehicle_select_service__WEBPACK_IMPORTED_MODULE_6__["VehicleSelectService"])); };
VehicleSelectComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: VehicleSelectComponent, selectors: [["app-vehicle-select"]], decls: 42, vars: 9, consts: [["clrForm", "", 3, "formGroup", "ngSubmit"], ["for", "length", 1, "clr-control-label", "clr-col-md-2", "clr-col-sm-3", "required"], ["type", "number", "clrInput", "", "formControlName", "length", "id", "length", "placeholder", "Length"], [4, "clrIfError"], ["for", "width", 1, "clr-control-label", "clr-col-md-2", "clr-col-sm-3", "required"], ["type", "number", "clrInput", "", "formControlName", "width", "id", "width", "placeholder", "Width"], ["for", "height", 1, "clr-control-label", "clr-col-md-2", "clr-col-sm-3", "required"], ["type", "number", "clrInput", "", "formControlName", "height", "id", "height", "placeholder", "Height"], ["for", "number", 1, "clr-control-label", "clr-col-md-2", "clr-col-sm-3", "required"], ["type", "number", "clrInput", "", "formControlName", "number", "id", "number", "placeholder", "Number Of Load"], ["type", "button", 1, "btn", "btn-outline", 3, "disabled", "click"], [4, "ngFor", "ngForOf"], ["id", "result", 3, "ngModel", "ngModelChange"]], template: function VehicleSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Please fill out the information about load and hit submit. Your result will be shown in the textarea under Submit button");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngSubmit", function VehicleSelectComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "Length");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](8, VehicleSelectComponent_clr_control_error_8_Template, 2, 0, "clr-control-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](12, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](14, VehicleSelectComponent_clr_control_error_14_Template, 2, 0, "clr-control-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](18, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](20, VehicleSelectComponent_clr_control_error_20_Template, 2, 0, "clr-control-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, "Number of Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](26, VehicleSelectComponent_clr_control_error_26_Template, 2, 0, "clr-control-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function VehicleSelectComponent_Template_button_click_27_listener() { return ctx.addLoad(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](28, " Add Load ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "clr-datagrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](31, "Length");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](33, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](34, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](35, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](36, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](37, "Number of Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](38, VehicleSelectComponent_clr_dg_row_38_Template, 9, 4, "clr-dg-row", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](39, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function VehicleSelectComponent_Template_button_click_39_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](40, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](41, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function VehicleSelectComponent_Template_textarea_ngModelChange_41_listener($event) { return ctx.vehicle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.loadFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("clrIfError", "required");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("clrIfError", "required");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("clrIfError", "required");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("clrIfError", "required");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx.loadFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx.totalLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx.isValid());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.vehicle);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrIfError"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["??lrDatagridMainRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["??lrDatagridWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["??lrActionableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["??lrExpandableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["??lrDatagridHeaderRenderer"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrControlError"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["??lrDatagridRowRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["??lrDatagridCellRenderer"]], styles: ["*[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  background: white;\r\n}\r\n\r\n.datagrid-cell[_ngcontent-%COMP%] {\r\n  padding-top: 0px !important;\r\n  padding-bottom: 0px !important;\r\n  line-height: 48px !important;\r\n}\r\n\r\n.btn.back-button[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: .5rem 0 -.25rem -.25rem !important;\r\n  color: #fff;\r\n}\r\n\r\n.btn.back-button[_ngcontent-%COMP%]:hover {\r\n    color: #002538;\r\n  }\r\n\r\n.nav-content[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 96px);\r\n}\r\n\r\n.clr-vertical-nav[_ngcontent-%COMP%] {\r\n  width: 12rem;\r\n}\r\n\r\n.loadingSpinner[_ngcontent-%COMP%] {\r\n  margin-left: 22rem;\r\n}\r\n\r\n.pageLoadingSpinner[_ngcontent-%COMP%] {\r\n  margin-top: 0.5rem;\r\n  text-align: center;\r\n}\r\n\r\n.datagrid-table[_ngcontent-%COMP%]   .datagrid-cell[_ngcontent-%COMP%], .datagrid-table[_ngcontent-%COMP%]   .datagrid-column[_ngcontent-%COMP%] {\r\n  max-width: 25rem;\r\n}\r\n\r\n.amount-below-threshold-warning[_ngcontent-%COMP%] {\r\n  background-color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtc2VsZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMENBQTBDO0VBQzFDLFdBQVc7QUFDYjs7QUFFRTtJQUNFLGNBQWM7RUFDaEI7O0FBRUY7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InZlaGljbGUtc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJvZHksIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmRhdGFncmlkLWNlbGwge1xyXG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi5iYWNrLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IC41cmVtIDAgLS4yNXJlbSAtLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiAgLmJ0bi5iYWNrLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMjUzODtcclxuICB9XHJcblxyXG4ubmF2LWNvbnRlbnQge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDk2cHgpO1xyXG59XHJcblxyXG4uY2xyLXZlcnRpY2FsLW5hdiB7XHJcbiAgd2lkdGg6IDEycmVtO1xyXG59XHJcblxyXG4ubG9hZGluZ1NwaW5uZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMnJlbTtcclxufVxyXG5cclxuLnBhZ2VMb2FkaW5nU3Bpbm5lciB7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGFncmlkLXRhYmxlIC5kYXRhZ3JpZC1jZWxsLCAuZGF0YWdyaWQtdGFibGUgLmRhdGFncmlkLWNvbHVtbiB7XHJcbiAgbWF4LXdpZHRoOiAyNXJlbTtcclxufVxyXG5cclxuLmFtb3VudC1iZWxvdy10aHJlc2hvbGQtd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:52433'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'proshore-vehicle-select-ui';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _vehicle_select_vehicle_select_vehicle_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle-select/vehicle-select/vehicle-select.component */ "7lLD");
/* harmony import */ var src_app_vehicle_select_vehicle_select_vehicle_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/vehicle-select/vehicle-select/vehicle-select.module */ "xzBo");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            src_app_vehicle_select_vehicle_select_vehicle_select_module__WEBPACK_IMPORTED_MODULE_4__["VehicleSelectModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _vehicle_select_vehicle_select_vehicle_select_component__WEBPACK_IMPORTED_MODULE_3__["VehicleSelectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        src_app_vehicle_select_vehicle_select_vehicle_select_module__WEBPACK_IMPORTED_MODULE_4__["VehicleSelectModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "k44h":
/*!*************************************************************************!*\
  !*** ./src/app/vehicle-select/vehicle-select/vehicle-select.service.ts ***!
  \*************************************************************************/
/*! exports provided: VehicleSelectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleSelectService", function() { return VehicleSelectService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class VehicleSelectService {
    constructor(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/vehicleSelect/`;
    }
    getVehicle(model) {
        console.log(model);
        console.log(`${this.baseUrl}`);
        return this._http.post(`${this.baseUrl}`, model);
    }
}
VehicleSelectService.??fac = function VehicleSelectService_Factory(t) { return new (t || VehicleSelectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
VehicleSelectService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: VehicleSelectService, factory: VehicleSelectService.??fac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _vehicle_select_vehicle_select_vehicle_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-select/vehicle-select/vehicle-select.component */ "7lLD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', redirectTo: '/vehicle-select', pathMatch: 'full' },
    { path: 'vehicle-select', component: _vehicle_select_vehicle_select_vehicle_select_component__WEBPACK_IMPORTED_MODULE_1__["VehicleSelectComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xzBo":
/*!************************************************************************!*\
  !*** ./src/app/vehicle-select/vehicle-select/vehicle-select.module.ts ***!
  \************************************************************************/
/*! exports provided: VehicleSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleSelectModule", function() { return VehicleSelectModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-routing.module */ "vY5A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class VehicleSelectModule {
}
VehicleSelectModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: VehicleSelectModule });
VehicleSelectModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ factory: function VehicleSelectModule_Factory(t) { return new (t || VehicleSelectModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](VehicleSelectModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map