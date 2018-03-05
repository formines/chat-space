json.text       @message.content 
json.id         @message.user.id
json.user_name  @message.user.name
json.created_at @message.created_at.strftime("%Y-%m-%d %H:%M:%S")
json.image      @message.image.url 