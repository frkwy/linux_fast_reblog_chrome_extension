var injectScript;
injectScript = function(file, node) {
  var scr;
  scr = document.createElement('script');
  scr.setAttribute('type', 'text/javascript');
  scr.setAttribute('src', file);
  return document.getElementsByTagName(node)[0].appendChild(scr);
};
injectScript(chrome.extension.getURL('fastReblog.js'), 'body');
