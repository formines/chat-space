# README

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|string|
|image|string|

### Association
- belongs_to :user
- belongs_to :group


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string| null: false, unique: true|

### Association
- has_many :members
- has_many :users, through: members
- has_many :messages



## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|index: true, null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false|
|email|string|null: false|

### Association
- has_many :menbers
- has_many :groups, through: members
- has_many :messages

* ...
