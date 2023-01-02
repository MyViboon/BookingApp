import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === "l") {
      newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }
    setSliderNumber(newSliderNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[sliderNumber].src}
                alt=""
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500 from center
          </span>
          <span className="hotelPriceHighlight">
            Book stay over $114 at property and get free airports taxi
          </span>
          <div className="hotelImegs">
            {photos.map((photo, i) => (
              <div className="hotelImagesWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h1 className="hotelTitle">Stay in heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur obcaecati omnis fugiat aliquam corrupti numquam animi
                dolore quo. Natus nesciunt veritatis voluptates pariatur,
                praesentium temporibus a molestias? Sunt tenetur veritatis, est
                voluptas in saepe, nisi aut exercitationem animi a, et ipsa?
                Optio quidem repudiandae nisi corporis dolore laudantium animi
                placeat?
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect of 9-nigth stay</h1>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                rem at voluptatibus enim nemo consequuntur?
              </span>
              <h2>
                <b>$945</b> (9 nigth!)
              </h2>
              <button>Reserve Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
