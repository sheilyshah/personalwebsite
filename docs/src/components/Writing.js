
import sweCreativeWriting from "../assets/imgs/swe-creativity-writing.png"
import livingHome20s from "../assets/imgs/living-home-20s.png"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { BlogCard } from "./BlogCard"
import { Stack, Box, Typography } from "@mui/material"

export const Writing = () => { 
    const writings = [
        {
            title: "being a creative in software engineering",
            image_url: sweCreativeWriting,
            url: "https://medium.com/@sheilyhshah/being-a-creative-in-software-engineering-7042670af0ac"
        }, 
        {
            title: "living at home in my early 20's",
            image_url: livingHome20s,
            url: "https://medium.com/@sheilyhshah/living-at-home-in-your-early-20s-85e8a312a6c3"
        }, 

    ]
    return (
        <section className="writing" id="writing">
            <Container>
                <Row>
                    <Col>
                    <h1>writing</h1>
                    <Stack direction="row" spacing={7} paddingLeft={13} >
                        {writings.map((writing, index) => { 
                            return <Box>
                                <BlogCard title={writing.title} spacing={6} image_url={writing.image_url} url={writing.url}></BlogCard>
                            </Box>
                            
                        })}
                    </Stack>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}