export function get(url) {
    var result = fetch("https://api.rlair.live/" + url).then(function (data) {
        return data.json();
    });

    return result;
}