const header = document.getElementById("main-header");
const headerTitle = document.getElementById("header-title");
const addItems = document.getElementsByClassName("title");
let listItems = document.getElementsByClassName("list-group-item");

listItems[2].style.backgroundColor = "green";

for (i = 0; i < listItems.length; i++) {
	listItems[i].style.fontWeight = "bold";
}
