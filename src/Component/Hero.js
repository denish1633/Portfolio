import { IconButton, Container, Stack, Typography,Box } from "@mui/material";
import { React, Component } from "react";import Typist from 'react-typist';
import main from "./Images/main.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default class Hero extends Component {
  render() {
    return (
      <Container
        maxWidth={"2xl"}
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: ["column", "column", "row"],
        }}
      >
        <Stack
          pt={"5%"}
          pl={"9%"}
          display={"flex"}
          justifyContent={"center"}
          sx={{
            display: "flex",
            width: { xs: "90%", md: "40%" },
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Typography sx={{ fontSize: { xs: 30, md: 45 } }} py={"5%"} noWrap fontFamily={"'Arvo', serif"}>
            <Typist >  
            Denish Shingala</Typist>
          </Typography>
          <Typography sx={{ fontSize: { xs: 15, md: 30 } }}  noWrap fontFamily={"'Arvo', serif"}>
            ( Developer )
          </Typography>
          <Typography sx={{ fontSize: { xs: 15, md: 20 } }} py={"5%"} fontFamily={"'Arvo', serif"}>
            A passionate individual who always thrives to work on end to end
            products which develop sustainable and scalable social and technical
            systems to create impact.
          </Typography>
          <Box display={"inline-block"}>
            <IconButton
              sx={{
                boxSizing: "border-box",
                width: "2.6rem",
                color: "#ffff",
                margin: "0 5px 10px;",
                height: "2.6rem",
                backgroundColor: "#161b22",
                borderRadius: "2.6rem",
                "&:hover": {
                  backgroundColor: "#161b22",
                  boxShadow: 40,
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: ["1.3rem"] }} />
            </IconButton>

            <IconButton
              sx={{
                boxSizing: "border-box",
                color: "#ffff",
                width: "2.6rem",
                margin: "0 5px 10px;",
                height: "2.6rem",
                backgroundColor: "#0077b5",
                borderRadius: "2.6rem",
                "&:hover": { backgroundColor: "#0077b5", boxShadow: 40 },
              }}
            >
              <LinkedInIcon sx={{ fontSize: ["1.3rem"] }} />
            </IconButton>

            <IconButton
              sx={{
                boxSizing: "border-box",
                color: "#ffff",
                width: "2.6rem",
                margin: "0 5px 10px;",
                height: "2.6rem",
                backgroundColor: "#d14836",
                borderRadius: "2.6rem",
                "&:hover": { backgroundColor: "#d14836", boxShadow: 40 },
              }}
            >
              <GoogleIcon sx={{ fontSize: ["1.3rem"] }} />
            </IconButton>

            <IconButton
              sx={{
                boxSizing: "border-box",
                color: "#ffff",
                width: "2.6rem",
                margin: "0 5px 10px;",
                height: "2.6rem",
                backgroundColor: "#1877f2",
                borderRadius: "2.6rem",
                "&:hover": { backgroundColor: "#1877f2", boxShadow: 40 },
              }}
            >
              <FacebookOutlinedIcon sx={{ fontSize: ["1.3rem"] }} />
            </IconButton>

            <IconButton
              sx={{
                boxSizing: "border-box",
                color: "#ffff",
                width: "2.6rem",
                margin: "0 5px 10px;",
                height: "2.6rem",
                backgroundColor: "#e4405f",
                borderRadius: "2.6rem",
                "&:hover": { backgroundColor: "#e4405f", boxShadow: 40 },
              }}
            >
              <InstagramIcon sx={{ fontSize: ["1.3rem"] }} />
            </IconButton>
          </Box>
        </Stack>
        <Box
          py={"5%"}
          display={"inline-flex"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <img src={main} alt={""} width={"100%"} height={"100%"} />
        </Box>
      </Container>
    );
  }
}
