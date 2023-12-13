browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    console.log("page is fully loaded");
    console.log(tabId);
    await browser.scripting.executeScript({
      target: { tabId: tabId },
      func: () => {
        document.body.style.border = "5px solid red";
      },
    });
    await browser.scripting.executeScript({
      target: { tabId: tabId },
      files: ["./contentScript.js"],
    });
  }
});
