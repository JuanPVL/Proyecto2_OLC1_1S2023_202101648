import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Editor from "../components/Editor";
import Consola from "../components/Consola";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import GraphAST from "../components/Reports/GraphAST";
import GraphTS from "../components/Reports/GraphTS";
import GraphError from "../components/Reports/GraphError";

function Home() {
    const [editor, setEditor] = useState("");
    const [consola, setConsola] = useState("");
    const [show, setShow] = useState(false);
    const [codigoEditor, setCodigoEditor] = useState("//TODO - Add code here");
    const [dot, setDot] = useState("");
    const [dot2, setDot2] = useState("");
    const [dot3, setDot3] = useState("");
    const [lgShow, setLgShow] = useState(false);
    const [ErShow, setErShow] = useState(false);
    const handleClose2 = () => setLgShow(false);
    const handleClose3 = () => setErShow(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleFile = () => {
        const file = document.getElementById("file").files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = function (e) {
                const contents = e.target.result;
                setEditor(contents);
                setCodigoEditor(contents);
            };
            reader.readAsText(file);
        }
    }

    const interpretar = async () => {
        console.log("ejecutando");
        try {
            setConsola("Ejecutando...");
            if (editor === "") {
                setConsola("No hay nada que ejecutar");
                console.log("No hay codigo a interpretar");
            } else {
                console.log(editor);
                const response = await axios.post('http://localhost:5000/interprete/interpretar', { codigo: editor });
                console.log(response.data);
                const { consola, errores, ast, tablaSimbolos } = response.data;
                console.log(consola);
                console.log("ast", ast);
                console.log("tablaS", tablaSimbolos);
                console.log("errores", errores);
                setDot(ast);
                setDot2(tablaSimbolos);
                setDot3(errores);
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
                <Col style={{ textAlign: 'left', resize: "vertical" }}>
                    <Editor input={setEditor} value={codigoEditor}/>
                </Col>
                <Col style={{ textAlign: 'left', resize: "vertical" }}>
                    <Consola consola={consola} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-secondary" onClick={() => interpretar()}>Ejecutar</Button>{' '}
                </Col>
                <Col>
                    <Button variant="primary" onClick={handleShow}>
                        AST
                    </Button>
                </Col>
                <Col>
                    <Button onClick={() => setLgShow(true)}>Tabla Simbolos</Button>
                </Col>
                <Col>
                    <Button onClick={() => setErShow(true)}>Errores</Button>
                </Col>
                <Col>
                    <input type="file" id="file" accept=".tw"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => handleFile()}>Subir</Button>
                </Col>
            </Row>
            <Modal
                show={show}
                onHide={handleClose}
                fullscreen={true}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>AST</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <GraphAST dot={dot} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={lgShow}
                onHide={handleClose2}
                fullscreen={true}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Tabla de Simbolos
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body><GraphTS dot={dot2} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={ErShow}
                onHide={handleClose3}
                fullscreen={true}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Tabla de Errores
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body><GraphError dot={dot3} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Home;
