// ==UserScript==
// @name         RTC-UI-Tweaks
// @namespace    RTC-UI-Tweaks
// @version      0.12
// @description  Hacks to the RTC Web UI to improve my workflow and stop my eyes from bleeding.
// @author       Rob Retchless
// @match        https://bajazz05.canlab.ibm.com:9750/*
// @resource     customCSS RTC-UI-Tweaks.user.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @downloadURL  https://github.com/retchless/my-tampermonkey-scripts/raw/master/RTC-UI-Tweaks.user.js
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(GM_getResourceText ("customCSS"));
    dojo.create("link", {href: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap", rel: "stylesheet" }, document.head);
    if (jazz && jazz.app) {
        var ui = jazz.app.currentApplication.ui;
        var uiStartup = dojo.hitch(ui, ui.startup);
        ui.startup = function() {
            ui.get("aboveBanner").remove();
            ui.get("title").parentNode.parentNode.style = "display: none";
            ui._bannerTitle.appendChild(dojo.create("span",{innerHTML: "&nbsp;&nbsp;&nbsp;"}));
            var links = dojo.create("span", {className: "custom-header-buttons"});
            links.appendChild(dojo.create("a",{
                className: "custom-header-button",
                href: 'https://ibm.biz/onqportal',
                innerHTML: "OnQ Portal",
                target: "onq"
            }));
            links.appendChild(dojo.create("a",{
                className: "custom-header-button",
                href: 'http://businessanalytics1.fyre.ibm.com/',
                innerHTML: "BA Billboard",
                target: "billboard"
            }));
            ui._bannerTitle.parentNode.insertBefore(links,ui._bannerLeft);
            ui._banner.style.marginTop = "-3px";
            uiStartup();
        };
    }
})();
