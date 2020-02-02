import React from "react";
import { Button } from "antd";
import "./main.css";

const Header = () => {
    const onLogOutClickHandler = () => {
        localStorage.setItem("isAuthenticated", "false");
    }
    return(
        <header>
            <Button onClick={onLogOutClickHandler}>Log out</Button>
        </header>
    )
}

export default Header;
