import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const Banner = () => { 
    return (
    <section className="banner" id="home"> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md = {6} xl = {7}>
                    <h1>{'Sheily Shah'}<span className="wrap">XXX</span></h1>
                    <p>Software Engineer, Writer, Dancer</p>
                </Col>
            </Row>

        </Container>
    </section>
    )
}