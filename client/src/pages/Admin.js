import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateDistrict from "../components/modals/CreateDistrict";
import CreateFlat from "../components/modals/CreateFlat";
import CreateRoom from "../components/modals/CreateRoom";

const Admin = () => {
    const [districtVisible, setDistrictVisible] = useState(false)
    const [roomVisible, setRoomVisible] = useState(false)
    const [flatVisible, setFlatVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-success"}
                className="mt-4 p-2"
                onClick={() => setRoomVisible(true)}
            >
                Добавить кол-во комнат
            </Button>
            <Button
                variant={"outline-success"}
                className="mt-4 p-2"
                onClick={() => setDistrictVisible(true)}
            >
                Добавить район
            </Button>
            <Button
                variant={"outline-success"}
                className="mt-4 p-2"
                onClick={() => setFlatVisible(true)}
            >
                Добавить квартиру
            </Button>
            <CreateDistrict show={districtVisible} onHide={() => setDistrictVisible(false)}/>
            <CreateFlat show={flatVisible} onHide={() => setFlatVisible(false)}/>
            <CreateRoom show={roomVisible} onHide={() => setRoomVisible(false)}/>
        </Container>
    );
};

export default Admin;
