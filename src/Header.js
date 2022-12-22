import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import {NavLink} from "./NavbarElements";
import {Button, Toolbar} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import {signOut} from "firebase/auth"
function Header() {
    const logout = async ()=> {
        await signOut(auth)
    }
    return(

        <AppBar color='inherit'>
            <Toolbar>
                            <NavLink to='/' activeStyle>
                                Home
                            </NavLink>
                                <NavLink to='/about' activeStyle>
                                    About Us
                                </NavLink>
                            <NavLink to='/ourTeam' activeStyle>
                                Our Team
                            </NavLink>
                            <NavLink to='/PracticeAreas' activeStyle>
                                Practice Areas
                            </NavLink>
                            <NavLink to='/contact' activeStyle>
                                Contact Us
                            </NavLink>
                            {
                                auth.currentUser === null
                                ?
                                    <NavLink to='/SignIn' activeStyle>
                                        Sign In
                                    </NavLink>
                                :
                                    <li>{auth.currentUser.email}</li>
                            }
            </Toolbar>
    </AppBar>
    )
}
export default Header;