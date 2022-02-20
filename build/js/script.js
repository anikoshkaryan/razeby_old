




//modals

$(document).on("click", ".check_in_btn_header", function(){
    $(".check_in_modal").addClass("open")
     $("body").toggleClass("hidden_body");
})

  $(document).on("click", ".modal_close", function () {
        $(".check_in_modal").removeClass("open")
        $("body").toggleClass("hidden_body");
    })

    $(document).on("click", ".place_a_bet_btn", function(){
      $(".place_a_bet_modal").addClass("open")
       $("body").toggleClass("hidden_body");
  })



    $(document).on("click", ".place_a_bet_close_wrapper", function () {
          $(".place_a_bet_modal").removeClass("open")
          $("body").toggleClass("hidden_body");
      })

    

      $(document).on("click", ".bet_cancel_btn", function () {
        $(".place_a_bet_modal").removeClass("open")
        $("body").toggleClass("hidden_body");
    })


    $(document).on("click", ".log_in_btn", function () {
      $(".sign_in_modal").addClass("open");
      $("body").toggleClass("hidden_body");
  })
    
  $(document).on("click", ".modal_close", function () {
    $(".sign_in_modal").removeClass("open");
    $("body").toggleClass("hidden_body");
})

//input_type_file

    $(document).on('change','#fileinput_form',function () {

      var value = $(this).val();
    
        var arr = value.split('\\');
    
        $(this).parent().find(".file_span").html(arr[arr.length - 1]);
    
        var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
    
        var span = $(this).parent().find(".file_span");
    
    
    
        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
    
            span.html("Невозможно загрузить формат");
    
            span.css({
                'color': '#F60000'
            });
    
            $('.hide-title').css({
                "display": "block"
            })
    
    
    
        } else {
    
            span.css({
    
                'color': "#9c9c9c"
    
            });
    
    
        $(this).parent().find(".user_info_update_name_wrapper").addClass("close");
    
    
    
        }
    
    });
  









//selects
    var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


//edit


$(document).on("focus", ".all_bets_chat", function(){
  $(this).attr('placeholder', '');
})

$(document).on("blur", ".all_bets_chat", function(){
  $(this).attr('placeholder', 'Excepteur sint occae');

})

$(document).on("click", "#second_svg_user",function(){
  $("#user_mail_input").removeAttr("readonly");
  $("#user_mail_input").focus();
 
})

$(document).on("click", "#first_svg_user",function(){
  $(".user_textarea").removeAttr("readonly");
  $('.user_textarea').focus();
})

$(document).on("click", "#third_svg_user",function(){
  $("#user_phone_input").removeAttr("readonly");
  $("#user_phone_input").focus();
})

//hamburger-menu


$(document).on("click", ".hamburger-menu", function(){
    
  $('.mobile_version').fadeToggle();



});

$(document).on("click", ".mobile_close_first", function(){

  $('.mobile_version').fadeToggle();


});


$(document).on("click", ".mobile_log_in_btn", function(){
    
  $('.mobile_version_second').fadeToggle();



});

$(document).on("click", ".mobile_close", function(){

  $('.mobile_version_second').fadeToggle();


});

$(document).on("click", ".info_about_users_item_title", function(){

  var data_id = $(this).data("id");
  $(".info_about_users_item_title").removeClass("active");
  $(this).addClass("active");
  


  $(".info_about_users_item").removeClass("open");
  $("#" + data_id).addClass("open");
})  

//sorting

$(document).on("click", ".sorting_players_title_svg_wrapper", function(){
   $(".sorting_players_wrapper").toggleClass("active");
})

$(document).on("click", ".sorting_players_hidden_div_title", function(){
  let atribute = $(this).data('name');
  // let value = $(this).data('value');
  $(this).closest(".sorting_players_wrapper").find(".sorting_players_main_title_svg_wrapper").find(".sorting_players_title").html(atribute);

  $(this).addClass("active");
 $(this).closest(".sorting_players_wrapper").removeClass("open");


})


$(document).on("click", ".players_sorting_item_chat_btn", function(){
     $(".players_chat_wrapper").toggleClass("open");
     $(".players_sorting_item_chat_btn_wrapper").addClass("close");
})
$(document).on("click", ".players_chat_titles_icon_", function(){
  $(".players_sorting_item_chat_btn_wrapper").removeClass("close");
  $(".players_chat_wrapper").removeClass("open");
})


$(document).on("change", "#accept_bet_input", function(){
  $(this).parent("accept_bets_modal_checkbox_wrapper").find(".accept_bet_input_label").toggleClass("active");


});

$(document).on("click", ".accept_bet_btn_wrapper",function(){
   $(".accept_bets_modal").addClass("open");
   $("body").toggleClass("hidden_body");
})

$(document).on("click", ".accept_bets_modal_close",function(){
  $(".accept_bets_modal").removeClass("open");
  $("body").toggleClass("hidden_body");
})

// var myDropzone =new Dropzone("div#myUploader", {
//       url:"upload-target",
//       // more configs here
//   });
 
   
$(document).on("click", ".all_bets_timer_add_evidence_btn",function(){
   $(".add_evidence_modal").addClass("open");
   $("body").toggleClass("hidden_body");
})


$(document).on("click", ".add_evidence_modal_close",function(){
  $(".add_evidence_modal").removeClass("open");
  $("body").removeClass("hidden_body");
})




$(document).on("click", ".all_bets_titles_item", function(){

  var data_id = $(this).data("id");
  $(".all_bets_titles_item").removeClass("active");
  $(this).addClass("active");
  


  $(".all_bets_user_item").removeClass("open");
  $("#" + data_id).addClass("open");
})  