import blogData from "./Blog-data";
import img from "../../Assets/img-3.jpg";

import {
  Container,
  ImageListItem,
  Typography,
  Box,
  ImageList,
  Button,
} from "@mui/material";

type BlogProps = {
  handleBlogButton: () => void;
  title: string;
};

function Blog({ handleBlogButton, title }: BlogProps) {
  const blogs = blogData;
  console.log(blogs);

  return (
    <Container sx={{ height: "100vh" }}>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{
          marginTop: { md: 10 },
          marginBottom: { md: 5 },
        }}
      >
        {title}
      </Typography>
      {blogs.map(({ title, subtitle, description }) => (
        <Box
          key={title}
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
          }}
        >
          <ImageList>
            <ImageListItem>
              <img src={img} alt="blog logo" />
            </ImageListItem>
          </ImageList>

          <Box
            sx={{
              marginLeft: -30,
            }}
          >
            <Typography variant="h5">{title}</Typography>
            <Typography sx={{ color: "#f59774" }}>{subtitle}</Typography>
            <Typography sx={{ lineHeight: 3 }}>{description}</Typography>
            <Button variant="outlined" color="error" onClick={handleBlogButton}>
              Link to blog content
            </Button>
          </Box>
        </Box>
      ))}
    </Container>
  );
}

export default Blog;
