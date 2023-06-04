// browser.contextMenus.create({
// 	id: "cheat",
// 	title: "Answer ~3 questions (30 mins)"
// });

browser.browserAction.onClicked.addListener((info, tab) => {
  	// if (info.menuItemId === "cheat") {
    	browser.tabs.executeScript({
      		file: "ixlCheat.js"
    	});
  	// }
});
