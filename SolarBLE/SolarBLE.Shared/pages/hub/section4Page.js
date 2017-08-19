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
    var dtaIn, mainSect4;

    dtaIn = 12;

    mainSect4 = {
        0: "<button class='backBtn'>Close</button><h2>You and your system</h2><br /><p>You have ran your system for " + dtaIn + " days straight!</p>",
        1: "<button class='backBtn'>Close</button><h2>Information about your personal carbon footprint</h2><br /><p></p>",
        2: "<button class='backBtn'>Close</button><h2>Information about your personal acheivements</h2><br /><p></p>",
        3: "<button class='backBtn'>Close</button><h2>Advice from Skye</h2><br /><p></p>"
    };

    function triggerMain(k, element, imgClassSect4) {
        return function () {
            //console.log(imgClassSect4[k]);

            imgClassSect4[3].style.marginLeft = "100vw";


            imgClassSect4[2].style.marginLeft = "100vw";


            imgClassSect4[1].style.marginLeft = "100vw";


            imgClassSect4[0].style.marginLeft = "100vw";


            var slate = document.createElement("div");
                
                slate.className = "slate";

                slate.innerHTML = mainSect4[k];

                document.body.appendChild(slate); 

                setTimeout(function () {
                    var backBtn = document.querySelector(".backBtn");
                    backBtn.addEventListener("click", closeMain(slate), false);

                    

                    slate.className = "slate_full";
                }, .1);
                function closeMain(slate) {
                    return function () {
                        imgClassSect4[3].style.marginLeft = "0";


                        imgClassSect4[2].style.marginLeft = "0";


                        imgClassSect4[1].style.marginLeft = "0";


                        imgClassSect4[0].style.marginLeft = "0";
                        slate.removeNode();
                        //window.location.reload();
                    }
                }
         
        }
    }
    
    WinJS.Namespace.define("HubApps_SectionControls", {
        Section4Control: ControlConstructor
    });
})();