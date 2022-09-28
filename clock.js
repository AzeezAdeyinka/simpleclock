timeUpdate =() =>{
    const date = new Date();

    const hour = (date.getHours());
    const minutes = (date.getMinutes());
    const seconds = (date.getSeconds());
    clock.innerHTML= `${hour} : ${minutes} : ${seconds}`

}
setInterval( timeUpdate, 1000);

const setAlarm = ()=>{
    let alarmhrs = hour.value;
    let alarmmin = minutes.value;
}