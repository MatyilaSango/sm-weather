
export default function handler(req, res) {

  fetch(`https://sm-weather-api.herokuapp.com/weather/${req.body}`).then((results) => {
    const data = results.json()
    data.then((jres) => {
      res.status(200).json(jres)
    })
    
  })
}