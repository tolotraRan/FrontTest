import React, { Component } from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from '../Home/home';
import DataList from '../Datalist/Datalist';
import EditList from '../Datalist/EditList';
export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="/">CPP SYSTEM</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/EtudiantList">Liste des Etudiants</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                <Routes>
                    <Route path="/EtudiantList" element={<DataList />} />
                </Routes>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path={`/edit/:id`} element={<EditList />} /> 
                </Routes>
                </div>
            </Router>
        )
    }
}
