import react from 'react';
import ConvertDateToday from '../app/shared/FrenchTime';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import '../app/assets/css/Home.css';
import Logo from '../app/assets/img/m_fleur.png';


const Header2 = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={Logo} alt='React Logo' />
            </NavbarBrand>
        </Navbar>
    );
};

const Header = () => {
    return (
        <header className='jumbotron jumbotron-fluid'>
            <Container>
                <Row className='text-right'>
                    <Col className='text-warning mr-0 pr-1'>
                        <ConvertDateToday />
                    </Col>
                </Row>
                <Row>
                <Col xs={3} lg={2}>
                    <a href='/'><img src={Logo} fluid /></a>
                </Col>
                <Col xs className='align-self-center'>
                    <h1 className='d-none d-md-block'>Le Saint du Mech</h1>
                    <h2 className='d-md-none mt-3'>Le Saint du Mech</h2>
                </Col>
                </Row> 
                xxx
            </Container>
        </header>
    );
};

export default Header2;

/*
<header class="jumbotron jumbotron-fluid">
            <div class="container">
                <div class="row text-right">
                    <div class="col text-warning mr-0 pr-1 h6" id="dateFR"></div><img src="img/french.png" height="20px"/>
                </div>
                <div class="row">
                    <div class="col-3 col-lg-2">
                        <a href="index.html"><img src="img/m_fleur.png" class="img-fluid" /></a>
                    </div>
                    <div class="col align-self-center ">
                        <h1 class="d-none d-md-block">Le Saint du Mech</h1>
                        <h2 class="d-md-none mt-3">Le Saint du Mech</h2>
                    </div>
                </div> 
            </div>
        </header>
*/