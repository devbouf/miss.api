const http = require("http")

module.exports.api = async(content) => {
    return new Promise((resolve, reject) => {
        if(!content) return resolve(require('./endpoints.json'))
        const url = `http://miss.glitch.me/api/${content}`
        http.get(url, function(res){
            let body = " ";
            res.on('data', function(chunk){
                body += chunk;
                return resolve(JSON.parse(body).image)
            })
        })
    })
}
