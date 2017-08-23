export function get(url) {
    var result = fetch("http://localhost:5000/" + url).then(function (data) {
        return data.json();
    });

    return result;
}