
export default function handler(req, res) {

  fetch(`https://sm-waether-api.vercel.app/weather/${req.body}`).then((results) => {
    const data = results.json()
    data.then((jres) => {
      res.status(200).json(jres)
    })
    
  })
}