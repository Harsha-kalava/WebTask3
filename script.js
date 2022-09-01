const header = document.getElementById("main-header");
const headerTitle = document.getElementById("header-title");
const addItems = document.getElementsByClassName("title");
let secondItem = document.querySelector(".list-group-item:nth-child(2)");
let thirdItem = document.querySelector(".list-group-item:nth-child(3)");

secondItem.style.backgroundColor = "green";
// thirdItem.style.visibility = "hidden";
thirdItem.style.display = "none";
