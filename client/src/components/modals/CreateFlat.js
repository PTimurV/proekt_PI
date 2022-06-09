import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createFlat, fetchDistricts, fetchRooms} from "../../http/flatAPI";
import {observer} from "mobx-react-lite";

const CreateFlat = observer(({show, onHide}) => {
    const {flat} = useContext(Context)
    const [name, setName] = useState('')
    const [priceflat, setPriceflat] = useState(0)
    const [file, setFile] = useState(null)
    const [file1, setFile1] = useState(null)
    const [file2, setFile2] = useState(null)
    const [file3, setFile3] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchRooms().then(data => flat.setRooms(data))
        fetchDistricts().then(data => flat.setDistricts(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', img: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const selectFile1 = e => {
        setFile1(e.target.files[0])
    }
    const selectFile2 = e => {
        setFile2(e.target.files[0])
    }
    const selectFile3 = e => {
        setFile3(e.target.files[0])
    }
    
    const addFlat = () => {
        const formData = new FormData()
        try{
            formData.append('name', name)
            formData.append('priceflat', `${priceflat}`)
            formData.append('img', file)
            formData.append('img1', file1)
            formData.append('img2', file2)
            formData.append('img3', file3)
            formData.append('districtId', flat.selectedDistrict.id)
            formData.append('roomId', flat.selectedRoom.id)
            formData.append('info', JSON.stringify(info))
            
            for(let [name, value] of formData) {
                console.log(`${name} = ${value}`);
            }
            createFlat(formData).then(data => onHide())
            
        } catch(e){
            alert(e)
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить квартиру
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{flat.selectedRoom.name || "Выберите кол-во комнат"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {flat.rooms.map(room =>
                                <Dropdown.Item
                                    onClick={() => flat.setSelectedRoom(room)}
                                    key={room.id}
                                >
                                    {room.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{flat.selectedDistrict.name || "Выберите район"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {flat.districts.map(district =>
                                <Dropdown.Item
                                    onClick={() => flat.setSelectedDistrict(district)}
                                    key={district.id}
                                >
                                    {district.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите заголовок для описания квартиры"
                    />
                    <Form.Control
                        value={priceflat}
                        onChange={e => setPriceflat(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость аренды"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile1}
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile2}
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile3}
                    />
                    <hr/>
                    <Button
                        variant={"outline-success"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={6}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название "
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => 
                                        changeInfo('description', e.target.value, i.number)
                                }
                                    placeholder="Введите описание "
                                />
                            </Col>
                            <Col className="mt-4" md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addFlat}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateFlat;
