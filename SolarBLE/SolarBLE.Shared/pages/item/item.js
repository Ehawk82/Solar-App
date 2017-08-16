(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/item/item.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var item = Data.resolveItemReference(options.item);
            element.querySelector(".titlearea .pagetitle").textContent = item.title;
			if (WinJS.Utilities.isPhone)
			{
				document.getElementById("backButton").style.display = "none";
            }
            // TODO: Initialize the page here.
			

            if (item.title === "▪ Hardware") {

                element.querySelector(".content").innerHTML = item.content;
                //console.log(item);
            }
            if (item.title === "▪ Software") {

                element.querySelector(".content").innerHTML = item.content;
                //console.log(item);
            }
            if (item.title === "▪ Misc.") {

                element.querySelector(".content").innerHTML = item.content;
                //console.log(item);
            }
        }
    });
})();
