import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
//import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const RoomBar = observer(() => {
    const {flat} = useContext(Context)
    return (
        <ListGroup>
            <br/><h4>Кол-во комнат:</h4><br/>
            {flat.rooms.map(room =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={room.id === flat.selectedRoom.id}
                    onClick={() => flat.setSelectedRoom(room)}
                    key={room.id}
                >
                    {room.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default RoomBar;
