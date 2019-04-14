function addToList() {

    var text = document.getElementById("textBox").value;

    //Alerts if user doesn't filled field
    if (text==="") {
      //Call alert
      alert("Please Fill Field");
      //Focus back to field
      document.getElementById("textBox").focus();
    }

    else {
      //Variable for new h1 element
      var newItem = document.createElement("p");

      newItem.setAttribute("id", "newListItem");
      //Add users text to h1
      newItem.innerHTML = text;
      //Adds new h1 elements to checklist div
      document.getElementById("checkList").appendChild(newItem);
      //Function that removes list item when item is clicked
        newItem.onclick = function() {
          this.parentNode.removeChild(this);
      }
      //Focus back to field
      document.getElementById("textBox").focus();
      //Clears field
      document.getElementById("textBox").value = '';
  }
}

function clearList(){
  //Clears checklist div
  document.getElementById("checkList").innerHTML = "";
  //Focus back to field
  document.getElementById("textBox").focus();
}

document.addEventListener("click", checkEmpty);

function checkEmpty(){
  if (document.getElementById("checkList").innerHTML === "") {
    document.getElementById("listHeader").style.display = "none";
    document.getElementById("buttonClear").style.display = "none";
  }
  else {
    document.getElementById("listHeader").style.display = "block";
    document.getElementById("buttonClear").style.display = "block";
  }
}
