let btn = document.querySelector('.btn');
let vypocet = document.getElementById('vypocet');
let x, count,rozdil;

btn.addEventListener('click', () => {
    x = document.querySelectorAll('.form');

    count = (x[0].value * 1) + (x[1].value * 2) + (x[2].value * 5) + (x[3].value * 10) + (x[4].value * 20) + (x[5].value * 50) + 
    (x[6].value * 100) + (x[7].value * 200) + (x[8].value * 500) + (x[9].value * 1000) + (x[10].value * 2000) + (x[11].value * 5000);

 rozdil = x[12].value; 

rozdil -= count;



vypocet.innerHTML = "<p>Celkový součet je: " + count + "kč</p>";
vypocet.innerHTML += "<p>Po odečtení činí: " + rozdil + "kč</p>";

});







