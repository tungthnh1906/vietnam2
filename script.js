function upDate(previewPic) {
  console.log("Sự kiện di chuột được kích hoạt!");
  console.log("Alt:", previewPic.alt);
  console.log("Source:", previewPic.src);

  let display = document.getElementById('image');
  display.style.backgroundImage = "url('" + previewPic.src + "')";
  display.innerHTML = previewPic.alt;
}

function unDo() {
  console.log("Rời chuột khỏi hình ảnh");
  let display = document.getElementById('image');
  display.style.backgroundImage = "url('')";
  display.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
