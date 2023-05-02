import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Editor from "../components/Editor";
import Consola from "../components/Consola";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import GraphAST from "../components/Reports/GraphAST";
import GraphTS from "../components/Reports/GraphTS";

function Home() {
    const [editor, setEditor] = useState("");
    const [consola, setConsola] = useState("");
    const [show, setShow] = useState(false);
    const [dot, setDot] = useState("");
    const [dot2, setDot2] = useState("");
    const [lgShow, setLgShow] = useState(false);
  const handleClose2 = () => setLgShow(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                const {consola,errores,ast,tablaSimbolos} = response.data;
                console.log(consola);
                console.log("ast",ast);
                console.log("tablaS",tablaSimbolos);
                setDot(ast);
                setDot2(tablaSimbolos);
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
                <Col>
                        <Button variant="primary" onClick={handleShow}>
                            AST
                        </Button>
                </Col>
                <Col>
                <Button onClick={() => setLgShow(true)}>Tabla Simbolos</Button>
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
                    <Modal.Body style={{textAlign: 'center'}}>
                    <GraphAST dot={dot}/>
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
        <Modal.Body><GraphTS dot={dot2}/></Modal.Body>
        <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    </Modal.Footer>
      </Modal>
        </Container>
    );
}

export default Home;
