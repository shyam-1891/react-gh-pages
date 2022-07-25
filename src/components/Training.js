function Training() {

    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
     //console.log(datetime);         
    return(        
        <section><h1>Hello Today's date and time: {datetime}</h1></section>
    );
}

export default Training;
