const header = document.getElementById("main-header");
const headerTitle = document.getElementById("header-title");
const addItems = document.getElementsByClassName("title");
let item = document.querySelectorAll("li:nth-child(2)");

item[0].style.color = "green";

odd = document.querySelectorAll("li:nth-child(odd)");

for (i = 0; i < odd.length; i++) {
	odd[i].style.backgroundColor = "green";
}
