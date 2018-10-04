/**
 * Tabs
 */

$(document).ready(function(){
  // set equal height for blog items
    $("#preload").animate({
      // opacity:0.25,
      height:"toggle"
    },500, function(){
      $(this).remove();
    });
    function eqHeight(){
      var $tab = $(".tabs");
      var egheightValue = $("#mainContent .card").height();
      $('#blogLink').detach()
      $("#blogContent").css("display", "block");
      console.log($("#mainContent .card").height());

      if($(window).width() <=992){
        $tab.append($('<li id="blogLink" class="tab col s2"><a href="#blogContent">Blog</a></li>'));
        $("#blogContent").css("display", "none");
      }
      if(egheightValue > 0){
        $(".blog-resum").height($("#mainContent .card").height());
      }
    }
  // set-up tabs
    $('.tabs').tabs();
    $(window).resize(eqHeight);
    eqHeight();

  });
