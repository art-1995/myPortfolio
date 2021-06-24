$(document).ready(function () {

  $(".fullpage").fullpage({
    navigation: false,
    navigationPosition: 'right',
    anchors: ['section1', 'section2', 'section3', 'section4'],

    // navigationTooltips: [        
    //   "test",
    //   "test2",
    //   "test3",
    //   'test4'        
    // ],
    loopHorizontal: false,

    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'top',
    keyboardScrolling: true,

    onLeave: function (origin, destination, direction) {
      var leavingSection = this;

      if (destination.index == 1) {
        $(".ability-bar1").addClass("bar1");
        $(".ability-bar2").addClass("bar2");
        $(".ability-bar3").addClass("bar3");
        $(".ability-bar4").addClass("bar4");
        $(".ability-bar5").addClass("bar5");
      }

    }
    

  });

  /*흐르는 글씨*/
  $(".img-box2").mouseover(function () {
    $(".img-list2").addClass("animation-pause");
    $(this).find(".white").addClass("active");
    $(this).find(".hover").addClass("active");
    var bg_data = $(this).attr("bg-data");
    console.log(bg_data);
    $(".wrap").addClass(bg_data);
  });

  $(".img-box2").mouseleave(function () {
    $(".img-list2").removeClass("animation-pause");
    $(this).find(".white").removeClass("active");
    $(this).find(".hover").removeClass("active");
    var bg_data = $(this).attr("bg-data");
    console.log(bg_data);
    $(".wrap").removeClass(bg_data);
  });

  /*about swiper*/
  var swiper = new Swiper(".swiper-container1", {
    direction: "vertical",
    autoplay: {
      delay: 1500,
    },
    loop: true,

  });

  $(".section3 .art-img img").click(function(){
    console.log ('fdf')
    var image = $(this).attr('src');
    $(".section3 .click-bg").addClass("active");
    $(".section3 .click-bg img").attr('src',image);
  });
  $(".section3 .click-bg").click(function(){
    $(".section3 .click-bg").removeClass("active");
  });



});