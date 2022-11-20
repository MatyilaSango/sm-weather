// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"

export default function handler(req, res) {

  axios.get("https://sm-weather-api.herokuapp.com/").then((response)=> {
    const data = response.data;
    res.status(200).json(data)
  })

}
