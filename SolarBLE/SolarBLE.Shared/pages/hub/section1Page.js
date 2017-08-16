(function () {
    "use strict";

    var ControlConstructor = WinJS.UI.Pages.define("/pages/hub/section1Page.html", {
        // This function is called after the page control contents 
        // have been loaded, controls have been activated, and 
        // the resulting elements have been parented to the DOM. 
        ready: function (element, options) {
            options = options || {};
            generatePwrData();
            generatePwrUse();
        },
    });
    
    function generatePwrData() {
        var spnPwr = document.querySelector("#spnPwr");
        var pwr = "12.67";///get input from BLE for power level

        spnPwr.innerHTML = pwr + " Volts";

        //return console.log(pwr);

    }
    function generatePwrUse() {
        var spnUse = document.querySelector("#spnUse");
        var pwr = "124.73";///get input from BLE for power usage

        spnUse.innerHTML = pwr + " W/H";

        //return console.log(pwr);

    }
    // The following lines expose this control constructor as a global. 
    // This lets you use the control as a declarative control inside the 
    // data-win-control attribute. 

    WinJS.Namespace.define("HubApps_SectionControls", {
        Section1Control: ControlConstructor
    });
    
})();