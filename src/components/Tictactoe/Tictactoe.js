import React, { useState, useEffect } from 'react';
import './Tictactoe.css'
import H2Heading from '../Heading/H2Heading';

export default function Tictactoe(){
    const boxarr = [1,2,3,4,5,6,7,8,9];

    const succarr = [
        '1:2:3','1:3:2','2:1:3','2:3:1','3:2:1','3:1:2',
        '4:5:6','4:6:5','5:6:4','5:4:6','6:4:5','6:5:4',
        '7:8:9','7:9:8','8:7:9','8:9:7','9:8:7','9:7:8',
        '1:4:7','1:7:4','4:7:1','4:1:7','7:4:1','7:1:4',
        '2:5:8','2:8:5','5:8:2','5:2:8','8:5:2','8:2:5',
        '3:6:9','3:9:6','6:9:3','6:3:9','9:6:3','9:3:6',
        '1:5:9','1:9:5','5:9:1','5:1:9','9:5:1','9:1:5',
        '3:5:7','3:7:5','5:7:3','5:3:7','7:5:3','7:3:5'
    ];

    const [allfilled_x, setallfilled_x] = useState([]);
    const [allfilled_o, setallfilled_o] = useState([]);

    const [player, setplayer] = useState("x");
    const [winner, setwinner] = useState("0");
    const [winnername, setwinnername] = useState("");

    const [no_click, setno_click] = useState(1);

    useEffect(() => {
        console.log("use effect start");
        if(winner == 0){
            checkwinner(allfilled_x,allfilled_o);              
        }else{
            console.log(winner);
        }
    },[allfilled_x, allfilled_o, winner, no_click]);

    function checkwinner(allfilled_x, allfilled_o){
        if(allfilled_x.length > 2){
            for(let i=0;i<allfilled_x.length;i++){                
                for(let j=i+1;j<allfilled_x.length;j++){                    
                    let checkitem_x = allfilled_x[i]+":"+allfilled_x[j]+":"+allfilled_x[j+1];                    
                    if(succarr.includes(checkitem_x)){
                        setwinnername("Winner is x");
                        setwinner(1);
                        setplayer("c");
                        document.getElementById(allfilled_x[i]).classList.add("suss");
                        document.getElementById(allfilled_x[j]).classList.add("suss");
                        document.getElementById(allfilled_x[j+1]).classList.add("suss");
                    }
                }
            }
        }

        if(allfilled_o.length > 2){
            for(let k=0;k<allfilled_o.length;k++){                
                for(let l=k+1;l<allfilled_o.length;l++){                    
                    let checkitem_o = allfilled_o[k]+":"+allfilled_o[l]+":"+allfilled_o[l+1];
                    if(succarr.includes(checkitem_o)){
                        setwinnername("Winner is o");
                        setwinner(1);
                        setplayer("c");
                        document.getElementById(allfilled_o[k]).classList.add("suss");
                        document.getElementById(allfilled_o[l]).classList.add("suss");
                        document.getElementById(allfilled_o[l+1]).classList.add("suss");
                    }
                }
            }
        }
        
    }   
    
    
    function updateValue(item){  
        //console.log(no_click);      
        if(no_click < 10){
            if(winner == 0){        
                if(document.getElementById(item).getAttribute("val") != "12" && document.getElementById(item).getAttribute("val") != "13"){            
                    document.getElementById(item).innerHTML = player;
                    if(player == 'x'){
                        document.getElementById(item).setAttribute("val", "12");
                        setplayer('o'); 
                        setallfilled_x([...allfilled_x, item]);
                    }else {
                        document.getElementById(item).setAttribute("val", "13");
                        setplayer('x');
                        setallfilled_o([...allfilled_o, item]);
                    }
                    setno_click(no_click+1);
                }else{
                    alert("Please fill other column.");
                }        
            }
        }else{
            setwinner(1);
        }
    }

    function resetgame(){
        console.log("Reset");
        setallfilled_x([]);
        setallfilled_o([]);
        setplayer('x');
        setwinner('0');
        setwinnername('');  
        setno_click(1);      
        for(let i=1;i<10;i++){
            document.getElementById(i).setAttribute("val", i);
            document.getElementById(i).classList.remove('suss');
            document.getElementById(i).innerHTML = '';
        }        
    }

    return(
        <section>
            <H2Heading heading="Tic tac toe" />
            { player == 'c' ? '' : <h4>Next player: "{player}"</h4> }
            { winnername != '' ? <h4 className='winner'>{winnername}</h4> : '' }
            <div className='Tictactoe-wrapper'>
                {   boxarr.map((item, index)=>{
                        return <span className='tictactoe_box' id={item} val={item} key={index} onClick={() => updateValue(item)}></span>
                    })
                }               
            </div>
            { winner == '1' ? <button className='reset' onClick={() => resetgame()}>Reset</button> : '' }
        </section>
    )
}