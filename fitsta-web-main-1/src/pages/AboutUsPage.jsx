// import "./normalizes.css";
// import "./styling.css";
import { useEffect, useState } from "react";
// import slide1 from './slide1.jpg';
// import slide2 from './slide2.jpg';
// import slide3 from './slide3.jpg';

function About() {
  const [parallaxElements, setParallaxElements] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      parallaxElements.forEach((elm) => {
        let speed = elm.getAttribute("data-speed");
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;
        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
      });
    };

    const homeElement = document.querySelector(".about");
    const elements = Array.from(document.querySelectorAll(".home-parallax"));

    setParallaxElements((prevElements) => {
      if (prevElements.length !== elements.length) {
        return elements;
      }
      return prevElements;
    });

    if (homeElement) {
      homeElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (homeElement) {
        homeElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [parallaxElements]);

//   useEffect(() => {
//     if(parallaxElements){const handleScroll = (event) => {
//       if (window.scrollY > 0) {
//         document.querySelector(".header").classList.add("active");
//       } else {
//         document.querySelector(".header").classList.remove("active");
//       }
//       let menu = document.querySelector("#menu-btn1");
//       let navbar = document.querySelector(".navbar");
//       menu.classList.remove("fa-times");
//       navbar.classList.remove("active");
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }}, [parallaxElements]);

  return (
    <>
      <section id="aboutus" className="aboutus">
        {/* </h1>
        <img
          className="home-parallax"
          data-speed={6}
          src="./images/HomeCar.png"
          alt
        />
        <a href="./" className="btn1 home-parallax" data-speed={7}>
          explore cars
        </a>
      </section> */}

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="https://snhfoto.com/wp-content/uploads/2015/01/IMG_0240-2.jpg" className="d-block w-100" alt="slide1" />
              <div className="carousel-caption d-none d-md-block text-about">
                {/* <h5></h5> */}
                <h3 className="text-white">About Us</h3>
                <p>
                  Founded in 2022, At SK Fitness, we are committed to helping you achieve your fitness goals and lead a healthier lifestyle. Our state-of-the-art facility, experienced trainers, and comprehensive range of programs make us your ideal fitness partner. Whether you're a seasoned athlete or just starting on your fitness journey, we're here to guide and support you every step of the way.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://snhfoto.com/wp-content/uploads/2015/01/IMG_0240-2.jpg" className="d-block w-100" alt="slide2" />
              <div className="carousel-caption d-none d-md-block">
                <h3 className="text-white">Compact SUV</h3>
                <p className="text-white pb-5">
                  Discover the power and versatility of our compact SUVs.
                  Designed for adventure, these vehicles offer exceptional
                  performance and ample cargo space.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://snhfoto.com/wp-content/uploads/2015/01/IMG_0240-2.jpg" className="d-block w-100" alt="slide3" />
              <div className="carousel-caption d-none d-md-block">
                <h3 className="text-white">Electric Car</h3>
                <p className="text-white pb-5">
                  Go green with our electric cars. Experience emission-free
                  driving and cutting-edge technology that takes you into the
                  future of automotive.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div>
          <h2 className="my-list1A">
          Our Mission
          </h2>
          <ul className="my-list1B">
            <li>
          

Our mission is to inspire and empower individuals to prioritize their health and well-being through regular exercise and mindful living. We believe that fitness is not just about physical appearance, but about building strength, resilience, and confidence that extends beyond the gym.
            </li>
            <li className="my-list1C">
            Facility
Our gym boasts a spacious and modern environment designed to enhance your workout experience. From cutting-edge equipment to dedicated areas for cardio, strength training, and group classes, we have everything you need to challenge yourself and see real results. We're committed to maintaining a clean and welcoming space where you can focus on your goals without distractions.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="heading">Our Team</h1>
          <div className="boxContainer">
            <div className="box">
              <h3>Kanthak Shende</h3>
              <img
                src="./images/kanthak.jpeg"
                alt="kanthak"
                width={130}
                height={150}
                style={{ borderRadius: "50%" }}
              />

              <p>Co-founder & CEO</p>
              <p>
                An About Us page is a section on a website that provides
                information about a company, organization, or individual. It is
                an opportunity to tell your brand’s story,
              </p>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <p>CONTACT US</p>
                </small>
                <a
                  href="https://www.linkedin.com/in/jaydipnemade16/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    />
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    />
                  </svg>
                </a>
                <a href="https://wa.me/917020106704" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                    fill-rule="evenodd"
                    clipRule="evenodd"
                  >
                    <path
                      fill="#fff"
                      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    />
                    <path
                      fill="#fff"
                      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    />
                    <path
                      fill="#cfd8dc"
                      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    />
                    <path
                      fill="#40c351"
                      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    />
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="box">
              <h3>Rohit Bagal</h3>
              <img
                src="./images/rohit.jpg"
                alt="Rohit"
                width={130}
                height={150}
                style={{ borderRadius: "50%" }}
              />

              <p>Co-founder & CEO</p>
              <p>
                An About Us page is a section on a website that provides
                information about a company, organization, or individual. It is
                an opportunity to tell your brand’s story,
              </p>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <p>CONTACT US</p>
                </small>
                <a
                  href="https://www.linkedin.com/in/rohit-bagal-3b21ab26b/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    />
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    />
                  </svg>
                </a>
                <a href="https://wa.me/917020106704" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                    fill-rule="evenodd"
                    clipRule="evenodd"
                  >
                    <path
                      fill="#fff"
                      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    />
                    <path
                      fill="#fff"
                      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    />
                    <path
                      fill="#cfd8dc"
                      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    />
                    <path
                      fill="#40c351"
                      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    />
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="box">
              <h3>Pranay Bramhne</h3>
              <img
                src="./images/pranay.jpeg"
                alt="Pranay"
                width={130}
                height={150}
                style={{ borderRadius: "50%" }}
              />
              <p>Co-founder & CEO</p>
              <p>
                An About Us page is a section on a website that provides
                information about a company, organization, or individual. It is
                an opportunity to tell your brand’s story,
              </p>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <p>CONTACT US</p>
                </small>
                <a
                  href="https://www.linkedin.com/in/jaydipnemade16/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    />
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    />
                  </svg>
                </a>
                <a href="https://wa.me/917020106704" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                    fill-rule="evenodd"
                    clipRule="evenodd"
                  >
                    <path
                      fill="#fff"
                      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    />
                    <path
                      fill="#fff"
                      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    />
                    <path
                      fill="#cfd8dc"
                      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    />
                    <path
                      fill="#40c351"
                      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    />
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          
            <div className="box1">
              <h3>Saurabh Wagh</h3>
              <img
                src="./images/saurabh.jpeg"
                alt="saurabh"
                width={130}
                height={150}
                style={{ borderRadius: "50%" }}
              />

              <p>Co-founder & CEO</p>
              <p>
                An About Us page is a section on a website that provides
                information about a company, organization, or individual. It is
                an opportunity to tell your brand’s story,
              </p>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <p>CONTACT US</p>
                </small>
                <a
                  href="https://www.linkedin.com/in/jaydipnemade16/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    />
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    />
                  </svg>
                </a>
                <a href="https://wa.me/917020106704" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                    fill-rule="evenodd"
                    clipRule="evenodd"
                  >
                    <path
                      fill="#fff"
                      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    />
                    <path
                      fill="#fff"
                      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    />
                    <path
                      fill="#cfd8dc"
                      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    />
                    <path
                      fill="#40c351"
                      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    />
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="box2">
              <h3>Sohel Desai</h3>
              <img
                src="./images/sohel.jpeg"
                alt="sohel"
                width={130}
                height={150}
                style={{ borderRadius: "50%" }}
              />

              <p>Co-founder & CEO</p>
              <p>
                An About Us page is a section on a website that provides
                information about a company, organization, or individual. It is
                an opportunity to tell your brand’s story,
              </p>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <p>CONTACT US</p>
                </small>
                <a
                  href="https://www.linkedin.com/in/jaydipnemade16/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    />
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    />
                  </svg>
                </a>
                <a href="https://wa.me/917020106704" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                    fill-rule="evenodd"
                    clipRule="evenodd"
                  >
                    <path
                      fill="#fff"
                      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    />
                    <path
                      fill="#fff"
                      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    />
                    <path
                      fill="#cfd8dc"
                      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    />
                    <path
                      fill="#40c351"
                      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    />
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          </div>
        <div>
          <h2 className="my-list2A">
          Experienced Trainers
          </h2>
          <ul>
            <li className="my-list2B">
Our team of certified trainers brings a wealth of expertise and passion to every session. They are dedicated to creating personalized fitness plans tailored to your unique needs, whether you're aiming for weight loss, muscle gain, improved endurance, or overall wellness. Our trainers are here not only to guide your workouts but also to provide motivation, education, and ongoing support.
            </li>
            <li className="my-list2B">
            We offer a diverse range of programs to cater to all fitness levels and interests. From high-intensity interval training (HIIT) to yoga and everything in between, there's something for everyone at SK Fitness. Our group classes foster a sense of community, while our one-on-one training sessions provide individualized attention and accountability.
            </li>
            <li className="my-list2B">
            Community

Joining SK Fitness means becoming part of a supportive and encouraging community. We believe in the power of shared goals and collective motivation. Our gym hosts regular events, challenges, and workshops to keep you engaged and connected with like-minded individuals who are on the same journey to better health.
            </li>
          </ul>
          <h2 className="my-list3A">Contact Us</h2>
          <ul>
            <li className="my-list3B">
We'd love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to reach out to our friendly staff. You can visit us in person, give us a call at 8421097834, or send an email to SKFitness@gmail.com

Thank you for considering SK Fitness as your fitness destination. We look forward to helping you achieve your fitness aspirations and welcoming you to our vibrant community!
            </li>
            {/* <li className="my-list3B">
              Instant Payment: Once you agree on the price, the amount is
              transferred to your bank account within minutes!
            </li>
            <li className="my-list3B">
              Sell From Anywhere: From inspection to payment right to your bank
              account—you don’t even have to leave your home{" "}
            </li>
            <li className="my-list3B">
              Hassle-free Documentation: Documentation can be complicated. An RC
              transfer can take months! We’ll handle it all!
            </li>
            <li className="my-list3B">
              Seller Protection Policy: Should the car you sold meet with an
              accident, or maybe the new owner has a heavy right foot and is
              getting a lot of speeding tickets, don’t worry—LeloGAADI provides
              complete legal support to its customers, free of cost
            </li> */}
          </ul>
          {/* <h2 className="my-list4A">
            And with LeloGAADI Financial aboutus, you get:
          </h2> */}
          <ul>
            {/* <li className="my-list4B">
              Simpler, safer, faster, and more accessible financial aboutus
            </li>
            <li className="my-list4B">
              Loan approval in seconds and same day disbursal{" "}
            </li>
            <li className="my-list4B">Low interest rates</li>
            <li className="my-list4C">
              100% digitised process giving complete transparency
            </li> */}
          </ul>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default About;