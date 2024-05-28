import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import {VerticalTimeline,  VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import timelineElements from "./timelineElements"
import { Badge } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Stack from 'react-bootstrap/Stack';

export const Resume = () => { 
          
    return (
<Container>    
<section className="timeline" id="resume"> 
<h1 className="timeline-title"> {'resume'} </h1>
<VerticalTimeline className='timeline-container'>
    {
    timelineElements.map(element => {

        let showButton = element.button !== undefined && element.button !== null && element.button !== ""; 

        const theme = createTheme({
            palette: {
              tagColors: {
                professional: '#362706',
                volunteer: '#D1BB9E',
                community: '#EAD8C0',
                education: '#FFF2E1',
                entrepreneurship: '#7E6363',
              },
            },
          });
                  
        return (
            <VerticalTimelineElement
                key={element.id}
                iconClassName="timeline-icon"
                className="timeline-element">
                <div>
                   <Stack direction="horizontal" gap={2}>
                   {element.tags.map((tag, index) => (
                <Badge
                    key={index}
                    className="timeline-badge"
                    sx={{
                        backgroundColor: theme.palette.tagColors[tag.toLowerCase()] || theme.palette.primary.main,
                        variant: "standard",
                        color: theme.palette.getContrastText(theme.palette.tagColors[tag.toLowerCase()] || theme.palette.primary.main),
                        borderRadius: '10%',
                        fontSize: '11px',
                        fontFamily:'OpenSans-Regular',
                        padding: '3px'
                    }} >
                    {tag}
                </Badge>
            ))}
                   </Stack>
                </div>
                <div>
                <h3 className="vertical-timeline-element-title">
                    {element.workplace}
                </h3>
                </div>
                <div>
                <h4 className="vertical-timeline-element-title">
                    {element.title}
                </h4>
                </div>
                <div>
                <h5 className="vertical-timeline-element-title">
                    {element.date}
                </h5>
                </div>
                <div>
                <p className="vertical-timeline-element-title">
                    {element.description}
                </p>
                </div>
                {showButton && (<a className={"timeline-element-button"} href={element.button}>{element.buttonText}</a>)}
            </VerticalTimelineElement>
        )
    })
    }
</VerticalTimeline>
</section>
</Container>   
        )
    
}