var x = document.querySelectorAll('.trigger-input')
x.forEach(e => {
   e.addEventListener("keyup",() => {
      e.value ? e.classList.add('not-empty') : e.classList.remove('not-empty')
   })
})

var my_label = document.getElementById('message');
const auto_grow = (element) => {
   element.style.height = "5px";
   element.style.height = (element.scrollHeight+2)+"px";
   my_label.style.transform = "0px";
   my_label.style.transform = `translate(${element.scrollHeight > 28  && screen.width <= 580 ? (screen.width/2 - 45) : element.scrollHeight > 28 && screen.width > 581 ? 290-65 : 0}px, -${element.scrollHeight-10}px)`;
   my_label.style.transition = element.scrollHeight > 56 ? "transform 0s" : "transform 0.2s ease-in-out";
}



