import React from "react";

function SectionAbout(){
    return( 

    <section id="about">
      <div className="menu">
        <h1>OM OSS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et veritatis corporis, pariatur necessitatibus alias veniam esse sapiente, ainventore vel, voluptatem eligendi repudiandae facilis placeat! Amet accusamus veniam libero placeat.'
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt possimus accusamus, unde libero minima cum ipsum, mollitia error nam corporis, fuga consequuntur nobis fugiat veritatis earum velit architecto. Veritatis, modi!
        </p>
      </div>

      <div className = "aboutbox"><img src="/images/newg1.png" alt="bild" height="100%" width="100%" ></img></div>
      <div className = "aboutbox"><img src="/images/newg2.png" alt="bild" height="100%" width="100%" ></img></div>
      <div className = "aboutbox"><img src="/images/newg3.png" alt="bild" height="100%" width="100%" ></img></div>
      <div className = "aboutbox"><video width="100%" height="100%" controls>
        <source src="rick.mp4.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video></div>

    </section>

    );
}

export default SectionAbout;