import React from "react";


class Home extends React.Component{

    render() {
        return( 

        <div className="container">
        <nav className="navbar">
        <ul>
            <li><a href="#home">Hem</a></li> 
            <li><a href="#service">Tjänster</a></li>
            <li><a href="#about">Om oss</a></li>
            <li><a href="#contact">Kontakt</a></li>
        </ul>
        </nav>
        <div id="flip"><span></span>
        <span></span>
        <span></span></div>
        
        <div id="panel"><a href="#home">Hem</a></div>
        <div id="panel1"><a href="#service">Tjänster</a></div>
        <div id="panel2"><a href="#about">Om oss</a></div>
        <div id="panel3"><a href="#contact">Kontakt</a></div> 


    

    </div>
       ); 
    }
}

export default Home;