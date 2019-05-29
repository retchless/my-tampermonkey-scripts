// ==UserScript==
// @name         RTC-UI-Tweaks
// @namespace    RTC-UI-Tweaks
// @version      0.8
// @description  Hacks to the RTC Web UI to improve my workflow and stop my eyes from bleeding.
// @author       Rob Retchless
// @match        https://bajazz05.canlab.ibm.com:9750/ccm/*
// @grant        none
// @downloadURL  https://github.com/retchless/my-tampermonkey-scripts/raw/master/RTC-UI-Tweaks.user.js
// ==/UserScript==

(function() {
    'use strict';
    var uiStartup = dojo.hitch(jazz.app.currentApplication.ui, jazz.app.currentApplication.ui.startup);
    var ui = jazz.app.currentApplication.ui;
    ui.startup = function() {
        ui.get("aboveBanner").remove();
        ui.get("title").parentNode.parentNode.style = "display: none";
        ui._bannerTitle.appendChild(dojo.create("span",{innerHTML: "&nbsp;&nbsp;&nbsp;"}));
        var links = dojo.create("span", {style:"color: lightcyan; font-size: 9pt; vertical-align: middle;"});
        links.appendChild(dojo.create("a",{
            className: "custom-header-button",
            href: 'https://ibm.biz/onqportal',
            innerHTML: "OnQ Portal"
        }));
        links.appendChild(dojo.create("a",{
            className: "custom-header-button",
            href: 'http://businessanalytics1.fyre.ibm.com/',
            innerHTML: "BA Billboard"
        }));
        ui._bannerTitle.appendChild(links);
        ui._banner.style.marginTop = "-3px";
        dojo.create("link", {href: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap", rel: "stylesheet" }, document.head);
        dojo.create("style",{innerHTML: "* { font-family: 'IBM Plex Sans'} .custom-header-button { background-color: #4e4e55; padding: 3px 8px; border-radius: 4px; margin-right: 8px; } .custom-header-button:hover { background-color: #64646d; text-decoration: none !important; } .banner-icon { display: none } .jazz-ui-PageTemplate > .navbar-wrapper > .navbar .net-jazz-ajax-PageList a, .jazz-ui-PageTemplate > .navbar-wrapper > .navbar .jazz-app-CustomNavbar a { color: #8f90a2; } .jazz-ui-PageTemplate { background-color: #2a2a2e } .jazz-ui-PageTemplate > .banner .banner-title { text-shadow: none } .jazz-ui-PageTemplate > .navbar-wrapper > .navbar { background-color: #2a2a2e } .jazz-ui-PageTemplate > .banner .left, .jazz-ui-PageTemplate > .banner .left > .right, .jazz-ui-PageTemplate > .banner .left > .right > .middle { height: 32px; background: none } html body .jazz-ui-BannerSearchBox-areaInactive .SearchWrapper { background-color: #4e4e55 !important; border: 1px solid #4e4e55 !important;box-shadow: none !important; } .jazz-ui-BannerSearchBox-areaInactive .inactive input { color: #bebec9 } .jazz-ui-PageTemplate > .banner .home-button, .jazz-ui-PageTemplate > .banner .home-button:hover { background-image: none !important; width: 30px !important; height: 36px; } .jazz-ui-PageTemplate > .banner .home-button .home-menu, .jazz-ui-PageTemplate > .banner .home-button .home-menu:hover { width: 24px; background: center center / 16px 12px url(https://www.nicepng.com/png/full/41-415236_menu-menubuttom-hamburger-menu-icon-white.png) no-repeat; }"}, document.head);
        uiStartup();
    };
})();
