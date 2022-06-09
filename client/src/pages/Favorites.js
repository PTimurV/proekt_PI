import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import { getFavorites } from '../http/flatAPI';

import { Card, Col, Container, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import {FLAT_ROUTE} from "../utils/consts";

import {useHistory} from "react-router-dom"

const Favorites = observer(() => {
    const {flat} = useContext(Context)

    const history = useHistory()

    useEffect(() => {
        getFavorites().then(data => flat.setFavoritess(data))
    }, [])

    
    return (
        <Container
            className="d-flex flex-sm-column justify-content-center align-items-center mt-3"
        >
            <h1 className="pb-2">Избранное</h1>
            
            {flat.favorites.map(product =>
                <Col onClick={() => history.push(FLAT_ROUTE + '/' + product.flat.id)}>
                    <Card style={{cursor: 'pointer'}} className="d-flex w-100 p-2 justify-content-center mb-2" key={product.id} >
                        <Row className="d-flex w-100">
                            <Col>
                                <div className="d-flex flex-row align-items-center">
                                    <img src={process.env.REACT_APP_API_URL + product.flat.img} width={100} />
                                    <h1 className="pl-3">{product.flat.name}</h1>
                                </div>
                            </Col>
                            <Col>
                                <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                                    <h2 className="font-weight-light">{product.flat.priceflat} рублей</h2>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            )}
        </Container>
    );
});

export default Favorites;
