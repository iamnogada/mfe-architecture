/* eslint-disable no-undef */
(function () {
  // eslint-disable-next-line no-unused-vars
  var htmxApi;//HtmxInternalApi

  function handleErrorEvent (eventName,error){
    console.log('==== Error Event:' + eventName + ' Error:' + error);
    // var nextEvent = document.createEvent('CustomEvent');
    // nextEvent.initCustomEvent(eventName, true, true, { message: error });
    const evt = new CustomEvent(eventName, { detail: { message: error } });
    window.dispatchEvent(evt);
  };
  
  function handleNextEvent (eventName){
    // var nextEvent = document.createEvent('CustomEvent');
    // nextEvent.initCustomEvent(eventName, true, true, { message: "Publish " + eventName });
    console.log('==== Next Event:' + eventName);
    const evt = new CustomEvent(eventName, { detail: { message: "Publish " + eventName } });
    window.dispatchEvent(evt);
  }
  htmx.defineExtension('chain-event', {
    init: function (apiRef) {
      console.log('==== chain-event init');
      htmxApi = apiRef;
      if (htmx.config.responseTargetUnsetsError === undefined) {
        htmx.config.responseTargetUnsetsError = true;
      }
      if (htmx.config.responseTargetSetsError === undefined) {
        htmx.config.responseTargetSetsError = false;
      }
      if (htmx.config.responseTargetPrefersExisting === undefined) {
        htmx.config.responseTargetPrefersExisting = false;
      }
      if (htmx.config.responseTargetPrefersRetargetHeader === undefined) {
        htmx.config.responseTargetPrefersRetargetHeader = true;
      }
    },
    onEvent: function (name, evt) {
      var value,list
      if (name === 'htmx:afterRequest' && evt.detail.xhr && evt.detail.xhr.status >= 200) {
        console.log('==== chain-event htmx:afterRequest');
        value = evt.detail.elt.getAttribute('hx-publish') || "";
        list = value.split(/[\s,]/);
        list.forEach((eventName)=>{
          handleNextEvent(eventName);
        });
        return true;
      }else if(name === 'htmx:responseError'){
        value = evt.detail.elt.getAttribute('hx-publish-error') || "";
        list = value.split(/[\s,]/);
        list.forEach((eventName)=>{
          handleErrorEvent(eventName,evt.detail.error);
        });
        return true;
      }
      
      return true;
    }
  });
})();
