import React from "react";

import {
  Box,
  Toolbar,
  IconButton,
  Stack,
  Typography,
  MenuList,
  Container,
  styled,
  Button,
  MenuItem,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const pages = ["Home", "Education", "Projects", "Contact"];

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };

    this.setStatus = this.setStatus.bind(this);
  }
  setStatus(status) {
    this.setState({
      isOpen: status,
    });
  }

  render() {
    return (
      <Box px={"10%"} py={"15px"} color={"transparent"} maxWidth={"full"}>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Stack direction={"row"} sx={{ display: {md: "none" } }}>
            <Button
              sx={{ color: "#064663"}}
              onClick={
                this.state.isOpen
                  ? () => this.setStatus(false)
                  : () => this.setStatus(true)
              }
            >
              {this.state.isOpen ? (
                <CloseIcon color={"black"} />
              ) : (
                <MenuIcon color={"black"} />
              )}
            </Button>
            <Box alignContent={"center"} justifyContent={"center"}>
              <Typography variant="h6" color={"#064663"} noWrap fontFamily={"'Arvo', serif"}>
                
                Denish A. Shingala
              </Typography>
              </Box>
          </Stack>

          {this.state.isOpen ? (
            <Stack
              direction="column"
              justifyItems="center"
              alignItems="center"
              spacing={2}
            >
              {pages.map((page) => (
                <Button key={page} >
                  <Typography sx={{ fontSize: { xs: 13, md: 15 } }} align="center" color={"#064663"} fontFamily={"'Arvo', serif"}>
                    {page}
                  </Typography>
                </Button>
              ))}
            </Stack>
          ) : null}
        </Box>

        <Box display="flex" justifyContent={"space-between"}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={"#064663"}
            justifyContent={"center"}
            alignContent={"center"}
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}fontFamily={"'Arvo', serif"}
          >
            Denish A. Shingala
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={page} sx={{ color: "#064663", display: "block" ,}}>
                {page}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
}
