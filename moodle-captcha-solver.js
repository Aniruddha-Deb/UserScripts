// ==UserScript==
// @name         Moodle Captcha Solver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Autologin for Moodle
// @author       Sensei
// @match        https://moodle.iitd.ac.in/login/index.php
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var problem = document.getElementById("login").innerText.split("\n")[3];
    var words = problem.match(/\b(\w+)\b/g);

    var ans = 0;

    if (problem.includes("add")) {
        ans = parseInt(words[2]) + parseInt(words[3]);
    }
    else if (problem.includes("subtract")) {
        ans = parseInt(words[2]) - parseInt(words[3]);
    }
    else if (problem.includes("first")) {
        ans = parseInt(words[4]);
    }
    else if (problem.includes("second")) {
        ans = parseInt(words[5]);
    }

    document.getElementById("valuepkg3").value = ans;
    document.getElementById("loginbtn").click();
})();
