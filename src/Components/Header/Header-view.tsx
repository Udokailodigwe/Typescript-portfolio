import { Container, Box, Typography } from "@mui/material";
import TypeWriterEffect from "react-typewriter-effect";

import profilepix from "../../Assets/image.jpeg";
import useStyles from "./styles";

function Header() {
  const classes = useStyles();
  return (
    <Container sx={{ height: "80vh" }}>
      <Box
        className={classes.header__main}
        sx={{ display: { xs: "block", md: "flex" } }}
      >
        <Box>
          <Typography
            className={classes.header__text}
            fontSize="25px"
            lineHeight="40px"
          >
            Hi! welcome to the my section of the web where everything web
            development is discussed. This site simplifies several topics in web
            development, from front-end, backend and also devops best practices.
            Stay tuned for new discussions everyday, and a guide to build
            interesting projects will be published weekly. so relax and enjoy.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src={profilepix}
            className={classes.profile__picture}
            alt="profile"
          />
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "#f59880",
              fontWeight: 100,
              textAlign: "center",
            }}
            startDelay={1000}
            cursorColor="rgba(255, 255, 255)"
            multiText={[
              "Software Engineer",
              "Front-end Developer",
              "Back-end Developer",
              "Freelancer",
            ]}
            multiTextDelay={1000}
            typeSpeed={30}
            multiTextLoop={true}
            hideCursor="true"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Header;
