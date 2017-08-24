export function get(url) {
    var result = fetch("http://192.168.1.110:5000/" + url).then(function (data) {
        return data.json();
    });

    return result;
}