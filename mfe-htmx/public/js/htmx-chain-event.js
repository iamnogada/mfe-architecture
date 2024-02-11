(function () {
  var htmxApi;//HtmxInternalApi

  const handleErrorEvent = (eventName,error) => {
    const nextEvent = new CustomEvent(eventName, {
      detail: { message: error },
      bubbles: true, // allows the event to bubble up through the DOM
      cancelable: true // allows the event to be cancellable
    });
    window.dispatchEvent(nextEvent);
  };
  
  const handleNextEvent = (eventName)=>{
    const nextEvent = new CustomEvent(eventName, {
      detail: { message: `Publish ${eventName}` },
      bubbles: true, // allows the event to bubble up through the DOM
      cancelable: true // allows the event to be cancellable
    });
    window.dispatchEvent(nextEvent);
  }
  htmx.defineExtension('chain-event', {
    init: function (apiRef) {
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
      if (name === 'htmx:afterSettle' && evt.detail.xhr) {
        // handleNextEvent(evt);
        const value = evt.detail.elt.getAttribute('hx-publish');
        const list = value.split(/[\s,]/);
        console.log(`hx-publish:${JSON.stringify(list)}`);
        list.forEach((eventName)=>{
          handleNextEvent(eventName);
        });
        return true;
      }else if(name === 'htmx:responseError'){
        const value = evt.detail.elt.getAttribute('hx-publish-error');
        const list = value.split(/[\s,]/);
        list.forEach((eventName)=>{
          handleErrorEvent(eventName,evt.detail.error);
        });
        return true;
      }
      
      return true;
    }
  });
})();
