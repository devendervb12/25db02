sap.ui.controller("zdb02.CompanyData", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zdb02.CompanyData
*/
	onInit: function() {
        // load the data
		
		// 1. instantiating appropiate model
		var oModel = new sap.ui.model.json.JSONModel();
		
		oModel.loadData("model/data.json");
		
		// set the model
		this.getView().setModel(oModel);
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zdb02.CompanyData
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zdb02.CompanyData
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zdb02.CompanyData
*/
//	onExit: function() {
//
//	}

});