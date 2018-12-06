const request = require('request');
const YQL = require('yql');


module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send("Welcome to yahoo weather report");
    });

    app.post('/api/yahoo/getWeather', (req, res) => {
        console.log(req.body);
        
        let city = req.body.city;
        let state = req.body.state;
        let country = req.body.country;
        var query = new YQL(`select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}, ${state},${country}")`);

        query.exec((err, data) => {
            if (err) {
                res.json({ "mesg": "error", result: err });
            }
            else {
                res.status(200).json({ "msg": "success", result: data });
            }
        })
    });
}