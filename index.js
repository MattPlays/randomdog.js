const fetch = require("node-fetch");
/**
 * @returns {Promise<{fileSizeBytes: number, urL: string}>}
 * @example
 * const randomdog = require("@mattplays/randomdog.js")
 * randomdog().then(({fileSizeBytes, url}) => {
 *  console.log(fileSizeBytes, url);
 * })
 */
module.exports = async() => {
    return fetch("https://random.dog/woof.json", {
        "method": "GET",
        "headers": {
            "Accept": "application/json"
        }
    }).then(data => data.json()).then((data) => {
        return data;
    }).catch((err) => {throw new Error(err)});
}