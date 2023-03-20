import React from "react";

function SectionService(){
    
    return(
        <section id="service">
        <div className = "menu">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
            <img src="/images/stockbild.jpg" height="50%" width="90%" alt="bild för köp meny"></img>
            <a href="#home">KÖPA</a>
        </div>

        <div className = "menu">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
            <img src="/images/repairstock.png" height="50%" width="90%" alt="bild för laga meny"></img>
            <a href="#home">LAGA</a>
        
        </div>

    <div className = "menu">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>

        <img src="/images/rentstock.png" height="50%" width="90%" alt="bild för hyra meny"></img>
        <a href="#home">HYRA</a>
        
    </div>
    </section>
    );
}

export default SectionService;