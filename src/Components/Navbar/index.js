import React, { useState } from "react";
import Logo from "../Img/yassu_logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import '../Navbar/navbar.css';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="logo yassu" />
            </div>

            <div className="navbar-links-container">
                <a href="/">Home</a>
                <a href="/photos">Fotos</a>
                <a href="/sobre">Sobre Nós</a>
                <a href="/contact">Contato</a>
            </div>

            <div className="nav-bar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box sx={{ width: 200 }} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
                    <List className="nav-links-lista">
                        <div className="nav-menu-icon"><HiOutlineBars3/></div>
                        <a href="/"><HomeIcon/>Home</a>
                        <a href="/photos"><ImageOutlinedIcon/>Fotos</a>
                        <a href="/sobre"><PriorityHighOutlinedIcon/>Sobre Nós</a>
                        <a href="/contact"><PhoneRoundedIcon/>Contato</a>
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};
export default Navbar;