import projectData from "./Project-data";
import img from "../../Assets/img-1.jpg";
import {
  Box,
  Container,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  ListItem,
} from "@mui/material";

import { FaJs, FaHtml5, FaSass, FaCss3, FaReact } from "react-icons/fa";

import useStyles from "./styles";

type ProjectProps = {
  title: string;
};

type ProjectData = {
  title: string;
  description: string;
}[];

function Project({ title }: ProjectProps) {
  const classes = useStyles();
  const projects: ProjectData = projectData;
  console.log(projects);

  return (
    <Container sx={{ height: "100vh" }}>
      <Typography variant="h2" textAlign="center" mb="20px">
        {title}
      </Typography>
      <Box className={classes.boxcard}>
        {projects.map(({ title, description }) => (
          <Card
            key={title}
            sx={{
              maxWidth: 280,
            }}
          >
            <CardHeader
              sx={{
                background: "#f59794",
                color: "#fff",
                textAlign: "center",
              }}
              title={title}
            />
            <CardMedia
              component="img"
              height="194"
              image={img}
              alt="project logo"
            />
            <CardContent>
              <Typography>{description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Typography
        variant="h4"
        className={classes.techstack}
        sx={{
          textAlign: { sm: "none", marginTop: 10 },
        }}
      >
        Tech Stack
      </Typography>
      <ListItem
        aria-label="Tech stack"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <i className="fab fa-js">
          <FaJs />
        </i>
        <i className="fab fa-js">
          <FaReact />
        </i>
        <i className="fab fa-js">
          <FaHtml5 />
        </i>
        <i className="fab fa-js">
          <FaCss3 />
        </i>
        <i className="fab fa-js">
          <FaSass />
        </i>
      </ListItem>
    </Container>
  );
}

export default Project;
