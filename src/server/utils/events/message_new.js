const settings = require('../../../../settings.json')

module.exports = {
  "event": "message/new",
  "data": {
    "content": settings.message.content,
    "id": settings.message.id,
    "type": settings.message.type,
    "link": null,
    "status": 0,
    "expiration_date": null,
    "viewed_times": null,
    "created_at": 1511000000,
    "updated_at": 1511000000,
    "sender_id": settings.user.id,
    "chat_id": settings.chat.id,
    "language": settings.user.language
  }
}
