import React, { useState } from 'react';
import H2Heading from '../Heading/H2Heading';

export default function Formcompo(props) {
    const [title, settitle] = useState("");
    
    function uppercase(e){
        settitle(title.toUpperCase());
    }
    
    return(
        <section>
            <H2Heading heading={"Convert text to Uppercase"}/>                          
            <input id="input1" type="text" name="title" placeholder="Enter a text here..." vaule={title} onChange={(e)=> settitle(e.target.value)} className='field' autoComplete='off'/><br />
            <button type="submit" className="linkbtn submitbtn" onClick={uppercase}>Uppercase</button>
                        
            <h3>{title}</h3>
        </section>
    );
}
