sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,formatter) {
        "use strict";

        return Controller.extend("bindnorthwind.controller.First", {
            formatter: formatter,
            onInit: function () {

            }
        });
    });
