import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import sheilyPic from "../assets/imgs/sheily-profile-pic.png";

export const Banner = () => {
    const fullText = "software engineer, writer, dancer";
    const [text, setText] = useState('');
    const [typingStarted, setTypingStarted] = useState(false);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            const newText = fullText.substring(0, text.length + 1);
            setText(newText);
            if (newText === fullText) clearInterval(typingInterval);
        }, 100); // Typing speed: 100ms

        setTypingStarted(true);

        return () => clearInterval(typingInterval);
    }, [text, fullText]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="content">
                            <h1>{'sheily shah'}</h1>
                            <span className="wrap" style={{ visibility: text ? 'visible' : 'hidden' }}>{text || '\u00A0'}</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="image-container">
                            <img src={sheilyPic} alt="Sheily Shah" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
