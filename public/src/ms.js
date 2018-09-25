$(document).ready(function () {




$('.tabs_menu a').click(function(e) {
        e.preventDefault();
        $('.tabs_menu .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });





    		var field = new Array("login", "pass", "e-mail");

    		$("form").submit(function() {
    			var error=0;
    			$("form").find(":input").each(function() {
    				for(var i=0;i<field.length;i++){
    					if($(this).attr("name")==field[i]){

    						if(!$(this).val()){
    							$(this).css('border', 'red 1px solid');
    							error=1;

    						}
    						else{
    							$(this).css('border', 'gray 1px solid');
    						}

    					}
    				}
    		   })

    			var email = $("#email").val();
    		   	if(!isValidEmailAddress(email)){
    				error=2;
    				$("#email").css('border', 'red 1px solid');
    			}

    			if(error==0){
    				return true;
    			}
    			else{
    			var err_text = "";
    			if(error==1)  err_text="Не все обязательные поля заполнены!";
    			if(error==2)  err_text="Введен не корректный e-mail!";

    			$("#messenger").html(err_text);
    			$("#messenger").fadeIn("slow");
    			return false;
    			}

    		})

});


function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  return pattern.test(emailAddress);
  }
