import axios from "axios";
const cheerio = require("cheerio");

const NUMBER_OF_DAYS = 14;

//--------------------------------------------------//


export default function handler(req, res) {
  var data = {
    location: "",
    full_location: "",
    source: "BBC",
    today_hourly_data: [],
    next_days_data: [],
  };

  const query = req.body

  axios.get(`https://www.bbc.com/weather/search?s=${query}`).then((res) => {
    const html = res.data
    const $ = cheerio.load(html)

    let location_code = $('.location-search-results__result__link').attr("href")
    data.full_location = $('.location-search-results__result__link').text().trim()

    axios.get(`https://www.bbc.com/weather/${location_code}`).then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      let city = $("#wr-location-name-id").text().split("-")[0].trim();
      data.location = city;

      //----------------------------------------------

      $(".wr-time-slot", html).each(function () {
        const Humidity_pressure_precipatation = []
        $(this).find(".wr-time-slot-secondary__value").each(function () { Humidity_pressure_precipatation.push($(this).text()) })
        var hourly_data = {
          time: $(this).find(".wr-time-slot-primary__time").text(),
          degrees: [
            {
              c: $(this).find(".wr-value--temperature--c").text(),
            },
            {
              f: $(this).find(".wr-value--temperature--f").text()
            }
          ],
          Humidity: Humidity_pressure_precipatation[0],
          Pressure: Humidity_pressure_precipatation[1],
          Visibility: Humidity_pressure_precipatation[2],
          precipitation: $(this).find(".wr-time-slot-secondary__chance-of-rain-value").text(),
          breeze: $(this).find(".wr-time-slot-secondary__wind-direction").text(),
        };

        data.today_hourly_data.push(hourly_data)

      });

      //----------------------------------------------------//

      for (var day_no = 0; day_no <= NUMBER_OF_DAYS; day_no++) {
        $(`.wr-day--${day_no}`, html).each(function () {
          const results = $(this).text().split(",");
          data.next_days_data.push({
            day: results[0],
            weather_type: results[1],
            temperature: results[2],
            wind: results[3],

          });
        });
      }

      //---------------------------------------------------//

      res.status(200).json(data);
    });

  });

}