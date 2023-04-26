import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Editor from "../components/Editor";
import Consola from "../components/Consola";
import Button from 'react-bootstrap/Button';
import axios from "axios";

function Home() {
    const [editor, setEditor] = useState("");
    const [consola, setConsola] = useState("");

    const interpretar = async () => {
        console.log("ejecutando");
        try {
            setConsola("Ejecutando...");
            if(editor ===""){
                setConsola("No hay nada que ejecutar");
                console.log("No hay codigo a interpretar");
            } else {
                console.log(editor);
                const response = await axios.post('http://localhost:5000/interprete/interpretar',{codigo:editor});
                console.log(response.data);
                const {consola,errores} = response.data;
                console.log(consola);
                setConsola(consola);
            }
        } catch (error) {
            console.log(error);
            setConsola("Error en Servidor");
        }
    }
    

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Editor</h1>
                </Col>
                <Col>
                    <h1>Consola</h1>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign: 'left',resize: "vertical"}}>
                    <Editor input={setEditor}/>
                </Col>
                <Col style={{textAlign: 'left',resize: "vertical"}}>
                    <Consola consola={consola}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-secondary" onClick={() => interpretar()}>Ejecutar</Button>{' '}
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
