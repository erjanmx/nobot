const settings = require('../../../../settings.json')

module.exports = {
    'success': true,
    'message': 'Message sent',
    'data': {
        'content': settings.message.content,
        'id': settings.message.id,
        'type': settings.message.content,
        'sender_id': settings.user.id,
        'chat_id': settings.chat.id,
        'link': null,
        'created_at': 1511000000,
        'updated_at': 1511000000,
        'Sender': {
            'active': true,
            'id': settings.user.id,
            'name': settings.user.name,
            'phone': settings.user.phone,
            'gender': settings.user.gender,
            'birthdate': settings.user.birthdate,
            'is_online': false,
            'last_login': null,
            'avatar': '',
            'state': 1,
            'status': '',
            'type': 1,
            'min_age': 0,
            'accept_friendship_automatically': true,
            'username': '',
            'position': 0,
            'is_official': false,
            'subscribers_count': 0,
            'deleted_at': null,
            'personal_info_visibility': 0,
            'language2_id': null,
            'created_at': 1511000000,
            'updated_at': 1511000000,
            'category_id': 2,
            'city_id': 1,
            'publisher_id': 1
        },
        'Chat': {
            'message_ttl': 0,
            'id': settings.chat.id,
            'name': settings.user.name,
            'image': '',
            'last_message_date': null,
            'is_private': false,
            'is_dialog': true,
            'unique_name': null,
            'description': null,
            'min_age': 0,
            'type': 0,
            'language3_id': null,
            'category_id': null,
            'created_at': 1511000000,
            'updated_at': 1511000000,
            'official_account3_id': null,
            'official_account_point_entry': null,
            'lastMessage': null,
            'unreadTotal': 0,
            'membership': {
                'chat_id': settings.chat.id,
                'user_id': settings.user.id,
                'is_admin': true,
                'muted': false,
                'is_deleted': false,
                'User': {
                    'active': false,
                    'type': 1,
                    'is_online': false
                }
            },
            'is_official': false
        }
    }
}
