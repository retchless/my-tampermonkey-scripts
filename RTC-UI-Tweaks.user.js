// ==UserScript==
// @name         RTC-UI-Tweaks
// @namespace    RTC-UI-Tweaks
// @version      0.17
// @description  Hacks to the RTC Web UI to improve my workflow and stop my eyes from bleeding.
// @author       Rob Retchless
// @match        https://bajazz05.canlab.ibm.com:9750/*
// @match        https://bajazz04.canlab.ibm.com:9725/*
// @resource     customCSS RTC-UI-Tweaks.user.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @downloadURL  https://github.com/retchless/my-tampermonkey-scripts/raw/master/RTC-UI-Tweaks.user.js
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(GM_getResourceText ("customCSS"));
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap');
    document.head.appendChild(link);
    
    if (jazz && jazz.app) {
        var ui = jazz.app.currentApplication.ui;
        var uiStartup = dojo.hitch(ui, ui.startup);
        ui.startup = function() {
            ui.get("_aboveBannerNode").remove();
            ui.get("title").parentNode.parentNode.style = "display: none";
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
            
            if (location.href.indexOf("bajazz04")>=0) {
                links.appendChild(dojo.create("a",{
                    className: "custom-header-button",
                    href: 'https://bajazz05.canlab.ibm.com:9750/ccm/web/projects/Business%20Intelligence',
                    innerHTML: "BI Project"
                }));
            } else {
                links.appendChild(dojo.create("a",{
                    className: "custom-header-button",
                    href: 'https://bajazz04.canlab.ibm.com:9725/ccm/web/projects/SCCA%20Cognos%20BI',
                    innerHTML: "BI APARs Project"
                }));
            }

            ui._bannerTitle.parentNode.insertBefore(links,ui._bannerLeft);
            ui._banner.style.marginTop = "-3px";
            uiStartup();
        };
    }
})();
