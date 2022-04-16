const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZG1pdHJpayIsImEiOiJjbDFkd2kzbWMwaHllM2NtZnh5MnJ1dW43In0.slZ74MMTLEsV_mRAGGNWIw&limit=1'

    request({url, json:true}, (error, {body} = {}) => {
        console.log(error)
        if(error){
            callback('Unable to connect to location services!')
        } else if(body.features.length === 0){
            callback('Unable to find location, try another search')
        } else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode