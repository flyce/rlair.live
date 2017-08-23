export function post(url, json, token) {
    var result = fetch("http://localhost:5000/" + url, {
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