import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import FlatItem from "./FlatItem";

const FlatList = observer(() => {
    const {flat} = useContext(Context)

    return (
        <Row className="d-flex">
            {flat.flats.map(flat =>
                <FlatItem key={flat.id} flat={flat}/>
            )}
        </Row>
    );
});

export default FlatList;
