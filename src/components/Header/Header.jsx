import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
export const Header = () => {
    return (
        <header>
            <div class="py-5  bg-image imga">
                <Container className='d-flex flex-column justify-content-between h-100'>
                <Navbar   expand="lg">
                    <Navbar.Brand className='text-white fw-bold fs-1' href="#home">loopstudios</Navbar.Brand>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" bg='white' className='bg-white' />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end text-white'>
                    <Nav>
                    <Nav.Link className='text-white' href="#home">About</Nav.Link>
                    <Nav.Link className='text-white' href="#link">Link</Nav.Link>
                    <Nav.Link className='text-white' href="#home">Events</Nav.Link>
                    <Nav.Link className='text-white' href="#link">Products</Nav.Link>
                    <Nav.Link className='text-white' href="#home">Support</Nav.Link>
                    </Nav>
                    </Navbar.Collapse >
                </Navbar>
                <div className=" text-white fw-semibold display-2  w-50  px-5 border">
                    <p>IMMERSIVE EXPERIENCES THAT DELIVER</p>
                </div>
                </Container>
            </div>
        </header>
    );
}