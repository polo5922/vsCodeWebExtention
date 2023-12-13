const pageTitle = document.head.getElementsByTagName("title")[0].innerHTML;
console.log(
  `Page title is: '${pageTitle}' - evaluated by Chrome extension's 'contentScript.js' file`
);

let insert = false;
let currentURL = window.location.href;
currentURL = currentURL.replace(".com", ".dev");

let html = `
  <style>
  a:hover {
    text-decoration: none;

  }
  </style>
  <a href="${currentURL}" target="_blank" rel="noopener noreferrer" class="" style="background: #238636;border-radius: 7px;margin-left: 9px;" aria-label="Open this file in Web Vs Code">
  <button type="button" class="types__StyledButton-sc-ws60qy-0 hBMKRG" style="border-radius: 19px;background: transparent;border: none;padding-top: 6px;padding-bottom: 6px;"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu" style="display: flex;justify-content: center;justify-items: center;gap: 5px;"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><div class="Box-sc-g0xbh4-0 bSeflH"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-code" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg></div></span><span data-component="text">Web Vs Code</span></span></button></a>`;
let DocumentGet = document.querySelector(
  "div.file-navigation.mb-3.d-flex.flex-items-start"
);
console.log("extention ", DocumentGet);

// console.log(DocumentGet, DocumentGet2);
if (!insert) {
  DocumentGet.insertAdjacentHTML("beforeend", html);
  insert = true;
}

console.log("page is fully loaded");
