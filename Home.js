import React from "react";

class Home extends React.Component{

    render() {
        return( <div className="container">
        <div id="flip"><span></span>
        <span></span>
        <span></span></div>
    <div id="panel"><a href="#home">Hem</a></div>
    <div id="panel1"><a href="#service">Tjänster</a></div>
    <div id="panel2"><a href="#about">Om oss</a></div>
    <div id="panel3"><a href="#contact">Kontakt</a></div> 

        <nav className="navbar">
        <ul>
            <li><a href="#home">Hem</a></li> 
            <li><a href="#service">Tjänster</a></li>
            <li><a href="#about">Om oss</a></li>
            <li><a href="#contact">Kontakt</a></li>
        </ul>

        </nav>

        <section id="home">
        <div className= "menu">
            <b>
            <p> Umeå Wheels</p>
            <br></br>
            <br></br>
            <p>Telefonnummer: 072-3777135</p> 
            <br></br>
            <br></br>
            <p>Öppettider: 16:00 - 19:00 </p>
            <br></br>
            <br></br>
            <p>Adress: Fysikgränd 23A</p>
            <br></br>
            </b>
            
            
            
            <a href="buy.html">KÖPA</a>
            <a href="#home">LAGA</a>
            <a href="#home">HYRA</a>

        </div>
        </section>

    <section id="service">
        <div className = "menu">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
            <img src="stockbild.jpg" height="50%" width="90%" alt="bild för köp meny"></img>
            <a href="#home">KÖPA</a>
        </div>

        <div className = "menu">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
            <img src="repairstock.png" height="50%" width="90%" alt="bild för laga meny"></img>
            <a href="#home">LAGA</a>
        
        </div>

    <div className = "menu">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>

        <img src="rentstock.png" height="50%" width="90%" alt="bild för hyra meny"></img>
        <a href="#home">HYRA</a>
        
    </div>
    </section>

    <section id="about">
      <div className="menu">
        <h1>OM OSS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et veritatis corporis, pariatur necessitatibus alias veniam esse sapiente, ainventore vel, voluptatem eligendi repudiandae facilis placeat! Amet accusamus veniam libero placeat.'
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt possimus accusamus, unde libero minima cum ipsum, mollitia error nam corporis, fuga consequuntur nobis fugiat veritatis earum velit architecto. Veritatis, modi!
        </p>
      </div>

      <div className = "aboutbox"><img src="newg1.png" alt="bild" height="100%" width="100%" ></img></div>
      <div className = "aboutbox"><img src="newg2.png" alt="bild" height="100%" width="100%" ></img></div>
      <div className = "aboutbox"><img src="newg3.png" alt="bild" height="100%" width="100%" ></img></div>
      <div className = "aboutbox"><video width="100%" height="100%" controls>
        <source src="rick.mp4.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video></div>

    </section>

    <section id="contact">
    <div className = "menu">
        <b>
        <p> Kontakta oss </p>
        <br></br>
        <br></br>
        Telefonnummer: 072-3777135 <br></br>
        Mail: info@umeawheels.se 
        <br></br>
        Öppettider: 16:00 - 19:00
        <br></br>
        <br></br>
        Adress: Fysikgränd 23A
        </b>
        <br></br>
        <br></br>

    </div>

        <div className = "contactform">
            <form action="mailto:william.dingstad@hotmail.se"   method="post"   enctype="text/plain">
                <p>Namn: <br></br></p>
                <input type="text" onfocus="focusText(this)" onblur="resetFocus(this)"  name="nae" > <br></br>  </input>
                <p>E-mail:<br></br></p>
                <input type="text" onfocus="focusText(this)" onblur="resetFocus(this)" name="mail" > <br></br></input>
                <p>Telefonnummer:<br></br></p>
                <input type="text" onfocus="focusText(this)" onblur="resetFocus(this)" name="number" > <br></br></input>
                <p>Meddelande:<br></br></p>
                <input type="text" onfocus="focusText(this)" onblur="resetFocus(this)" name="comment" ><br></br></input>
                <input type="submit"  value="Skicka"></input>
            </form> 
            
            <div id = "Text1" > div Text 1, this text has 25% opacity</div>
            <div id = "Text2" > div Text 2, this text has 75% opacity and a 1 second delay</div>
            <button new id="button3">Klicka för att dimma texten</button>

            <button new id="button1">MAKE THE BIKE GO VROOM!!!</button>
        </div>
        </section>

    </div>
        );
    }
}

export default Home;