$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    if(message.image){
     var image = message.image  
    }else{
     var image = ""
    }           
    var html = `<div class ="message" data-id=${message.id}>
                  <div class ="message_up">
                    <div class ="up_name">
                      ${message.name}  
                    </div>
                    <div class = "up_data">
                      ${message.created_at}
                    </div>  
                  </div>
                  <div class ="message_down">
                    <p class ="down_content">
                      ${message.text}
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
      $('.messages').animate({scrollTop: targetTop}, 5000);
      $('.form_message').val('');
      $('.hidden').val('');
    })
    .fail(function(){
      alert('メッセージを入力してください！');
    })
    return false;  	
  });

    var interval = setInterval(function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
        var message_id = $('.message:last').data('id')
        console.log(message_id);
    $.ajax({
      url: location.href,
      type: 'GET',
      data: { id: message_id },
      dataType: 'json'
    })
    .done(function(last_message) {
        var id = $('.message:last').data('id');
        var html = ''
        if(last_message.id > id ) {
        var html = buildHTML(last_message);
        $('.messages').append(html);
        var targetTop = $('.messages')[0].scrollHeight;
        $('.messages').animate({scrollTop: targetTop}, 5000);    
      }
    })
    .fail(function(){ 
      alert("自動更新に失敗しました"); 
     });
    } else {  
     clearInterval(interval);
    }}, 5000); 
});   