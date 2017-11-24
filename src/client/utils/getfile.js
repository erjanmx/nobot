import 'whatwg-fetch'

export default function getFile (token) {
    return fetch(`/https://files.namba1.co?token=${token}`).then(function (response) {
        return response.blob()
    })
}
