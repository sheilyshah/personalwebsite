import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineContent from '@mui/lab/TimelineContent'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

export const Resume = () => { 

    return (
        <section className="timeline" id="resume"> 
                <Container style={{ paddingLeft: '70px' }}>
                    <Row className="align-items-center">
                    <Col>
                    <Timeline sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontSize: '1.2em' }}>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined'/>
                        <TimelineConnector style={{ borderColor: '' }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ fontSize: '25px',  whiteSpace: 'nowrap' }} fontFamily={"OpenSans-SemiBold"}>Flock Freight</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined' />
                        <TimelineConnector style={{ borderColor: '#ccc' }} />
                        </TimelineSeparator>
                        <TimelineContent  sx={{ whiteSpace: 'nowrap' }} fontFamily={"OpenSans-SemiBold"}>ServiceNow</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot variant='outlined' />
                        </TimelineSeparator>
                        <TimelineContent sx={{ whiteSpace: 'nowrap' }} fontFamily={"OpenSans-SemiBold"}>hEARtListens</TimelineContent>
                    </TimelineItem>
                    </Timeline>
                    </Col>
                    </Row>
                </Container>
        </section>
        )
    
}