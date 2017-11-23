import 'whatwg-fetch'

const fileApiUrl = 'https://cors-anywhere.herokuapp.com/https://files.namba1.co?token='


export default function getFile(token) {
    return fetch(fileApiUrl + token).then(function (response) {
        return response.blob()
    })
}
