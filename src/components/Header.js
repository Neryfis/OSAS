import React from "react";
import './Header.css'

class Header extends React.Component {
    render(){
        return(
            <section className="Header">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" 
                alt="Star Wars Logo" 
                className="StarWarsImg"
                />
            </section>
        )
    }
}

export default Header;