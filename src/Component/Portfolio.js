import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

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
  constructor() {
    super();
    this.filterGroup = this.filterGroup.bind(this);
    this.state = {
      filterButton: "B",
    };
  }
  filterGroup = (evt) => {
    this.setState({
      filterButton: evt.target.value,
    });
  };

  render() {
    return (
      <Box >
        <Typography sx={{fontSize:{ xs: 30, md: 50 }}} pb={"5%"} align="center" fontFamily={"'Arvo', serif"}>
          My Projects
        </Typography>
        <Box pb={"5%"} display={"flex"} alignContent={"center"} justifyContent={"center"}>
          <Button style={styles} value={"A"} onClick={this.filterGroup}>
            A
          </Button>
          <Button style={styles} value={"B"} onClick={this.filterGroup}>
            B
          </Button>
          <Button style={styles} value={"C"} onClick={this.filterGroup}>
            C
          </Button>
          <Button style={styles} value={"D"} onClick={this.filterGroup}>
            D
          </Button>
        </Box>
        <Box display={"flex"} alignContent={"center"} justifyContent={"center"}>
          {itemData
            .filter((item) => item.group === this.state.filterButton)
            .map((item) => (
              <Card sx={{ maxWidth: "70%", maxHeight: "70%", marginX: "2%" }}>
                <CardMedia
                  component="img"
                  height="65%"
                  image={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" fontFamily={"'Arvo', serif"}>
                    Lizard
                  </Typography>
                </CardContent>
              </Card>
            ))}
        </Box>
      </Box>
    );
  }
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    group: "A",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    group: "B",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    group: "B",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    group: "C",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    group: "C",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    group: "D",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    group: "D",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    group: "D",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    group: "D",
  },
];
