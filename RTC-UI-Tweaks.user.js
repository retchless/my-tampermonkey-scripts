// ==UserScript==
// @name         RTC-UI-Tweaks
// @namespace    RTC-UI-Tweaks
// @version      0.2
// @description  My personal hacks to the RTC Web UI to improve my workflow.
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
        ui._bannerTitle.appendChild(dojo.create("span",{innerHTML: "&nbsp;&nbsp;>&nbsp;&nbsp;"}));
        var links = dojo.create("span", {style:"color: lightcyan; font-size: 9pt; vertical-align: middle;"});
        links.appendChild(dojo.create("a",{
            style:"text-decoration: underline",
            href: 'https://bajazz05.canlab.ibm.com:9750/ccm/web/projects/Business%20Intelligence#action=com.ibm.team.workitem.runSavedQuery&id=_V-cHAK8SEeebeO4pd0l5xg',
            innerHTML: "Toolkit Open Defects"
        }));
        links.appendChild(dojo.create("span",{innerHTML:"&nbsp;&nbsp;|&nbsp;&nbsp;"}));
        links.appendChild(dojo.create("a",{
            style:"text-decoration: underline",
            href: 'https://bajazz05.canlab.ibm.com:9750/ccm/web/projects/Business%20Intelligence#action=com.ibm.team.dashboard.viewDashboard&team=Cognos%20Analytics/Common%20Components',
            innerHTML: "Toolkit Dashboard"
        }));
        ui._bannerTitle.appendChild(links);
        ui._banner.style.marginTop = "-3px";
        uiStartup();
    };
})();
