const settings = require('../../../../settings.json')

module.exports = {
  "event": "chat/new",
  "data": {
    "chat_id": settings.chat.id,
    "user": {
      "active": true,
      "id": settings.user.id,
      "name": settings.user.name,
      "phone": settings.user.phone,
      "gender": settings.user.gender,
      "birthdate": settings.user.birthdate,
      "is_online": false,
      "last_login": 631152000,
      "avatar": "",
      "state": 1,
      "status": "",
      "type": 0,
      "min_age": 0,
      "accept_friendship_automatically": false,
      "username": "NoBot",
      "position": 0,
      "is_official": false,
      "subscribers_count": 0,
      "deleted_at": null,
      "personal_info_visibility": 0,
      "language2_id": null,
      "created_at": 1511000000,
      "updated_at": 1511000000,
      "category_id": null,
      "city_id": 1,
      "publisher_id": null
    }
  }
}
