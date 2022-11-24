import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import searchIcon from "../icons/search.png";
import weatherWallpaper from "../icons/weather.jpg";
import locationPic from "../icons/location.png";
import wp from "../icons/wp.png";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const getStaticProps = async () => {
  const loc = await axios.get(`https://ipinfo.io/`);
  const jsondata = await loc.data;

  const getData = await fetch(
    `https://sm-waether-api.vercel.app/weather/${jsondata.city}`
  );
  const data = await getData.json();

  return {
    props: {
      data: data,
    },
  };
};

export default function Home(data) {
  const [jdata, setJdata] = useState(data);
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef("");
  const loadingTextRef = useRef("");

  const searchWeather = async (e) => {
    e.preventDefault();
    const query = e.target[0].value;

    setIsLoading(true)

    fetch(`/api/weather`, {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: query,
    }).then((results) => {
      results.json().then((data) => {
        const newData = { data };
        setJdata(newData);
        setLoaded(true);
        searchRef.current.value = "";
        loadingTextRef.current = "";
      });
    }).catch((error) => {
      {loadingTextRef.current = "Error!!!"}
    });
  };

  useEffect(() => {
    loadingTextRef.current = "Loading..."
    setIsLoading(false)
  },[isLoading])

  useEffect(() => {
    setJdata(jdata);
    setLoaded[false];    
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
                <input
                  type="text"
                  name="query"
                  placeholder="Search"
                  required
                  ref={searchRef}
                />
                <button type="submit">
                  <Image
                    className={styles.searchIcon}
                    src={searchIcon}
                    alt="search"
                  />
                </button>
              </form>
            </div>
            <span className={styles.loadingText}>
              {loadingTextRef.current}
            </span>
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
                      <Image className={styles.weatherIconPic} src={wp} alt="icon" width={100} />
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
                          <span className={styles.weatherSpanText}>
                            Degrees :{" "}
                          </span>
                          {content.degrees[0].c +
                            " c " +
                            jdata.data.today_hourly_data[0].degrees[1].f +
                            " f"}{" "}
                        </span>
                        <br />
                        <span>
                          <span className={styles.weatherSpanText}>
                            Humidity :
                          </span>{" "}
                          {content.Humidity}
                        </span>
                        <br />
                        <span>
                          <span className={styles.weatherSpanText}>
                            Pressure :
                          </span>{" "}
                          {content.Pressure}
                        </span>
                        <br />
                        <span>
                          <span className={styles.weatherSpanText}>
                            Vissibility :
                          </span>{" "}
                          {content.Visibility}
                        </span>
                        <br />
                        <span>
                          <span className={styles.weatherSpanText}>
                            Precipitation :
                          </span>{" "}
                          {content.precipitation}
                        </span>
                        <br />
                        <span>
                          <span className={styles.weatherSpanText}>
                            breeze :
                          </span>{" "}
                          {content.breeze}
                        </span>
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
                        <div>
                          <span>
                            <span className={styles.weatherSpanText}>
                              Weather type :
                            </span>{" "}
                            {content.weather_type}{" "}
                          </span>
                        </div>
                        <br />
                        <div>
                          <span>
                            <span className={styles.weatherSpanText}>
                              Temperature :
                            </span>{" "}
                            {content.temperature}
                          </span>
                        </div>
                        <br />
                        <div>
                          <span>
                            <span className={styles.weatherSpanText}>
                              Wind :
                            </span>{" "}
                            {content.wind}
                          </span>
                        </div>
                        <br />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className={styles.footer}>
            <div>© {Date().split(" ")[3]} SM-Weather</div>
          </div>
        </section>
      </main>
    </div>
  );
}
