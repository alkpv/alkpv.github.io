// The load-in animation plays the first time a visitor sees a page, and on
// reload. CSS gates it on a data-intro attribute on <html>.

export const introAttribute = "data-intro";
export const seenKeyPrefix = "seen:";

// Runs while the HTML is parsed, so a page that was already seen never paints
// its starting state. If storage is blocked, the page simply animates.
export const introScript = `(function(){try{var p=location.pathname.replace(/\\/$/,"")||"/";if(localStorage.getItem("${seenKeyPrefix}"+p)&&performance.getEntriesByType("navigation")[0].type!=="reload")return}catch(e){}document.documentElement.setAttribute("${introAttribute}","")})()`;
