function background1() {
    document.getElementById("myBody").style.background = "url('./simple.jpg') no-repeat";
}
function background2() {
    document.getElementById("myBody").style.background = "url('./gradient.png') no-repeat";
}

function bigger(){
    document.getElementById("myBody").style.fontSize = "2.0em";
}
function smaller(){
    document.getElementById("myBody").style.fontSize = "1.0em";
}

/**$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');
        var post = {id: id.val()};
  
        $.ajax({
          type: 'POST',
          url: '/views/post',
          data: post,
          success: function(post){
            location.reload();
          }
        });
  
        return false;
  
    });
  });**/

  function addPost(){
    console.log(document.forms[0].Content.value);
    console.log("hello world");
  }
