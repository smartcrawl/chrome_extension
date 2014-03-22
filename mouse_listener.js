function showNotification(info,tab)  
{  
	console.log(JSON.stringify(info));
	console.log(JSON.stringify(tab));
	chrome.tabs.sendRequest(tab.id,{title:"justzhl"},getToutch);
}  

var searchItem = chrome.contextMenus.create({"title": "在豆瓣上搜 '%s'", "contexts":["selection","all","page","frame"], "onclick": showNotification});


function getToutch(){
	console.log(document.title);
}

document.addEventListener("mouseup",function(){
	console.log(11);
})
