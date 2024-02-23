const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


elems=document.querySelectorAll("#elem");
elem=document.getElementById("elem-container")
fixed=document.querySelector("#fixed-image")

  elems.forEach(e => {
    e.addEventListener("mouseenter",function() {
        img=e.getAttribute("data-item")
        fixed.style.background=`url(${img})`
        fixed.style.backgroundSize="cover"
        fixed.style.backgroundPosition="center"
    })
  });  


elem.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
elem.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})

loader=document.querySelector("#loader")
setTimeout(function () {
    loader.style.top="-110%"
},4000)


menu=document.querySelector("#menu")
box=document.querySelector("#menu-box")
let flag=0
menu.addEventListener("click",function () {
  if(flag == 0){
    box.style.top=0
    flag = 1
  }else{
    box.style.top="-110%"
    flag=0
  }
})


