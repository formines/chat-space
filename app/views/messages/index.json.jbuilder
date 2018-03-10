json.text        @last.content 
json.name        @last.user.name
json.id          @last.id
json.created_at  @last.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.image       @last.image.url