const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f146394cd1b44461c1f9d85f6cdec135&query='+ longitude +',' + latitude

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services !', undefined)
        } else if (body.error) {
            callback('Unable to find location !', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is ' + body.current.temperature + ' degrees out. It feels like '+ body.current.feelslike + ' degrees out with '+body.current.humidity+'% humidity.'
            )
        }
    })
}

module.exports = forecast