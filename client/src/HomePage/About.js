import React from 'react';
import './../styles.css'; 

const About = () => {
  return (
    <div className="about-section">
      <hr />
      <h4>About Us</h4>
      <p>
        WavePulse: Real-time Content Analytics of Radio Livestreams
        <br/>
        Radio remains a pervasive medium for mass information dissemination, 
        with AM/FM stations reaching more Americans than either smartphone-based social networking or live television. 
        Increasingly, radio broadcasts are also streamed online and accessed over the Internet. 
        We present WavePulse, a framework that records, documents, and analyzes radio content in real-time. 
        While our framework is generally applicable, 
        we showcase the efficacy of WavePulse in a collaborative project with a team of political scientists focusing on the 2024 Presidential Elections. 
        We use WavePulse to monitor livestreams of 396 news radio stations over a period of three months, 
        processing close to 500,000 hours of audio streams. 
        These streams were converted into time-stamped, 
        diarized transcripts and analyzed to track answer key political science questions at both the national and state levels. 
        Our analysis revealed how local issues interacted with national trends, providing insights into information flow. 
        Our results demonstrate WavePulse's efficacy in capturing and analyzing content from radio livestreams sourced from the Web.
      </p>

      <hr />
      
    </div>
  );
};

export default About;
