import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box,Stack } from "@mui/material";
import graduate from "./Images/graduation.svg"

const styles = {
  backgroundColor: "#ECB365",
  border: "none",
  color: "#ffff",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration: "none",
  margin: "5px",
  cursor: "pointer",
  borderRadius: "16px",
  "&:hover": {
    backgroundColor: "#0000",
  },
};

export default class StandardImageList extends React.Component {

  render() {
    return (
      <Box >
        <Typography  sx={{fontSize:{ xs: 30, md: 50 }}} pb={"5%"}align="center" fontFamily={"'Arvo', serif"}>
          My Education
        </Typography>
        
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyItems={"center"}>
         
              <Card sx={{ width: "70%", height: "70%", marginX: "2%" }}  >
                <Box backgroundColor={"#04293A"} pt={"2%"} px={"2%"}>
                    <Stack  display={"flex"} direction={["column","row"]} justifyContent={"space-between"} alignContent={"center"}>
                  <Typography gutterBottom  sx={{fontSize:{ xs: 20, md: 30 }}} nowrap component="div" color={"#ECB365"} fontWeight={"bold"} fontFamily={"'Arvo', serif"}>
                    York University
                  </Typography>
                  <Typography gutterBottom sx={{fontSize:{ xs: 20, md: 30 }}} component="div"  color={"#ECB365"} fontFamily={"'Arvo', serif"}>
                    Jan-2021-Current
                  </Typography>
                  </Stack>
                  <Typography gutterBottom sx={{fontSize:{ xs: 20, md: 30 }}} component="div"  color={"#ECB365"} fontFamily={"'Arvo', serif"}>
                  Bachelors of Computer Science
                  </Typography>
                  
                </Box>

                <Box display={"flex"}>
                    <Stack>
                  <Typography gutterBottom sx={{fontSize:{ xs: 15, md: 25 }}} component="div" fontFamily={"'Arvo', serif"}>
                  I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.
                  </Typography>
                  <Typography gutterBottom sx={{fontSize:{ xs: 15, md: 25 }}} component="div" fontFamily={"'Arvo', serif"}>
                  I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.
                  </Typography>
                  
                  <Typography gutterBottom sx={{fontSize:{ xs: 15, md: 25 }}} component="div" fontFamily={"'Arvo', serif"}>
                  I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.
                  </Typography>
                  </Stack>
                </Box>
              </Card>
          
        </Box>
      </Box>
    );
  }
}

