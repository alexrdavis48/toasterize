

window.onload = function() {
	var div = document.createElement("div");
	div.id = "toast-col";
	document.body.appendChild(div);
};

var count = 0;

var toast = function(type, message) {

	if(type == "" || message == "") {
		console.log("toast(type, message) function requires 2 arguments!");
	}
	else {

		var c = count; 
		count++;
		var icon = "";
		var bgColor = "";

		if(type == "danger") {
			icon = "fa-times-circle";
			bgColor = "red";
		}
		else if(type == "success") {
			icon = "fa-check-circle";
			bgColor = "green"
		}
		else if(type == "warning") {
			icon = "fa-exclamation-triangle";
			bgColor = "yellow";
		}
		else if(type == "info") {
			icon = "fa-info-circle";
			bgColor = "blue";
		}
		else if(type == "default") {
			icon = "fa-exclamation-circle";
			bgColor = "grey";
		}
		else {
			console.log("Type is not valid!");
		}

		var el = document.getElementById("toast-col");
		var outerDiv = document.createElement("div");
		var innerDiv = document.createElement("div");
		var iconDiv = document.createElement("div");
		var contentDiv = document.createElement("div");
		var i = document.createElement("i");
		var x = document.createElement("i");
		var p = document.createElement("p");
		var btn = document.createElement("button");

		btn.onclick= function() { 
			var el = document.getElementById("toast-col");
			var child = document.getElementById(c);
			el.removeChild(child);
		}
		
		outerDiv.className ="toast-msg " + bgColor;
		outerDiv.id= c;
		innerDiv.className ="toast-container";
		iconDiv.className ="icon";
		contentDiv.className ="content";
		i.className="fa " + icon;
		x.className= "fa fa-times";
		p.appendChild(document.createTextNode(message));

		btn.appendChild(x);
		contentDiv.appendChild(p);
		iconDiv.appendChild(i);
		innerDiv.appendChild(btn);
		innerDiv.appendChild(iconDiv);
		innerDiv.appendChild(contentDiv);
		outerDiv.appendChild(innerDiv);
		el.appendChild(outerDiv);

		setTimeout(function() { 
			var el = document.getElementById("toast-col");
			var child = document.getElementById(c);
			el.removeChild(child);
		}, 4900);		
	}	
};