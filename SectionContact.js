import React from "react";
import ReCAPTCHA from "react-google-recaptcha";


function SectionContact(){
    const onChange = () => {};
    return(

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
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7043.102644419189!2d20.3099823!3d63.8120427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d2914a70278196!2sUme%C3%A5%20Wheels!5e0!3m2!1ssv!2sse!4v1675176359116!5m2!1ssv!2sse" 
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>

        <div className = "contactform">
            <form>
            <label>
                <p>Namn: </p>
                <input type="txt" nme="name" />
                <br></br>

                <p>Telefon:</p>
                <input type="txt" nme="name" />
                <br></br>

                <p>E-mail:</p>
                <input type="txt" nme="name" rows={40} cols={40}/>
                <br></br>

                <p>Meddelande:</p>
                <input type="txt" nme="name" style={{  height: '100px' ,width: '80%'}} />


            </label>
            <input type="submit" value="Submit" />
            <ReCAPTCHA sitekey="6Lcl-v4kAAAAAAyF5I2Dp4QhhPIKhumKS6Kvuq1r" onChange={onChange}/>

        </form>

            

        </div>
        </section>

    );
}

export default SectionContact;