document.getElementById("listeUlke").addEventListener("change",yer)
let sonuc = document.getElementById("sonucBaslık")

function yer(){
    sonuc.classList.remove("ca","usa","try","normal")
    let ulke=document.getElementById("listeUlke").selectdIndex

    if(ulke==0){
    document.body.style.backgroundColor="red"
    sonuc.innerHTML="kanada nifusu 47mm"
    sonuc.classList.add("ca");
    document.getElementById("logo").setAttribute("src","canada.png")
   }
    
   else if(ulke==1){
    document.body.style.backgroundColor="blue"
    sonuc.innerHTML="Amerika nifusu 56mm"
    sonuc.classList.add("usa");
    document.getElementById("logo").setAttribute("src","amerika.png")
   }
   
   else if(ulke==2){
    document.body.style.backgroundColor="red"
    sonucBaslık.innerHTML="TÜRKİYE nifusu 31mm"
    sonuc.classList.add("try");
   }
   console.log(ulke)
}
function merhaba(){
    let ad

    ad=document.getElementById("txtAd").value 
}