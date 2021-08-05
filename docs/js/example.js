// ADD NEW ITEM TO END OF LIST
var l4 = document.getElementById("four");
l4.insertAdjacentHTML("afterend", "<li>cream</li>");

// ADD NEW ITEM START OF LIST
var l1 = document.getElementById("one");
l1.insertAdjacentHTML("beforebegin", "<li>kale</li>");

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listElements = document.getElementsByTagName("li");
for(var i = 0; i < listElements.length; i++)
{
    listElements[i].className += "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var header = document.getElementsByTagName("h2");
header[0].insertAdjacentHTML("beforeend", "<span>6</span>")
