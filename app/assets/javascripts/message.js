$(function(){
  function buildHTML(data){
    if(data.text){
     var text = data.text
    }else{
     var text = ""
    }
    if(data.image){
     var image = data.image  
    }else{
     var image = "" 
    }           
    var html = `<div class ="message">
                  <div class ="message_up">
                    <div class ="up_name">
                      ${data.user_name}  
                    </div>
                    <div class = "up_data">
                      ${data.created_at}
                    </div>  
                  </div>
                  <div class ="message_down">
                    <p class ="down_content">
                      ${text}
                    </p>  
                    <img class ="down-content_image" src= ${image}>
                  </div>              
                </div>`
    return html; 
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      var targetTop = $('.messages')[0].scrollHeight;
      $('.messages').animate({scrollTop: targetTop}, 3000);
      $('.form_message').val('');
    })
    .fail(function(){
      alert('error');
    })
    return false;  	
  });
});
