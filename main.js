let sek = document.querySelector(".sek")
let min = document.querySelector(".min")
let soat = document.querySelector(".soat")




setInterval(() => {
    let date = new Date();
    let sekund = date.getSeconds() / 60;
    let minut = (date.getMinutes() + sekund) / 60;
    let soatt = (date.getHours() + minut) / 12;

    sek.style.transform = `rotate(${sekund * 360}deg)`
    min.style.transform = `rotate(${minut * 360}deg)`
    soat.style.transform = `rotate(${soatt * 360}deg)`

}, 1000);
