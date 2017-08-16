﻿(function () {
    "use strict";

    var ControlConstructor = WinJS.UI.Pages.define("/pages/hub/section2Page.html", {
        // This function is called after the page control contents 
        // have been loaded, controls have been activated, and 
        // the resulting elements have been parented to the DOM. 
        ready: function (element, options) {
            options = options || {};
            generatePanelInput();
        },
    });

    // The following lines expose this control constructor as a global. 
    // This lets you use the control as a declarative control inside the 
    // data-win-control attribute. 
    function generatePanelInput() {
        var pnIn = document.querySelector("#pnIn");
        var pnlPwr = 16.6;

        pnIn.innerHTML = pnlPwr + " Volts";
        //console.log(pnIn);
    }

    WinJS.Namespace.define("HubApps_SectionControls", {
        Section2Control: ControlConstructor
    });
})();