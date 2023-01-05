import face from "../../img/icon-facebook.svg";
import twiter from "../../img/icon-twitter.svg";
import pinterest from "../../img/icon-pinterest.svg";
import instagram from "../../img/icon-instagram.svg";
import './Footer.css';

function Footer() {
  return (
    <footer className="container-fluid bg-dark ">
        <div className="container row m-auto logo">
          <div className="col-sm-9">
            <h2 className="text-white">loopstudios</h2>
          </div>
          <div className="col-sm-3 d-flex justify-content-between iconos">
            <a><img alt="img"  src={face}></img></a>
            <a><img alt="img"  src={twiter}></img></a>
            <a><img  alt="img" src={pinterest}></img></a>
            <a><img  alt="img" src={instagram}></img></a>
          </div>
          <div className="col-sm-4 text-white d-flex justify-content-sm-between lista ">
            <a>About</a>
            <a>Careers</a>
            <a>Event</a>
            <a>Product</a>
            <a>Support</a>
          </div>
          <div className="col-sm-8 t-final">
            <h4 className="text-secondary text-sm-end small">2021 Loopstudios. All riths reserved.</h4>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
