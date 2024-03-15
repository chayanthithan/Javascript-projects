function displayTime(){
    let dateTime=new Date();
  
    let hours=dateTime.getHours();
    let minutes=dateTime.getMinutes();
    let seconds=dateTime.getSeconds();
    if(hours>12){
        hours=hours-12;
        document.getElementById('season').innerHTML="PM"
    }
    
    // if(strMinutes.length==1){
    //     strMinutes=0+strMinutes;
    // }
    // if(strSeconds.length==1){
    //     strSeconds=0+strSeconds;
    // }
    document.getElementById('hours').innerHTML=hours
    document.getElementById('minutes').innerHTML=minutes
    document.getElementById('seconds').innerHTML=seconds
   

    //to show dates
    let dates=dateTime.toDateString()
    document.getElementById('date').innerHTML=dates
    
}
setInterval(displayTime,500)