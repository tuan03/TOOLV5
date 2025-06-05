// 
function onUrlChange() {
    if (location.href === "https://www.paypal.com/myaccount/transfer/homepage/send/success" || location.href === "https://www.paypal.com/myaccount/transfer/homepage/send/success/") {
      setTimeout(() => {
        window.location.assign("https://www.paypal.com");
      }, 300);
    }
  }
  
  (function(history) {
    const pushState = history.pushState;
    history.pushState = function(state) {
      pushState.apply(history, arguments);
      onUrlChange();
    };
  })(window.history);
  
  window.addEventListener('popstate', onUrlChange);
  
  onUrlChange();
  