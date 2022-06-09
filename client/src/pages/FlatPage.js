import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom';
import {addToFavorites, fetchOneFlat} from "../http/flatAPI";

const FlatPage = () => {
    const [flat, setFlat] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneFlat(id).then(data => setFlat(data))
    }, [])
    
    
    const add = () => {
        const formData = new FormData()
        formData.append('flatId', id)
        addToFavorites(formData).then(response => alert(`Квартира ` + flat.name + ` добавлена в избранное`))
    }
    console.log(flat.img)
    console.log(flat.img1)
    console.log(flat.img2)
    console.log(flat.img3)


    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + flat.img}/>
                </Col>
                
                <Col md={4}>
                    <Card
                        className="d-flex flex-column justify-content-around"
                        style={{width: 500, height: 300, fontSize: 32, border: '5px solid white' }}
                    >
                        <h1>{flat.name}</h1>

                        <h3>{flat.priceflat} руб.</h3>
                        <Button variant={"outline-success"} onClick={add} >Добавить в избранное</Button>
                    </Card>
                </Col>
            </Row><br/>

            <Row className="d-flex flex-column m-3">
                <h1>Описание</h1>
                {flat.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'moccasin' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row><br/>

            <Row>
            <h2>Дополнительные фото</h2></Row><br/>
            <Row>
            <Col md={4}>
                <Image width={350} height={350} src={process.env.REACT_APP_API_URL + flat.img1}/>
            </Col><br/>
            <Col md={4}>
                <Image width={350} height={350} src={process.env.REACT_APP_API_URL + flat.img2}/>
            </Col><br/>
            <Col md={4}>
                <Image width={350} height={350} src={process.env.REACT_APP_API_URL + flat.img3}/>
            </Col>
            </Row><br/>
        </Container>

    );
};
export default FlatPage;
