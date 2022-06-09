import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const DistrictBar = observer(() => {
    const {flat} = useContext(Context)

    return (
        <Row className="d-flex">
            
            <h4 style={{marginTop: 16, marginRight: 15}}>Район:</h4>
            {flat.districts.map(district =>
                <Card
                    style={{cursor:'pointer'}}
                    key={district.id}
                    className="p-3"
                    onClick={() => flat.setSelectedDistrict(district)}
                    border={district.id === flat.selectedDistrict.id ? 'success' : 'light'}
                >
                    {district.name}
                </Card>
            )}
        </Row>
    );
});

export default DistrictBar;
