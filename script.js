var user_ip= "";
var currency_symbol="";
var bg_array = ['F44336', '009688', '3F51B5','4CAF50','2196F3'];
$( document ).ready(function() {
    
     $.ajax({

        url: 'https://api.ipify.org/?format=json',

        success: function(data) {

            console.log(data);
            user_ip=data.ip;
            //alert(user_ip);
          }

    })

      $.ajax({

        url: 'https://api.astroip.co/'+user_ip+'?api_key=24e33ad1-6fde-439d-b7f0-5c61cd5e0cdf',

        success: function(data) {

            console.log(data);
            currency_symbol = data.currency.symbol;
            //alert(currency_symbol);
          }

    })

    $("#refresh").click(function(){
      $('.input_form').show();
      $('#refresh').hide();
      $('#welcome_img').hide();
      $('.welcome_msg').hide();
   });

  $(".close").click(function(){
      $('.input_form').hide();
      $('#refresh').show();
   });

   $(".edit_details").click(function(){
      $('.input_form').show();
      
   });
});

$(document).ready(function(){
    var maxField = 100; //Input fields increment limitation
    var addButton = $('.add_button'); //Add button selector
    var wrapper = $('.field_wrapper'); //Input field wrapper
    var fieldHTML = '<div class="mdl-textfield mdl-js-textfield"><input class="added_fields mdl-textfield__input" placeholder="Person name.." autocomplete="off" type="text" name="field_name[]"><i class="remove_button material-icons">close</i></div>'; //New input field html 
    var x = 1; //Initial field counter is 1
    
    //Once add button is clicked
    $(addButton).click(function(){
        //Check maximum number of input fields
        if(x < maxField){ 
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });
    
    //Once remove button is clicked
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });

});

function abc(){
  var names = $("input[class='added_fields mdl-textfield__input']").map(function(){return $(this).val().trim();}).get();
  /*alert(names);*/
  var total_amount = $("#total_amount").val().trim();
  var total_people = names.length;
  /*alert(total_amount);
  alert(total_people);*/

  if(names.includes("")){
    alert("Please provide names in all fields")
  }else{

    var splited = split(total_amount,total_people,5);
  
  $(".splited_amount").html("");

  for (var i=0;i<=total_people-1;i++) {

    var bgcolor = bg_array[Math.floor(Math.random() * bg_array.length)];

      $('.splited_amount').append("<div class='devided'><img src='"+"https://ui-avatars.com/api/?color=fff&rounded=true&size=128&background="+bgcolor+"&name="+names[i]+"'>"+"<div class='name_amount'>"+names[i]+"<br>"+currency_symbol+splited[i]+"</div>"+"</div>");
  }

  var place = $('#place').val().trim();
  $(".place_name").html('<i class="material-icons">room</i></div>'+place);
  $(".receipt-value").html(currency_symbol+total_amount);
  $(".receipt").css("display","block");
  $(".input_form").css("display","none");
  $(".after_split").css("display","block");
  }
  

}

function split(number, sections, min) {
    var ary = [];
    var i = 0;
    while ( number >= 0 ) {
        if (!ary[i % sections]) ary[i % sections] = 0;
        if ( number >= min ) {
           number -= min;
           ary[i % sections] += min;
           min++;
        } else {
            ary[i % sections] += number;
            break;
        }
        // Randomize here
        if (i > sections) {
            i += Math.floor(Math.random() * 3);
        } else {
            i++;
        }
    }
    return ary;
}

function reload_page(){
  location.reload();
}

/*$('.name_amount').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
                }
            });
        });*/