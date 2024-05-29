import { Box, Typography } from "@mui/material";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";

export const BlogCard = ({ title, image_url, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container style={{ marginBottom: "1em", padding: 0 }}>
      <a href={url} style={{ textDecoration: "none" }}>
        <Box
          className="blog-box"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            width: 350,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            cursor: "pointer", 
            position: "relative", 
          }}
        >
          <div
            style={{
              backgroundImage: `url(${image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 300,
              borderRadius: 12,
            }}
          ></div>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "OpenSans-SemiBold",
              textAlign: "left",
              marginTop: 2,
              paddingLeft: "16px",
              fontSize: "1rem",
              opacity: isHovered ? 1 : 0, 
              transition: "opacity 0.3s ease-in-out",
              position: "absolute", 
              bottom: 16,
              left: 16,
              width: "calc(100% - 32px)", 
              pointerEvents: "none",
            }}
          >
          </Typography>
        </Box>
      </a>
      {/* Display the title underneath the box only when hovered */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: "OpenSans-SemiBold",
          textAlign: "left",
          marginTop: 3,
          paddingLeft: "16px",
          fontSize: "1rem",
          opacity: isHovered ? 1 : 0, // Show title underneath only when hovered
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        {title}
      </Typography>
    </Container>
  );
};
