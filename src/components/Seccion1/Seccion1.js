import imagen from "../../img/desktop/image-interactive.jpg";
import "../Seccion1/Seccion1.css";
import Container from 'react-bootstrap/Container';
function Seccion1() {
  return (
    <Container className="mb-5 ">
      <div className="container foto mx-2 ">
        <img alt="img" src={imagen}></img>
        <div className="texto">
        <h3>THE LEADER INTERACTIVE IN INTERACTIVE VR</h3>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
      </div>
      
    </Container>
  );
}
export default Seccion1;
