(function () {
    "use strict";

    var ControlConstructor = WinJS.UI.Pages.define("/pages/hub/section4Page.html", {
        // This function is called after the page control contents 
        // have been loaded, controls have been activated, and 
        // the resulting elements have been parented to the DOM. 
        ready: function (element, options) {
            options = options || {};
            var img1sect4 = element.querySelector("#img1sect4");
            img1sect4.addEventListener("click", trigger1, false);
            var img2sect4 = element.querySelector("#img2sect4");
            img2sect4.addEventListener("click", trigger2, false);
            var img3sect4 = element.querySelector("#img3sect4");
            img3sect4.addEventListener("click", trigger3, false);
            //console.log(img1sect4);
        },
    });

    // The following lines expose this control constructor as a global. 
    // This lets you use the control as a declarative control inside the 
    // data-win-control attribute. 
    function trigger1() {
        console.log("working trigger1");
    }
    function trigger2() {
        console.log("working trigger2");
    }
    function trigger3() {
        console.log("working trigger3");
    }
    WinJS.Namespace.define("HubApps_SectionControls", {
        Section4Control: ControlConstructor
    });
})();