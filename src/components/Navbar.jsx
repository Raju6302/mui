import { AppBar, Avatar, Box, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { InputBase } from "@mui/material";
import Badge from "@mui/material/Badge";
import  Mail  from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));


const UserBox = styled(Box) (({theme}) => ({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none",
  }
}))

export const Navbar = () => {


  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          VIJAY DEV
        </Typography>
        <AccountCircleIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail  />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications  />
          </Badge>
          <Avatar sx={{width:"30px", height:"30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8tMqv51ENeXUxZOIzZ5P03167uR379fDoxJoElIDZqa9-qJqEieZeyG1wA&s" 
          onClick={e=>setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
        <Avatar sx={{width:"30px", height:"30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8tMqv51ENeXUxZOIzZ5P03167uR379fDoxJoElIDZqa9-qJqEieZeyG1wA&s"/>
        <Typography variant="span">Priya</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>


    </AppBar>
  );
};
