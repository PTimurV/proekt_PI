import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {FLAT_ROUTE} from "../utils/consts";

const FlatItem = ({flat}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(FLAT_ROUTE + '/' + flat.id)}>
            <Card style={{border: '1px solid lightgray', width: 162, cursor: 'pointer'}}>
                <Image width={160} height={160} src={process.env.REACT_APP_API_URL + flat.img}/><br/>
                <div style={{width: '90%', margin: '0 auto', textalign: 'center'}}>{flat.name}<br/>
                    Стоимость аренды: {flat.priceflat} руб.</div>
            </Card>
        </Col>
    );
};

export default FlatItem;
