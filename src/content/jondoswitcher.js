const {classes: Cc, interfaces: Ci, utils: Cu, results: Cr} = Components;
Cu.import('resource://gre/modules/Services.jsm');
Cu.import("resource://jondoswitcher/content/jondo-singletons.js");
var windowMediator = Cc["@mozilla.org/appshell/window-mediator;1"].getService(Ci.nsIWindowMediator);
let prefsService = Cc["@mozilla.org/preferences-service;1"].getService(Ci.nsIPrefService);

var checkProxyTimerObj = null;

// add onload listener
window.addEventListener("load", function jondo_onload() {
    // remove onload event listener
    window.removeEventListener("load", jondo_onload, false);

    // initialize JonDoSwitcher
    JonDoSwitcher.init();
    checkProxyTimerObj = setInterval(checkProxy, 1000);

    // add event listeners for messages
    window.addEventListener("Jondo-Security-Level", JonDoNetworkIntercepter.setSecurityLevel, false);
    window.addEventListener("Jondo-New-Identity", sendSwitchCascadeCommand, false);
}, false);

// add onunload listener
window.addEventListener("unload", function jondo_onunload() {
    // remove onload event listener
    window.removeEventListener("unload", jondo_onunload, false);

    // remove event listeners for messages
    window.removeEventListener("Jondo-Security-Level", JonDoNetworkIntercepter.setSecurityLevel, false);
    window.removeEventListener("Jondo-New-Identity", sendSwitchCascadeCommand, false);
}, false);



// check which proxy is used once every 1 second
function checkProxy(){
    var proxy = JonDoSwitcher.getProxy();
    if(proxy == "JonDo"){
        window.top.document.getElementById("enableJonDo").style.display = "none";
        window.top.document.getElementById("jondo-switcher-message").value = JonDoSwitcher.stringsBundle.GetStringFromName("connectedToJondo") + "   ";
        // start socket connecting
        JonDoCommunicator.startSocketConnecting();
    }else if(proxy == "Tor"){
        window.top.document.getElementById("enableTor").style.display = "none";
        window.top.document.getElementById("jondo-switcher-message").value = JonDoSwitcher.stringsBundle.GetStringFromName("connectedToTor") + "   ";        
    }else if(proxy == "Direct"){
        window.top.document.getElementById("disableAllProxies").style.display = "none";
        window.top.document.getElementById("jondo-switcher-message").value = JonDoSwitcher.stringsBundle.GetStringFromName("connectedDirectly") + "   ";        
    }
    if(proxy != "Unknown"){
        clearInterval(checkProxyTimerObj);
        checkProxyTimerObj = null;
        // show survey info if not done already
        showSurveyInfo();
    }
}


// UI responses
var enableJonDo = () => {JonDoSwitcher.enableJonDo();};
var enableTor = () => {JonDoSwitcher.enableTor();};
var disableAllProxies = () => {JonDoSwitcher.disableAllProxies();};
var sendSwitchCascadeCommand = () => {
    try{
        if(windowMediator.getMostRecentWindow("navigator:browser") == window){
            JonDoCommunicator.sendSwitchCascadeCommand();
        }else{
            console.log("not current window");
        }
    }catch(e){
        console.log(e);
    }
}

function showSurveyInfo(){
    var shouldShowSurveyInfo = false;

    // check if survey has not been done
    try{
        if(prefsService){
            let prefsBranch = prefsService.getBranch("extensions.jondoswitcher.");
            if(prefsBranch){
                shouldShowSurveyInfo = prefsBranch.getBoolPref("show_survey_info");
            }
        }
    }catch(e){
        console.log(e);
    }
    console.log("jondoswitcher survey : " + shouldShowSurveyInfo);

    if(!shouldShowSurveyInfo){
        return;
    }

    try{
        const kNotificationName = "jondofox-survey-notification";
        // get the notificationbox that persists all tabs
        let box = window.top.document.getElementById("high-priority-global-notificationbox");
        // check if migrate notificationbox is already present
        if (box.getNotificationWithValue(kNotificationName))
          return;
        
        // get necessary localized strings
        let message = JonDoSwitcher.stringsBundle.GetStringFromName("survey.message");
        let button_url = JonDoSwitcher.stringsBundle.GetStringFromName("survey.url");
        let button_label = JonDoSwitcher.stringsBundle.GetStringFromName("survey.buttonText");

        let buttons = [{
          label: button_label,
          accessKey: 'K',
          popup: null,
          callback:
            function() {
              // open browser download url in a new tab
              var windowMediator = Cc["@mozilla.org/appshell/window-mediator;1"].getService(Ci.nsIWindowMediator);
              var recentWindow = windowMediator.getMostRecentWindow("navigator:browser");
              recentWindow.delayedOpenTab(button_url, null, null, null, null);
              // check if survey has not been done
              try{
                if(prefsService){
                    let prefsBranch = prefsService.getBranch("extensions.jondoswitcher.");
                    if(prefsBranch){
                        prefsBranch.setBoolPref("show_survey_info", false);
                    }
                }
              }catch(e){
                console.log(e);
              }
            }
        }];

        var notification = box.appendNotification(message, kNotificationName, null, box.PRIORITY_INFO_HIGH, buttons);
        notification.style.backgroundColor = "#cfe5f3";
        notification.style.borderColor = "#a0b9cf";
    }catch(e){
        console.log(e);
    }
}