import { Container, Typography, Box, TextField, ListItem } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import {
  FaCopyright,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";

type ContactProps = {
  title: string;
};

function Contact({ title }: ContactProps) {
  return (
    <Container sx={{ height: "100vh" }}>
      <Typography variant="h2" textAlign="center" mt="20px">
        Contact
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: " 100px",
        }}
        autoComplete="off"
      >
        <TextField
          style={{
            width: 350,
          }}
          label="name"
          variant="outlined"
        />
        <TextField
          style={{
            width: 350,
          }}
          label="email"
          variant="outlined"
        />
        <TextareaAutosize
          id="outlined-textarea"
          // variant="outlined"
          style={{
            width: 350,
            height: 100,
          }}
          placeholder="message"
        />
      </Box>

      <Box
        areia-label="footer"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <ListItem aria-label="Copyright">
            <i className="fab fa-copyright">
              <FaCopyright />
            </i>
          </ListItem>
          <i>Udoka</i>
        </Box>
        <ListItem
          aria-label="social media icons"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <i className="fab fa-linkedin">
            <FaLinkedin />
          </i>
          <i className="fab fa-twitter">
            <FaTwitter />
          </i>
          <i className="fab fa-facebook">
            <FaFacebook />
          </i>
          <i className="fab fa-instagram">
            <FaInstagram />
          </i>
          <i className="fab fa-medium">
            <FaMedium />
          </i>
        </ListItem>
      </Box>
    </Container>
  );
}

export default Contact;
