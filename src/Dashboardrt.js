import React, { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Stackedchart from "./Stackedbardchart";
import Donutchart from "./Donutchart";
import './Dashboard.css';
import Barchart from "./Barchart";
import Table from "./Table.js";

const Dashboardrt = () => {
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedServiceCenter, setSelectedServiceCenter] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const data = {
        "North India": {
            "Delhi": {
                "New Delhi": [
                    { name: "Service Center 1"},
                    { name: "Service Center 2"}
                ],                
            },
            "Haryana": {
                "Gurugram": [
                    { name: "Service Center 3"},
                    { name: "Service Center 4"}
                ]
            }
        },
        "South India": {
            "Karnataka": {
                "Bengaluru": [
                    { name: "Service Center 1"},
                    { name: "Service Center 2"},
                    { name: "Service Center 3"}
                ],
                "Mysuru": [
                    { name: "Service Center 4"},
                    { name: "Service Center 5"}
                ]
            },
            "Tamil Nadu": {
                "Chennai": [
                    { name: "Service Center 6"},
                    { name: "Service Center 7"},
                    { name: "Service Center 8"}
                ],
                "Coimbatore": [
                    { name: "Service Center 9"},
                    { name: "Service Center 10"}
                ]
            }
        }        
    };

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
        setSelectedState("");
        setSelectedCity("");
        setSelectedServiceCenter("");
    };

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
        setSelectedCity("");
        setSelectedServiceCenter("");
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        setSelectedServiceCenter("");
    };

    const handleServiceCenterChange = (event) => {
        setSelectedServiceCenter(event.target.value);
    };

    const renderStates = () => {
        if (selectedRegion) {
            const states = Object.keys(data[selectedRegion]);
            return states.map((state) => (
                <option key={state} value={state}>
                    {state}
                </option>
            ));
        }
        return null;
    };

    const renderCities = () => {
        if (selectedState) {
            const cities = Object.keys(data[selectedRegion][selectedState]);
            return cities.map((city) => (
                <option key={city} value={city}>
                    {city}
                </option>
            ));
        }
        return null;
    };

    const renderServiceCenters = () => {
        if (selectedCity) {
            const serviceCenters = data[selectedRegion][selectedState][selectedCity];
            return serviceCenters.map((center) => (
                <option key={center.name} value={center.name}>
                    {center.name}
                </option>
            ));
        }
        return null;
    };

    return (
        <Container fluid>
            <Row>
                <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio modi voluptate odio numquam, quis nulla, ullam eligendi perspiciatis laborum voluptas placeat debitis quos cupiditate similique quia, dolor blanditiis tempore sit?
                </Col>
                <Col xxl={10} xl={10} lg={10} md={10} sm={10}>
                    <Row className="ms-0">Header</Row>
                    <Row className="ms-0 app-repairdashboard">Repair Dashboard</Row>
                    <hr />
                    <Row className="">
                        <Col >
                            <Col className="app-dates app-h2">From date :<span className="app-compulsory">*</span></Col>
                            <Col className=""><DatePicker className="select-width1" selected={startDate} onChange={(sdate) => setStartDate(sdate)} dateFormat="dd/MM/yyyy" /></Col>
                        </Col>
                        <Col >
                            <Col className="app-dates app-h2">To date :<span className="app-compulsory">*</span></Col>
                            <Row className="">  <DatePicker
                                className="select-width1" 
                                selected={endDate}
                                onChange={(edate) => setEndDate(edate)}
                                dateFormat="dd/MM/yyyy"
                            /></Row>
                        </Col>
                        <Col className="mt-2">
                            <Col className="app-dates app-h2 mb-1">Region: </Col>
                            <Col>
                                <select className="select-width" value={selectedRegion} onChange={handleRegionChange}>
                                <option value="">Select a region</option>
                                {Object.keys(data).map((region) => (
                                    <option key={region} value={region}>
                                        {region}
                                    </option>
                                ))}
                            </select>
                            </Col>
                        </Col>
                        <Col className="mt-2">
                            <Col className="app-dates app-h2 mb-1">State :</Col>
                            <Col>
                                <select className="select-width" value={selectedState} onChange={handleStateChange} disabled={!selectedRegion}>
                                        <option value="">Select a state</option>
                                        {renderStates()}
                                    </select>
                            </Col>
                        </Col>
                        <Col className="mt-2">
                            <Col className="app-dates app-h2 mb-1">City: </Col>
                            <Col>
                                <select className="select-width" value={selectedCity} onChange={handleCityChange} disabled={!selectedState}>
                                <option value="">Select a city</option>
                                {renderCities()}
                            </select>
                            </Col>
                        </Col>
                        <Col className="mt-2">
                            <Col className="app-dates app-h2 mb-1">Servicecenter: </Col>
                            <Col>
                                <select className="select-width" value={selectedServiceCenter} onChange={handleServiceCenterChange} disabled={!selectedCity}>
                                <option value="">Select a</option>
                                {renderServiceCenters()}
                            </select>
                            </Col>
                        </Col>
                        <Col className="mt-4 text-end">
                            <span className="app-search">Search</span>
                        </Col>
                    </Row>
                    <Row className="ms-0 mt-3 me-1">
                    <Col className="app-calls-box ">
                        <Row className="mt-2 ms-0 mb-3">Performance</Row>
                        <Row className="ms-0 mb-2">
                            <Col lg={2} className="app-box05 me-5">
                                <Row className="align-items-center justify-content-center mb-2">3</Row>
                                <Row className="justify-content-center align-items-center d-flex app-boxh mb-2">within 24 hours</Row>
                            </Col>
                            <Col lg={2} className="app-box06 me-5">
                                <Row className="align-items-center justify-content-center ">3</Row>
                                <Row className="justify-content-center mt-2 app-boxh">1 day clousure</Row>
                            </Col>
                            <Col lg={2} className="app-box07 me-5">
                                <Row className="align-items-center justify-content-center  mb-2">3</Row>
                                    <Row className="justify-content-center app-boxh">2 day clousure</Row>
                            </Col>
                            <Col lg={2} className="app-box08">
                                <Row className="align-items-center justify-content-center mb-2">3</Row>
                                    <Row className="justify-content-center app-boxh"> {">"}2 day clousure</Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="app-calls-box ms-3">
                        <Row className="ms-0 mt-1 mb-3">Overall TAT</Row>
                            <Row className="ms-0 mb-2">
                                <Col lg={2} className="app-box01 me-5">
                                    <Row className="align-items-center justify-content-center mb-2">3</Row>
                                    <Row className="justify-content-center align-items-center d-flex app-boxh mb-2">WT</Row>
                                </Col>
                                <Col lg={2} className="app-box02 me-5">
                                    <Row className="align-items-center justify-content-center ">3</Row>
                                    <Row className="justify-content-center app-boxh mt-2">BT</Row>
                                </Col>
                                <Col lg={2} className="app-box03 me-5">
                                    <Row className="align-items-center justify-content-center  mb-2">3</Row>
                                    <Row className="justify-content-center app-boxh">WT</Row>
                                </Col>
                                <Col lg={2} className="app-box04">
                                    <Row className="align-items-center justify-content-center mb-2">3</Row>
                                    <Row className="justify-content-center app-boxh">BT</Row>
                                </Col>
                            </Row>
                    </Col>
                    </Row>
                    <Row className="app-calls-box mt-3 me-1 ms-0">
                        <Row className="ms-0 mt-2">Calls</Row>
                        <Row className="mt-3 ms-0 mb-2">
                            <Col lg={1} className="app-box1 me-5">
                                <Row className="align-items-center justify-content-center mb-2">3</Row>
                                <Row className="justify-content-center align-items-center d-flex app-boxh">total</Row>
                            </Col>
                            <Col lg={1} className="app-box2 me-5">
                                <Row className="align-items-center justify-content-center ">3</Row>
                                <Row className="text-center app-boxh">Closed at call center</Row>
                            </Col>
                            <Col lg={1} className="app-box3 me-5">
                                <Row className="align-items-center justify-content-center  mb-2">3</Row>
                                <Row className="justify-content-center app-boxh">Jobs closed</Row>
                            </Col>
                            <Col lg={1} className="app-box4 me-5">
                                <Row className="align-items-center justify-content-center mb-2">3</Row>
                                <Row className="justify-content-center app-boxh">Not Attended</Row>
                            </Col>
                            <Col lg={1} className="app-box5 me-5">
                                <Row className="align-items-center justify-content-center mb-2">3</Row>
                                <Row className="justify-content-center app-boxh">Not Available</Row>
                            </Col>
                            <Col lg={1} className="app-box6 me-5">
                                <Row className="align-items-center justify-content-center mb-2">3</Row>
                                <Row className="justify-content-center app-boxh">Part Pending</Row>
                            </Col>
                            <Col lg={1} className="app-box7">
                                <Row className="align-items-center justify-content-center mb-2">3</Row>
                                <Row className="justify-content-center app-boxh">PostPoned</Row>
                            </Col>
                        </Row>
                    </Row>
                    <Row className="mt-4">
                        <Col className="app-piechartscol">
                            <Card className="app-cards me-2">
                                <Card.Body><Donutchart /></Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="app-cards me-2">
                                <Card.Body><Stackedchart /></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="me-3 ms-1 tableContainer">
                            <Table />
                        </Col>
                        <Col>
                            {/* <Card className="app-cards me-2"> */}
                                <Card className="app-cards me-2"><Card.Body><Barchart /></Card.Body></Card>
                            {/* </Card> */}
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
  )
}

export default Dashboardrt
