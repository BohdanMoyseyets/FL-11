function formatTime(num) {
    let days = 0, hours = 0, minutes = 0;
     if(num>3599){
        days = ~~(num/3600);
        num = num - days * 3600; 
    }
    if(num>59){
        hours = ~~(num/60);
        num = num - hours * 60;
    }
    minutes = num;
    return days + " day(s) " + hours +" hour(s) " + minutes + " minute(s)."
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));