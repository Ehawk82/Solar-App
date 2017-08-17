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
            ///console.log(element);
            sliderBtn(element)
        },
    });
    function sliderBtn(element) {
        var btn = document.createElement("div");
        btn.style.position = "absolute";
        btn.innerHTML = "⬅";
        btn.style.left = "10px";


        element.appendChild(btn);
        btn.addEventListener("click", hideSun(btn), false);

    }
    function hideSun(btn) {
        return function() {
            var xx = document.querySelector(".hero");

            xx.className = "hero_gone";
            btn.style.left = "-100%";
            //console.log(xx);
        }
    }
    function generatePwrData() {
        var spnPwr = document.querySelector("#spnPwr");
        var pwr = 11.73;///get input from BLE for power level

        spnPwr.innerHTML = pwr + " Volts";

        //return console.log(pwr);
        generatePwrPin(pwr);
    }
    function generatePwrUse() {
        var spnUse = document.querySelector("#spnUse");
        var pwr = "124.73";///get input from BLE for power usage

        spnUse.innerHTML = pwr + " W/H";

        //return console.log(pwr);

    }

    function generatePwrPin(pwr) {

        var pwrPin = document.querySelector("#pwrPin"), vin;
        
        if (+pwr <= 1) {
            vin = 7;
        } else {
            vin = 12;
        }

        var pin = (+pwr * +12.5) + +vin;
        pwrPin.style.transform = 'rotate(' + pin + 'deg)';
        //console.log(pin);
    }
    // The following lines expose this control constructor as a global. 
    // This lets you use the control as a declarative control inside the 
    // data-win-control attribute. 

    WinJS.Namespace.define("HubApps_SectionControls", {
        Section1Control: ControlConstructor
    });
    
})();