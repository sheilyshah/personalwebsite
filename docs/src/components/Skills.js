import Container from "react-bootstrap/Container"
import { Chip } from '@mui/material';
import Stack from '@mui/material/Stack';

export const Skills = () => { 
const skills = ["Full Stack Engineering", "Java", "Python", "React", "TypeScript", "JavaScript", "SQL", "REST API", "MariaDB", "GraphQL", "Github", "Jira", "C++", "VSCode", "IntelliJ", ]

    return(
        <Container>
            <Stack direction="row" spacing={1} >
            {skills.map((skill, index) => (
                <Chip label={skill} variant = "outlined"/>
                ))
            }    
            </Stack>
        </Container>
        )
}