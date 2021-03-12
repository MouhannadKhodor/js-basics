function hover(){
    var imgs = document.querySelectorAll(".img");
for (let i = 0; i < imgs.length; i++)
  imgs[i].addEventListener('mouseover', function () {
    this.src = "images/image" + (i + 1) + "_2.jpg";
  });
}
