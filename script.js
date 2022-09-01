const header = document.getElementById("main-header");
const headerTitle = document.getElementById("header-title");
const addItems = document.getElementsByClassName("title");
let listItems = document.getElementsByClassName("list-group-item");
let taglistItems = document.getElementsByTagName("li");

for (i = 0; i < listItems.length; i++) {
	listItems[i].style.fontWeight = "bold";
}

for (i = 0; i < taglistItems.length; i++) {
	taglistItems[i].style.backgroundColor = "#f4f4f4";
}
