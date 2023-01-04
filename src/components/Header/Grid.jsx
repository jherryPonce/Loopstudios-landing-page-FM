
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import img1 from '../../img/desktop/image-deep-earth.jpg'
import img2 from '../../img/desktop/image-night-arcade.jpg'
import img3 from '../../img/desktop/image-soccer-team.jpg'
import img4 from '../../img/desktop/image-grid.jpg'
import img5 from '../../img/desktop/image-from-above.jpg'
import img6 from '../../img/desktop/image-pocket-borealis.jpg'
import img7 from '../../img/desktop/image-curiosity.jpg'
import img8 from '../../img/desktop/image-fisheye.jpg'
import { Button } from "react-bootstrap";
export const Navbar = () =>{
    return(
        <>
          <Container  className='my-5 '>
            <div className="d-flex justify-content-between py-5">
                <h4 className="display-6">OUR CREATIONS</h4>
                <button className="bg-white px-5"> SEE ALL</button>
            </div>
            <Row className='mb-3 text-center w-100 mx-auto'>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4 position-relative text-white">
                    <img src={img1} alt=""   className="img-grid" />
                    <p className="position-absolute bottom-0 w-50 ms-4 fs-4">DEEP EARTH</p>
                </Col>
                <Col xs={12} sm={6} md={4}  lg={3} className="mb-4 position-relative text-white">
                    <img src={img2} alt=""   className="img-grid" />
                     <p className="position-absolute bottom-0 w-50 ms-4 fs-4">NIGHT ARCADE</p>
                    </Col>
                <Col xs={12} sm={6}  md={4} lg={3} className="mb-4 position-relative text-white">
                    <img src={img3} alt="" className="img-grid" />
                     <p className="position-absolute bottom-0 w-50 ms-4 fs-4">SOCCER TEAM VR</p>
                </Col>
                <Col xs={12} sm={6}  md={4} lg={3} className="mb-4 position-relative text-white">
                    <img src={img4} alt="" className="img-grid" />
                     <p className="position-absolute bottom-0 w-50 ms-4 fs-4">THE GRID</p>
                </Col>
            </Row>
            <Row className="mt-4 text-center w-100 mx-auto">
                <Col xs={12} sm={6}  md={4} lg={3} className="mb-4 position-relative text-white">
                    <img src={img5} alt="" className="img-grid" />
                     <p className="position-absolute bottom-0 w-50 ms-4 fs-4">FROM UP ABOVE VR</p>
                </Col>
                <Col xs={12} sm={6}  md={4} lg={3} className="mb-4 position-relative text-white">
                    <img src={img6} alt="" className="img-grid" />
                     <p className="position-absolute bottom-0 w-50 ms-4 fs-4">POCKET BOREALIS</p>
                </Col>
                <Col xs={12} sm={6}  md={4} lg={3} className="mb-4 position-relative text-white">
                    <img src={img7} alt="" className="img-grid" />
                     <p className="position-absolute bottom-0 w-50 ms-4 fs-4">THE CURIOSITY</p>
                </Col>
                <Col xs={12} sm={6}  md={4} lg={3} className=" position-relative text-white ">
                    <img src={img8} alt="" className="img-grid" />
                     <p className="mb-4 position-absolute bottom-0 w-50 ms-4 fs-4">MAKE IT FISHEYE</p>
                </Col>
            </Row>
    </Container>
        
        </>


    )
}