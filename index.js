const axios = require("axios").default;
/**
 * @returns {Promise<{fileSizeBytes: number, urL: string}>}
 * @example
 * const randomdog = require("@mattplays/randomdog.js")
 * randomdog().then(({fileSizeBytes, url}) => {
 *  console.log(fileSizeBytes, url);
 * })
 */
module.exports = async() => {
    return axios({
        method: "GET",
        url: "https://random.dog/woof.json",
        headers: {
            "Accept": "application/json"
        }
    }).then(({data}) => {
        return data;
    }).catch((err) => {throw new Error(err)});
}