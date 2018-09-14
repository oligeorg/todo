var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(input.value));
	li.appendChild(p);
	p.addEventListener("click", toggleDone);
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("-"));
	btn.addEventListener("click", removeItem);
	li.appendChild(btn);
}

function addListAfterClick() {
	if (inputLength() > 0 && inputLength() <= 32) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(e) {
	if (e.target.tagName === "P") {
		e.target.classList.toggle("done");
	}	
}

function removeItem(e) {
	var listItem = e.target.parentNode;
	if (e.target.tagName === "BUTTON") {
		listItem.parentNode.removeChild(listItem);
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);