export function post(url, json, token) {
    var result = fetch("https://api.rlair.live/" + url, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(json)
    }).then(function (data) {
        return data.json();
    });

    return result;
}