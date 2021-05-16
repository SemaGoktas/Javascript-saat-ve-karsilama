
    let fullName = prompt("Adiniz: ");
    let myName = document.querySelector("#myName");
    myName.innerHTML = `${myName.innerHTML}${fullName}`;
    
function digitclock(){
    var now = new Date();
    var saat = now.getHours();
    var dk = now.getMinutes();
    var sn = now.getSeconds();
    var gun = now.getDate();
    var aylar =["Ocak","Subat","Mart","Nisan","Mayis","Haziran","Temmuz","Agustos","Eylul","Ekim","Kasim","Aralik"];
    var ay = [now.getMonth()];
    var yil = now.getFullYear();
    var gunler = ["Pazartesi","Sali","Carsamba","Persembe","Cuma"];
    var gi = gunler[now.getDay()];
    
    saat = (saat<10)? "0"+saat:saat;
    dk = (dk<10)? "0"+dk:dk;
    sn = (sn<10)? "0"+sn:sn;
    
    var zaman = saat+":"+dk+":"+sn;
    var saatt = document.getElementById('saat').innerHTML = zaman;

    gun = (gun<10)? gun:gun;
    var tarih = gun+ " "+ay+" "+yil+" "+gi;
    var tarihh = document.getElementById('tarih').innerHTML = tarih;
}

var interval = setInterval(digitclock, 1000);