//collapseable portfolio section
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function change_text() {
    var x = document.getElementById("col");
    if (x.innerHTML === '<span class="glow">Click To Open Portfolio</span>') {
      x.innerHTML = '<span class="glow">Click To Close Portfolio</span>';
    } else {
      x.innerHTML = '<span class="glow">Click To Open Portfolio</span>';
    }
  }


  
 
  