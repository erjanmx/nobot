const settings = require('../../../../settings.json')

module.exports = {
    'success': true,
    'message': '',
    'data': {
        'message_ttl': 0,
        'min_age': 0,
        'type': 0,
        'id': settings.chat.id,
        'name': settings.chat.name,
        'image': settings.chat.image,
        'is_private': false,
        'is_dialog': true,
        'last_message_date': null,
        'updated_at': 1511000000,
        'created_at': 1511000000,
        'lastMessage': null,
        'unreadTotal': 0,
        'membership': {
            'id': settings.user.id,
            'is_admin': true,
            'muted': false,
            'is_deleted': false,
            'created_at': 1511000000,
            'chat_id': settings.chat.id,
            'user_id': settings.user.id
        },
        'is_official': false,
        'interlocutor_id': settings.user.id
    }
}
