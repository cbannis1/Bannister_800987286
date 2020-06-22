$(document).ready(function(){

  function addPost(){

      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '../post',
        data: post_id,
        success: function(data){
          location.reload();
        }
      });

      return false;
    };
  });
