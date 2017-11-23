import 'whatwg-fetch'

const fileApiUrl = 'http://127.0.0.1:3000/https://files.namba1.co?token='


export default function getFile(token) {
    return fetch(fileApiUrl + token).then(function (response) {
        return response.blob()
    })
}
