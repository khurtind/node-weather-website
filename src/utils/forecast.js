const request = require('postman-request')

const forecast = (latitude, longtitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=d31ef7527aac3411403f1faeb15b6dca&query=' + encodeURIComponent(latitude) + ',' + longtitude
    request({url, json: true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to Weather Service!')
        } else if(body.error){
            callback('Unable to find location')
        } else{
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. " + "It feels like " + body.current.feelslike + " degrees out")
        }
    })
}
module.exports = forecast