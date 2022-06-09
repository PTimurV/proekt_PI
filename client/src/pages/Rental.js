import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RoomBar from "../components/RoomBar";
import DistrictBar from "../components/DistrictBar";
import FlatList from "../components/FlatList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchDistricts, fetchFlats, fetchRooms} from "../http/flatAPI";
import Pages from "../components/Pages";

const Rental = observer(() => {
    const {flat} = useContext(Context)

    useEffect(() => {
        fetchRooms().then(data => flat.setRooms(data))
        fetchDistricts().then(data => flat.setDistricts(data))
        fetchFlats(null, null, 1, 2).then(data => {
            flat.setFlats(data.rows)
            flat.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchFlats(flat.selectedRoom.id, flat.selectedDistrict.id, flat.page, 2).then(data => {
            flat.setFlats(data.rows)
            flat.setTotalCount(data.count)
        })
    }, [flat.page, flat.selectedRoom, flat.selectedDistrict,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <RoomBar/>
                </Col>
                <Col md={9}>
                    <DistrictBar/>
                    <FlatList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Rental;
