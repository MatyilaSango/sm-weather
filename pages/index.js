import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import searchIcon from "../icons/search.png";
import weatherWallpaper from "../icons/weather.jpg";
import locationPic from "../icons/location.png";
import wp from "../icons/wp.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  // const loc = await axios.get(`https://ipinfo.io/`)
  // const jsondata = await loc.data

  // const getData = await fetch(`https://sm-weather-api.herokuapp.com/weather/${jsondata.city}`);
  // const data = await getData.json();

  //Sample
  const data = {
    location: "Cape Town",
    full_location: "Cape Town - South Africa",
    source: "BBC",
    today_hourly_data: [
      {
        time: "17:00",
        degrees: [
          {
            c: "23°25°",
          },
          {
            f: "74°78°",
          },
        ],
        Humidity: "53%",
        Pressure: "1012 mb",
        Visibility: "Good",
        precipitation: "Precipitation is not expected",
        breeze: "A moderate breeze from the south",
      },
      {
        time: "18:00",
        degrees: [
          {
            c: "21°24°",
          },
          {
            f: "71°74°",
          },
        ],
        Humidity: "58%",
        Pressure: "1012 mb",
        Visibility: "Good",
        precipitation: "Precipitation is not expected",
        breeze: "A gentle breeze from the south",
      },
      {
        time: "19:00",
        degrees: [
          {
            c: "20°22°",
          },
          {
            f: "68°71°",
          },
        ],
        Humidity: "64%",
        Pressure: "1012 mb",
        Visibility: "Very Good",
        precipitation: "Low chance of precipitation",
        breeze: "A gentle breeze from the south",
      },
      {
        time: "20:00",
        degrees: [
          {
            c: "19°20°",
          },
          {
            f: "65°69°",
          },
        ],
        Humidity: "69%",
        Pressure: "1013 mb",
        Visibility: "Very Good",
        precipitation: "Low chance of precipitation",
        breeze: "A gentle breeze from the south south west",
      },
      {
        time: "21:00",
        degrees: [
          {
            c: "18°19°",
          },
          {
            f: "64°67°",
          },
        ],
        Humidity: "73%",
        Pressure: "1013 mb",
        Visibility: "Very Good",
        precipitation: "Precipitation is not expected",
        breeze: "Light winds from the south south west",
      },
      {
        time: "22:00",
        degrees: [
          {
            c: "17°19°",
          },
          {
            f: "63°66°",
          },
        ],
        Humidity: "75%",
        Pressure: "1012 mb",
        Visibility: "Very Good",
        precipitation: "Precipitation is not expected",
        breeze: "Light winds from the south south west",
      },
      {
        time: "23:00",
        degrees: [
          {
            c: "17°19°",
          },
          {
            f: "63°66°",
          },
        ],
        Humidity: "76%",
        Pressure: "1012 mb",
        Visibility: "Very Good",
        precipitation: "Precipitation is not expected",
        breeze: "Light winds from the south south west",
      },
      {
        time: "00:00",
        degrees: [
          {
            c: "17°18°",
          },
          {
            f: "62°65°",
          },
        ],
        Humidity: "79%",
        Pressure: "1012 mb",
        Visibility: "Good",
        precipitation: "Precipitation is not expected",
        breeze: "Light winds from the south south west",
      },
      {
        time: "01:00",
        degrees: [
          {
            c: "16°17°",
          },
          {
            f: "60°63°",
          },
        ],
        Humidity: "83%",
        Pressure: "1011 mb",
        Visibility: "Good",
        precipitation: "Precipitation is not expected",
        breeze: "Light winds from the south west",
      },
      {
        time: "02:00",
        degrees: [
          {
            c: "15°17°",
          },
          {
            f: "59°62°",
          },
        ],
        Humidity: "85%",
        Pressure: "1011 mb",
        Visibility: "Good",
        precipitation: "Precipitation is not expected",
        breeze: "Light winds from the west north west",
      },
      {
        time: "03:00",
        degrees: [
          {
            c: "15°16°",
          },
          {
            f: "59°61°",
          },
        ],
        Humidity: "86%",
        Pressure: "1010 mb",
        Visibility: "Good",
        precipitation: "Precipitation is not expected",
        breeze: "Light winds from the north west",
      },
      {
        time: "04:00",
        degrees: [
          {
            c: "15°16°",
          },
          {
            f: "59°61°",
          },
        ],
        Humidity: "85%",
        Pressure: "1010 mb",
        Visibility: "Good",
        precipitation: "Precipitation is not expected",
        breeze: "Light winds from the north north west",
      },
      {
        time: "05:00",
        degrees: [
          {
            c: "15°16°",
          },
          {
            f: "59°61°",
          },
        ],
        Humidity: "82%",
        Pressure: "1010 mb",
        Visibility: "Good",
        precipitation: "Precipitation is not expected",
        breeze: "Light winds from the north north west",
      },
    ],
    next_days_data: [
      {
        day: "Today",
        weather_type: " Sunny and a moderate breezeSunnySunny",
        temperature: " High24° 76°Low13° 55°",
        wind: " Wind speed15 mph24 km/h S15 mph24 km/hSoutherlySunny and a moderate breeze",
      },
      {
        day: "Wednesday 23rd NovemberWed 23rd",
        weather_type: " Light rain and a gentle breezeLight RainLight Rain",
        temperature: " High21° 70°Low13° 55°",
        wind: " Wind speed11 mph17 km/h NW11 mph17 km/hNorth WesterlyLight rain and a gentle breeze",
      },
      {
        day: "Thursday 24th NovemberThu 24th",
        weather_type:
          " Sunny intervals and a gentle breezeSunny IntervalsSunny Intervals",
        temperature: " High21° 69°Low13° 56°",
        wind: " Wind speed12 mph19 km/h NW12 mph19 km/hNorth WesterlySunny intervals and a gentle breeze",
      },
      {
        day: "Friday 25th NovemberFri 25th",
        weather_type:
          " Sunny intervals and a fresh breezeSunny IntervalsSunny Intervals",
        temperature: " High21° 70°Low15° 59°",
        wind: " Wind speed22 mph35 km/h S22 mph35 km/hSoutherlySunny intervals and a fresh breeze",
      },
      {
        day: "Saturday 26th NovemberSat 26th",
        weather_type:
          " Strong winds and sunny intervalsSunny IntervalsSunny Intervals",
        temperature: " High23° 73°Low17° 63°",
        wind: " Wind speed25 mph41 km/h S25 mph41 km/hSoutherlyStrong winds and sunny intervals",
      },
      {
        day: "Sunday 27th NovemberSun 27th",
        weather_type: " Sunny and a fresh breezeSunnySunny",
        temperature: " High28° 83°Low19° 65°",
        wind: " Wind speed22 mph36 km/h S22 mph36 km/hSoutherlySunny and a fresh breeze",
      },
      {
        day: "Monday 28th NovemberMon 28th",
        weather_type: " Sunny and a gentle breezeSunnySunny",
        temperature: " High31° 88°Low17° 62°",
        wind: " Wind speed12 mph20 km/h S12 mph20 km/hSoutherlySunny and a gentle breeze",
      },
      {
        day: "Tuesday 29th NovemberTue 29th",
        weather_type: " Sunny and a gentle breezeSunnySunny",
        temperature: " High25° 77°Low16° 61°",
        wind: " Wind speed12 mph19 km/h N12 mph19 km/hNortherlySunny and a gentle breeze",
      },
      {
        day: "Wednesday 30th NovemberWed 30th",
        weather_type: " Sunny and a fresh breezeSunnySunny",
        temperature: " High25° 76°Low19° 65°",
        wind: " Wind speed20 mph32 km/h S20 mph32 km/hSoutherlySunny and a fresh breeze",
      },
      {
        day: "Thursday 1st DecemberThu 1st",
        weather_type:
          " Sunny intervals and a fresh breezeSunny IntervalsSunny Intervals",
        temperature: " High26° 78°Low17° 63°",
        wind: " Wind speed22 mph35 km/h S22 mph35 km/hSoutherlySunny intervals and a fresh breeze",
      },
      {
        day: "Friday 2nd DecemberFri 2nd",
        weather_type:
          " Sunny intervals and a moderate breezeSunny IntervalsSunny Intervals",
        temperature: " High25° 77°Low16° 60°",
        wind: " Wind speed16 mph26 km/h S16 mph26 km/hSoutherlySunny intervals and a moderate breeze",
      },
      {
        day: "Saturday 3rd DecemberSat 3rd",
        weather_type:
          " Sunny intervals and a moderate breezeSunny IntervalsSunny Intervals",
        temperature: " High23° 74°Low15° 59°",
        wind: " Wind speed13 mph20 km/h S13 mph20 km/hSoutherlySunny intervals and a moderate breeze",
      },
      {
        day: "Sunday 4th DecemberSun 4th",
        weather_type:
          " Sunny intervals and a gentle breezeSunny IntervalsSunny Intervals",
        temperature: " High23° 73°Low15° 59°",
        wind: " Wind speed12 mph19 km/h S12 mph19 km/hSoutherlySunny intervals and a gentle breeze",
      },
      {
        day: "Monday 5th DecemberMon 5th",
        weather_type:
          " Sunny intervals and a moderate breezeSunny IntervalsSunny Intervals",
        temperature: " High23° 74°Low15° 59°",
        wind: " Wind speed13 mph20 km/h S13 mph20 km/hSoutherlySunny intervals and a moderate breeze",
      },
    ],
  };

  return {
    props: {
      data: data,
    },
  };
};

export default function Home(data) {
  const [jdata, setData] = useState(data);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  const searchWeather = async (e) => {
    e.preventDefault();
    const query = e.target[0].value;

    fetch(`https://sm-weather-api.herokuapp.com/weather/${query}`)
      .then((res) => {
        const newData = res.json();
        console.log(newData);
        setData(newData);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        router.reload();
      });
  };

  useEffect(() => {
    setData(jdata);
    setLoaded(false);
  }, [loaded]);

  return (
    <div className={styles.container}>
      <Head>
        <title>SM-Weather</title>
        <meta name="description" content="Global weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <Image
          className={styles.weatherWallpaper}
          src={weatherWallpaper}
          alt="wallpaper"
        />

        <section className={styles.topContainer}>
          <nav className={styles.navContainer}>
            <div className={styles.searchContainer}>
              <form className={styles.searchForm} onSubmit={searchWeather}>
                <input type="text" name="query" placeholder="Search" required />
                <button type="submit">
                  <Image
                    className={styles.searchIcon}
                    src={searchIcon}
                    alt="search"
                  />
                </button>
              </form>
            </div>
          </nav>

          {jdata.data.location !== "" && (
            <div className={styles.mainWrapper}>
              <div className={styles.todayWeatherContainer}>
                <div className={styles.todayWeatherContainerDisplay}>
                  <div className={styles.locationWeather}>
                    <Image
                      src={locationPic}
                      className={styles.locationPic}
                      width={30}
                      alt="lp"
                    />
                    <span>
                      {" "}
                      {jdata.data.full_location.split("-")[0] +
                        " - " +
                        jdata.data.full_location.split("-")[1]}{" "}
                    </span>
                  </div>
                  <div className={styles.todayWeather}>
                    <div className={styles.weatherIcon}>
                      <Image src={wp} alt="icon" width={100} />
                    </div>
                    <div className={styles.weatherDegrees}>
                      <div className={styles.weatherDegreesValues}>
                        {jdata.data.next_days_data[0].temperature}
                      </div>
                      <div className={styles.weatherTypeValues}>
                        {jdata.data.next_days_data[0].weather_type}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.hourlyWetherContainer}>
                <spa>Hourly Weather :</spa>
                <div className={styles.hourlyWeatherContainerDisplay}>
                  {jdata.data.today_hourly_data.map((content) => (
                    <div className={styles.hourlyWeatherContent}>
                      <div className={styles.hourlyWeatherTimeWrapper}>
                        {content.time}
                      </div>
                      <div className={styles.hourlyWeatherRestData}>
                        <span>
                          <span className={styles.weatherSpanText}>Degrees :{" "}</span>
                          {content.degrees[0].c +
                            " c " +
                            jdata.data.today_hourly_data[0].degrees[1].f +
                            " f"}{" "}
                        </span>
                        <br />
                        <span><span className={styles.weatherSpanText}>Humidity :</span> {content.Humidity}</span>
                        <br />
                        <span><span className={styles.weatherSpanText}>Pressure :</span> {content.Pressure}</span>
                        <br />
                        <span><span className={styles.weatherSpanText}>Vissibility :</span> {content.Visibility}</span>
                        <br />
                        <span><span className={styles.weatherSpanText}>Precipitation :</span> {content.precipitation}</span>
                        <br />
                        <span><span className={styles.weatherSpanText}>breeze :</span> {content.breeze}</span>
                        <br />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.dailyWetherContainer}>
                <spa>Daily Weather :</spa>
                <div className={styles.dailyWeatherContainerDisplay}>
                  {jdata.data.next_days_data.map((content) => (
                    <div className={styles.dailyWeatherContent}>
                      <div className={styles.dailyWeatherTimeWrapper}>
                        {content.day}
                      </div>
                      <div className={styles.dailyWeatherRestData}>
                        <div><span><span className={styles.weatherSpanText}>Weather type :</span> {content.weather_type} </span></div>
                        <br />
                        <div><span><span className={styles.weatherSpanText}>Temperature :</span> {content.temperature}</span></div>
                        <br />
                        <div><span><span className={styles.weatherSpanText}>Wind :</span> {content.wind}</span></div>
                        <br />
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          )}
        </section>
      </main>
    </div>
  );
}
