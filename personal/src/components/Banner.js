import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {useState, useEffect} from "react"

export const Banner = () => { 
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Software Engineer", "Writer", "Dancer"] 
    const [text, setText] = useState(''); 
    const [delta, setDelta] = useState(300 - Math.random() * 50)
    const period = 1500; 

    useEffect(() => { 
        let ticker = setInterval(() => { 
            tick(); 
        }, delta)

        return () => { clearInterval (ticker)}

    }, [text, delta])

    const tick = () => { 
        let i = loopNum % toRotate.length; 
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1) 

        setText(updatedText)
 
        if (isDeleting) { 
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) { 
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') { 
            setIsDeleting(false) 
            setLoopNum(loopNum + 1)
            setDelta(300); 
        }
    }

    return (
    <section className="banner" id="home"> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md = {6} xl = {7}>
                <div className="content">
                <h1>{'Sheily Shah'}</h1>
                <span className="wrap" style={{ visibility: text ? 'visible' : 'hidden' }}>{text || '\u00A0'}</span>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
}