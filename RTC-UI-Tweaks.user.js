// ==UserScript==
// @name         RTC-UI-Tweaks
// @namespace    RTC-UI-Tweaks
// @version      0.1
// @description  My personal hacks to the RTC Web UI to improve my workflow.
// @author       Rob Retchless
// @match        https://bajazz05.canlab.ibm.com:9750/ccm/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function() {
        jazz.app.currentApplication.ui.get("aboveBanner").remove();
        jazz.app.currentApplication.ui.get("title").parentNode.parentNode.style = "display: none";
        jazz.app.currentApplication.ui._bannerTitle.appendChild(dojo.create("span",{innerHTML: "&nbsp;&nbsp;>&nbsp;&nbsp;"}));
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
        jazz.app.currentApplication.ui._bannerTitle.appendChild(links);
    },1000);
})();