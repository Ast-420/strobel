import Link from 'next/link';
import { useState } from "react";



const NavItem = ({href, name, icon, handleMenu}) => {

    const [active, setActive] = useState("/")
    
    let backgroundColor = "#4E9940"
    let textColor = "white"

    switch (href) {
        case "/photovoltaik":
            backgroundColor = "#BCE4FA",
            textColor = "black"
            break;
        case "/forstwirtschaft":
            backgroundColor = "#4E9940"
            break;
        default:
            
    }

    const styleObj = {
    link: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        textDecoration: "none",
        color: textColor,
        backgroundColor: backgroundColor
    },
    menuItem: {
        display: "block",
        color: textColor,
        paddingTop: "0.75rem", 
        paddingBottom: "0.75rem", 
        textAlign: "center",
        fontSize: "1.23rem",
        "&:hover": {
          color: "#78ba00"
        },
        textDecoration: "none"
    }
    }
    


    

    return (
        
        <Link href={href} style={styleObj.link} onClick={() => handleMenu()}>
            <span style={styleObj.menuItem}>{name}  {icon}</span>
        </Link>
    
    )
}

export default NavItem
