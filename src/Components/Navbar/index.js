import React, { useState } from "react";
import Logo from "../Img/yassu_logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import '../Navbar/navbar.css';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
        },
        {
            text: "Fotos",
            icon: <InfoIcon />,
        },
        {
            text: "Sobre Nós",
            icon: <InfoIcon />,
        },
        {
            text: "Contato",
            icon: <PhoneRoundedIcon />,
        },
    ];

    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="logo yassu" />
            </div>

            <div className="navbar-links-container">
                <a href="/">Home</a>
                <a href="/photos">Fotos</a>
                <a href="/sobre">Sobre Nós</a>
                <a href="/Contact">Contato</a>
            </div>

            <div className="nav-bar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};
export default Navbar;