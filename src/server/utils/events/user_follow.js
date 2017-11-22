const settings = require('../../../../settings.json')

module.exports = {
  "event": "user/follow",
  "data": {
    "id": settings.user.id,
    "name": settings.user.name,
    "gender": settings.user.gender,
    "birthdate": settings.user.birthdate,
    "language": settings.user.language
  }
}
