

var deleteButton = document.getElementsByClassName("close");

let ul = document.getElementById('ul');

let done = document.getElementById('TodoDone');

let button = document.getElementById('submit');

let voice = new Audio();
voice.src = "small_message_tone.mp3";
let cat_voice = new Audio();
cat_voice.src = "cat_sms.mp3";

function createNewElement(){
  var input = document.createElement("input");
  input.type = "checkbox";
  input.setAttribute('name','check');
  var li = document.createElement('li');
  li.setAttribute('class','LiClass');


  li.appendChild(input);
    var theInputValue = document.getElementById("Task").value;
    var textNode = document.createTextNode(theInputValue);
     li.appendChild(textNode);

    if(theInputValue === ''){
        alert("Input can not be empty");
    }
    else {
        ul.appendChild(li);
    }
    document.getElementById("Task").value = "";

    var theDeleteButton = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    theDeleteButton.className = "close";
    theDeleteButton.appendChild(txt);
    theDeleteButton.style.color = "red";
    li.appendChild(theDeleteButton);

    // deleting
    for(let i=0;i<deleteButton.length ; i++){
      deleteButton[i].onclick = function(){
          var theDiv = this.parentElement;
          theDiv.style.display = "red";
          theDiv.style.display = "none";
      }
  }



    var element = document.querySelector("input[name = check]");

var checkedItem = function(){
  var element = document.querySelector("input[name = check]");
   if(this.checked){
      console.log("In the function");
       var div = this.parentElement;
       div.style.textDecoration = 'line-through';
       div.style.color = 'green';
        done.appendChild(div);
        voice.play();
        for(let i=0;i<deleteButton.length ; i++){
          deleteButton[i].onclick = function(){
              var theDiv = this.parentElement;
              theDiv.style.display = "none";
          }
      }

  }
  else{

    var div = this.parentElement;
    div.style.textDecoration = 'none';
    div.style.color = 'black';
    cat_voice.play();
    for(let i=0;i<deleteButton.length ; i++){
      deleteButton[i].onclick = function(){
          var theDiv = this.parentElement;
          theDiv.style.display = "none";
      }
  }
    ul.appendChild(div);
  }
}
input.addEventListener('change', checkedItem);
ul.appendChild(li);

}
button.addEventListener('click', createNewElement);
