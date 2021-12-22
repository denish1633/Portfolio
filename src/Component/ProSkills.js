import html from "./Images/html.png";
import css from "./Images/css-3.png";
import javascript from "./Images/javascript.png";
import react from "./Images/react.png";
import { Button, Container, Stack, Typography, Box } from "@mui/material";
import { React, Component } from "react";
import skills from "./Images/skills.svg";

export default class Hero extends Component {
  render() {
    return (
      <Container
        maxWidth={"3xl"}
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
          <Typography fontFamily={"'Arvo', serif"}
            sx={{ fontSize: { xs: 30, md: 50 } }}
            py={"5%"}
            align="center"
          >
            Pro Skills
          </Typography>
          <Typography fontFamily={"'Arvo', serif"}
            sx={{
              fontSize: { xs: 13, sm: 15, md: 20 },
            }}
            py={"5%"}
            align="center"
          >
            A passionate individual who always thrives to work on end to end
          </Typography>
          <Typography fontFamily={"'Arvo', serif"}
            sx={{
              fontSize: { xs: 13, sm: 15, md: 20 },
            }}
            py={"5%"}
            align="center"
          >
            A passionate individual who always thrives to work on end to end
          </Typography>
          <Typography fontFamily={"'Arvo', serif"}
            sx={{
              fontSize: { xs: 13, sm: 15, md: 20 },
            }}
            py={"5%"}
            align="center"
          >
            A passionate individual who always thrives to work on end to end
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
            <Button
              sx={{
                boxSizing: "border-box",
                color: "#ffff",
                width: "64px",

                height: "64px",
              
                borderRadius: "32px",
                "&:hover": { backgroundColor: "#ffff", boxShadow: 40 },
              }}
            >
              >
              <img src={html} alt={""} height={"32px"} width={"32px"} />
            </Button>
            <Button
              sx={{
                boxSizing: "border-box",
                color: "#ffff",
                width: "64px",

                height: "64px",
              
                borderRadius: "32px",
                "&:hover": { backgroundColor: "#ffff", boxShadow: 40 },
              }}
            >
              <img src={css} alt={""} height={"32px"} width={"32px"} />
            </Button>
            <Button
              sx={{
                boxSizing: "border-box",
                color: "#ffff",
                width: "64px",

                height: "64px",
              
                borderRadius: "32px",
                "&:hover": { backgroundColor: "#ffff", boxShadow: 40 },
              }}
            >
              <img src={javascript} alt={""} height={"32px"} width={"32px"} />
            </Button>
            <Button
            variant=" contained"
              sx={{
                boxSizing: "border-box",
                color: "#ffff",
                width: "64px",

                height: "64px",
              
                borderRadius: "32px",
                "&:hover": { backgroundColor: "#ffff", boxShadow: 40 },
              }}
            >
              <img src={react} alt={""} height={"32px"} width={"32px"} />
            </Button>
          </Box>
        </Stack>
        <Box
          py={"5%"}
          mr={"5%"}
          display={"inline-flex"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <img src={skills} alt={""} width={"100%"} height={"100%"} />
        </Box>
      </Container>
    );
  }
}
