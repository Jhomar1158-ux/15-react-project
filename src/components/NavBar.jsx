import {Navbar, Container, Nav} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import logo from "../assets/img/logo.png"

export const NavBar = () =>{

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        alert("Hola")
        const onScroll = () =>{
            // 50 -> es la altura aprox de nuestro navbar
            window.scrollY > 50 ?
                setScrolled(true):setScrolled(false);
        }
        // Creamos el detector de eventos cuando se haga scroll
        window.addEventListener("scroll", onScroll);
        // Eliminamos el detector de eventos cuando el componente se elimine
        return(()=>{
            window.removeEventListener("scroll", onScroll);
        })
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return(
        <Navbar bg="light" expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggles-icon'></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='#'>
                            <img src={""} alt=""/>
                        </a>
                        <a href='#'>
                            <img src={""} alt=""/>
                        </a>
                        <a href='#'>
                            <img src={""} alt=""/>
                        </a>
                    </div>
                    <button className='vvd' onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
                </span>
                <button className='vvd' onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
                
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}