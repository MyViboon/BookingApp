import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
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
            {photos.map((photo) => (
              <div className="hotelImagesWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
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
