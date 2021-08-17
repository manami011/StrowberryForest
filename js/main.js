"use strict";

// 予約ページ
{

  const menuItems = document.querySelectorAll(".main_content .menu .selection");
  const contents = document.querySelectorAll(".str_container");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {

      menuItems.forEach(item => {
        item.classList.remove("active");
      });
      item.classList.add("active");

      contents.forEach(content => {
        content.classList.remove("active");
      });

      document.getElementById(item.dataset.id).classList.add("active");
    });
  });

}

{
  // スライドショー
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const ul = document.querySelector(".slider .img_container ul");
    // const texts = document.querySelectorAll(".img_text ul li");　コメント

    // const slides = ul.children;

    // const dots = [];
    // let currentIndex = 0;

    // function setupDots(){
    //   for (let i = 0; i < slides.length; i++){
    //     const button = document.createElement("button");
    //     button.addEventListener("click", () => {
    //       currentIndex = i;
    //       updateDots();
    //       moveSlides();
    //       setupText();
    //     });
    //     dots.push(button);
    //     document.querySelector(".slide_1").appendChild(button);
    //   }
    //   dots[0].classList.add("current");
    // }
  
    // function updateDots(){
    //   dots.forEach(dot => {
    //     dot.classList.remove("current");
    //   });
    //   dots[currentIndex].classList.add("current");
    // }

    // setupDots();
    // setupText();

    //ここからコメント
    // function setupText(){
    //   texts.forEach(t => {
    //     t.classList.add("hidden");
    //     console.log(`${t}`);
    //   });

    //   texts[currentIndex].classList.remove("hidden");
    // }
    //ここまで

    // function moveSlides(){
    //   const slideWidth = slides[0].getBoundingClientRect().width;
    //   ul.style.transform = `translateX(${slideWidth * currentIndex}px)`;
      
    // }

    // next.addEventListener("click", () => {
    //   currentIndex--;
    //   if (currentIndex === -1){
    //     currentIndex = 3
    //   }
    //   updateDots();
    //   moveSlides();
    //   setupText();
    // });
    
    // prev.addEventListener("click", () => {
    //   currentIndex++;
    //   if (currentIndex === 4){
    //     currentIndex = 0
    //   }
    //   updateDots();
    //   moveSlides();
    //   setupText();
    //   console.log(`currentIndex++:${currentIndex}`);
    // });

    // window.addEventListener("resize", () => {
    //   moveSlides();
    // });

}

//スライドショー　Slick
{
  $(".picking_slide_image_conteiner").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $(".top_slider_left").slick({
    dots:true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $(".right_contents").slick({
    dots:true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  // currentText();

  console.log($(".cafe_slide_image_conteiner").slick('slickCurrentSlide'));

  // function currentText(){
  //   const index = $(".cafe_slide_image_conteiner").slick('slickCurrentSlide');
  //   switch ("index"){
  //     case 0:
  //       console.log("index = 0");
  //       break;
  //     case 1:
  //       console.log("index = 1");
  //       break;
  //     case 2:
  //       console.log("index = 2");
  //       break;
  //     case 3:
  //       console.log("index = 3");
  //       break;
  //   }
  // }
}

//ナビゲーションバー
{
const nav = document.querySelector("nav");
const lists = nav.children;

console.log(`リスト：${lists}`);

// navCurrentPage();

// function navCurrentPage(){

//   for(let i = 0; i < lists.length; i++){
//     lists [i].addEventListener("click", () => {
//       lists[i].classList.remove("currentPage");
//       document.getElementById(`${lists[i].id}`).classList.add("currentPage");
//     });
//   }

  // lists.forEach(list => {
  //   list.addEventListener("click", () => {

  //   lists.forEach(list => {
  //     list.classList.remove("currentPage");
  //   });

  //     list.classList.add("currentPage");
  //     // const list_id = list.id;
  //     console.log("クリックしたよ！");
  //   });
  // });
// }



}

