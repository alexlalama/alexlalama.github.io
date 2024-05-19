var acc;
var k;
acc = document.getElementsByClassName("accordion");

for (k = 0; k < acc.length; k++) {
  acc[k].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
        console.log('here');
    } else {
        panel.style.display = "block";
        console.log('here2');
    }
  });
}

var nodeList = document.getElementsByTagName("LI");
var j;
for (j = 0; j < nodeList.length; j++)
    {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        nodeList[j].appendChild(span);
    }


var close = document.getElementsByClassName("close");
var a;
for (a = 0; a < close.length; a++)
    {
        close[a].onClick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
},false);

function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue ==='')
        {
            alert("Please write something");
        }else{
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("input").value = "";
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        for(a = 0 ; a < close.length; a++)
            {
                close[a].onclick = function(){
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }

    }