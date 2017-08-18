(function () {
    "use strict";

    var ControlConstructor = WinJS.UI.Pages.define("/pages/hub/section4Page.html", {
        // This function is called after the page control contents 
        // have been loaded, controls have been activated, and 
        // the resulting elements have been parented to the DOM. 
        ready: function (element, options) {
            options = options || {};
            var imgClassSect4 = element.querySelectorAll(".imgClassSect4");
            for (var k = 0; k < imgClassSect4.length; k++) {
                imgClassSect4[k].addEventListener("click", triggerMain(k, element, imgClassSect4), false);
            }
        },
    });

    // The following lines expose this control constructor as a global. 
    // This lets you use the control as a declarative control inside the 
    // data-win-control attribute.
    function triggerMain(k, element, imgClassSect4) {
        return function () {
            console.log(imgClassSect4[k]);
            imgClassSect4[3].style.display = "none";
            imgClassSect4[2].style.display = "none";
            imgClassSect4[1].style.display = "none";
            imgClassSect4[0].style.display = "none";
            var nm,
                slate = document.createElement("div");
                
                slate.className = "slate";

            
                if (k === 0) {//main
                    nm = "main";
                }
                if (k === 1) {//btn 1
                    nm = "sect 1";
                }
                if (k === 2) {//btn 2
                    nm = "sect 2";
                }
                if (k === 3) {//btn 3
                    nm = "sect 3";
                }

                slate.innerHTML = "slate: " + nm;

                document.body.appendChild(slate);

                setTimeout(function () { slate.className = "slate_full"; }, .1);
                
         
        } 
    }

    WinJS.Namespace.define("HubApps_SectionControls", {
        Section4Control: ControlConstructor
    });
})();