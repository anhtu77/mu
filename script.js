document.addEventListener("DOMContentLoaded", function () {
  let currentImageIndex = 0;
  const images = document.querySelectorAll("#slider .slideshow img");
  
  function showImage(index) {
      images[currentImageIndex].style.display = "none";
      images[index].style.display = "block";
      currentImageIndex = index;
  }

  function nextImage() {
      const newIndex = (currentImageIndex + 1) % images.length;
      showImage(newIndex);
  }

  setInterval(nextImage, 1500); 

  showImage(currentImageIndex);
});

// chon 1 bien trong tất cả các biến
const buyBtns = document.querySelectorAll('.js-buy-ticket')
// chỉ có 1 biến thì dùng queryselector
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

// Hàm hiện thị modal mua vé (thêm class open vào modal)
function showBuyTickets(){
    modal.classList.add('open')

}
// Hàm ẩn modal mua vé (gỡ bỏ class open vào modal)
function hideBuyTickets(){
    modal.classList.remove('open')

}
// Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTickets)
}
// Nghe hành vi click vào button close 
modalClose.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)
//  Ngăn chặn sự nổi bọt 
modalContainer.addEventListener('click',function (even) {
    even.stopPropagation()

})




var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
// gán headerHeight = chiều cao của header
var headerHeight = header.clientHeight;

// dong mo mobile menu
mobileMenu.onclick = function() {
    
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';

    } else {
        header.style.height = null;
    }
}


// tự động đóng khi chọn menu

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    // nếu mà có ace lien kề và ace liền kề đó có clss là subnav thì cta bt đc là menu cha 
            
 menuItem.onclick = function(event) {
        var isParenMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
        if (isParenMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}

