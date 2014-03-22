

origin_move = document.onmousemove;

function setDocumentTitle(){
	document.title = "justzhl";
}


chrome.extension.onRequest.addListener(function(request,sender,sendResponse){
		if (request.title = "justzhl"){
			document.title = "justzhl";
			console.log(document.title);
			sendResponse({});
		}else{
			document.title="fuck";
			n = document.createElement("div");
			n.style.width = "300px";
			n.style.height = "80px";
			n.style.backgroundColor = "#777";
			n.innerHTML = 'Title';
			n.style.left = "100px";
			n.style.top = "100px";
			n.style.position = "absolute";
			document.body.appendChild(n,document.body.children[0]);
		}
	});

function myMouseMove(ev){
	ev = ev || window.event;
	if(ev.pageX || ev.pageY){ 
		x=ev.pageX, y=ev.pageY;
	} else{
		x=ev.clientX + document.body.scrollLeft - document.body.clientLeft; 
		y=ev.clientY + document.body.scrollTop - document.body.clientTop ;
	}
	console.log(x+":"+y);
	document.onmousemove = origin_move;
	element = document.elementFromPoint(x,y);
	ans = element.nodeName;
	dom = element;
	while(dom.parentNode.nodeName != "BODY"){
		ans = dom.parentNode.nodeName + '/' + ans;
		dom = dom.parentNode;
	}
	console.log(ans+'\n'+element.outerHTML);
}


$(document).ready(function(){
	n = document.createElement("div");
	n.style.width = "300px";
	n.style.height = "80px";
	n.style.backgroundColor = "#777";
	n.innerHTML = 'Title';
	n.style.left = "100px";
	n.style.top = "100px";
	n.style.position = "absolute";
	document.body.appendChild(n,document.body.children[0]);	

	
});	

$(function(){
		$(document).bind('keyup',function(ev){
			if(ev.which = 118 ) {
				document.onmousemove = myMouseMove;
			}
		});
});





