import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const pages = ['Products', 'Pricing', 'Blog'];
export default class NavBbar extends React.Component{ 
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
render(){
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "inline-flex", md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={
                this.state.isOpen
                  ? () => this.setStatus(false)
                  : () => this.setStatus(true)
              }
              color="inherit"
              sx={{ order: 1, display: { xs: 'flex', md: 'none' }}}
            >
              {this.state.isOpen ? (
                    <CloseIcon color={"black"} />
                  ) : (
                    <MenuIcon color={"black"} />
                  )}
            </IconButton>
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ order: 2, display: { xs: 'inline', md: 'none' },justifySelf:"center",margin:"auto" }}
          >
            L
          </Typography>
          <Box sx={{ order: 3, display: { xs: "inline-flex", md: 'none' } }}>
            {this.state.isOpen ? (
                <MenuList
                  sx={{
                    width: "95vw",
                    float: " none",
                    display: "block",
                    textAlign: "left",
                    order: 3
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem>
                      {" "}
                      <Button key={page}>
                        <Typography textAlign="center" color={"black"}>
                          {page}
                        </Typography>
                      </Button>
                    </MenuItem>
                  ))}
                </MenuList>
              ) : null}
              </Box>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );}
};

