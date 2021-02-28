

document.getElementById("searchbar").addEventListener("click",function(){
    document.getElementById("textbar").style.width = 94 + "%";
    document.getElementById("textbarself").style.padding = 15 + "px";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("searchbarself").style.display = "inline-block";
    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[1].value = "";
})

document.getElementById("searchbarclose").addEventListener("click",function(){
    document.getElementById("textbar").style.width = 0;
    document.getElementById("textbarself").style.padding = 0 + "px";
    document.getElementById("searchbar").style.display = "inline-block";
    document.getElementById("searchbarself").style.display = "none";
    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[1].value = "";
})

//UST NAV BİTTİ SM KADAR


document.getElementById("searchbar2").addEventListener("click",function(){
    document.getElementById("textbar2").style.width = 94 + "%";
    document.getElementById("textbarself2").style.padding = 15 + "px";
    document.getElementById("searchbar2").style.display = "none";
    document.getElementById("searchbarself2").style.display = "inline-block";
    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[1].value = "";
})


document.getElementById("searchbarclose2").addEventListener("click",function(){
    document.getElementById("textbar2").style.width = 0;
    document.getElementById("textbarself2").style.padding = 0 + "px";
    document.getElementById("searchbar2").style.display = "inline-block";
    document.getElementById("searchbarself2").style.display = "none";
    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[1].value = "";
})



document.getElementById("menuopen").addEventListener("click",function(){
    document.getElementsByTagName("nav")[2].style.height = 30 + "vh";
    document.getElementById("nav-xsml-ul").style.display = "block";
    document.getElementById("menuopen").style.display = "none";
    document.getElementById("menuclose").style.display = "block";
})

document.getElementById("menuclose").addEventListener("click",function(){
    document.getElementsByTagName("nav")[2].style.height = 0;
    document.getElementById("nav-xsml-ul").style.display = "none";
    document.getElementById("menuopen").style.display = "block";
    document.getElementById("menuclose").style.display = "none";
})

//UST NAV BİTTİ SM ALTI


//BEST PRICES BEST CARS

var txt = "BEST PRICES BEST CARS";
var i = 0;
var time = 150;

function typeWriter(){
    if(i<=txt.length){
        document.getElementsByTagName("h1")[0].innerHTML += txt.charAt(i);
        i++;
    }
    setTimeout(typeWriter,time);
}


//8 başlangıç

var x;


document.getElementById("all").addEventListener("click",function(){
    for(x = 7 ; x<=18; x++){
        document.getElementsByTagName("article")[x].style.display = "block";
    }
})

//ALL KISMI BİTTİ


document.getElementById("sportcar").addEventListener("click",function(){
  for(x = 7 ; x<=11; x++){
      document.getElementsByTagName("article")[x].style.display = "block";
  }

  for(x = 11 ; x<=18; x++){
    document.getElementsByTagName("article")[x].style.display = "none";
}
})

//SPOR ARABA KISMI BİTTİ


document.getElementById("jeeps").addEventListener("click",function(){
    for(x = 7 ; x<=10; x++){
        document.getElementsByTagName("article")[x].style.display = "none";
    }


    for(x = 11 ; x<=14; x++){
        document.getElementsByTagName("article")[x].style.display = "block";
    }


    for(x = 15 ; x<=18; x++){
        document.getElementsByTagName("article")[x].style.display = "none";
    }
})

//JEEP KISMI BİTTİ


document.getElementById("nostalgiccars").addEventListener("click",function(){
    for(x = 7 ; x<=15; x++){
        document.getElementsByTagName("article")[x].style.display = "none";
    }

    for(x = 15 ; x<=18; x++){
        document.getElementsByTagName("article")[x].style.display = "block";
    }
})


//NOSTALGİC ARABA KISMI BİTTİ

//9 - 17

document.getElementById("sportcar1ac").addEventListener("click",function(){
    document.getElementById("sportcar1").style.width = 80 + "%";
    document.getElementById("sportcar1").style.height = 100 + "vh";
    document.getElementById("sportcar1").style.padding = 10 + "px";
    document.getElementById("sport1sec").style.display = "flex";
})

document.getElementById("sportcar1kapa").addEventListener("click",function(){
    document.getElementById("sportcar1").style.width = 0 + "%";
    document.getElementById("sportcar1").style.height = 0 + "vh";
    document.getElementById("sportcar1").style.padding = 0 + "px";
    document.getElementById("sport1sec").style.display = "none";
})

//SPORTCAR 1

document.getElementById("sportcar2ac").addEventListener("click",function(){
    document.getElementById("sportcar2").style.width = 80 + "%";
    document.getElementById("sportcar2").style.height = 100 + "vh";
    document.getElementById("sportcar2").style.padding = 10 + "px";
    document.getElementById("sport2sec").style.display = "flex";
})

document.getElementById("sportcar2kapa").addEventListener("click",function(){
    document.getElementById("sportcar2").style.width = 0 + "%";
    document.getElementById("sportcar2").style.height = 0 + "vh";
    document.getElementById("sportcar2").style.padding = 0 + "px";
    document.getElementById("sport2sec").style.display = "none";
})

//SPORTCAR 2

document.getElementById("sportcar3ac").addEventListener("click",function(){
    document.getElementById("sportcar3").style.width = 80 + "%";
    document.getElementById("sportcar3").style.height = 100 + "vh";
    document.getElementById("sportcar3").style.padding = 10 + "px";
    document.getElementById("sport3sec").style.display = "flex";
})

document.getElementById("sportcar3kapa").addEventListener("click",function(){
    document.getElementById("sportcar3").style.width = 0 + "%";
    document.getElementById("sportcar3").style.height = 0 + "vh";
    document.getElementById("sportcar3").style.padding = 0 + "px";
    document.getElementById("sport3sec").style.display = "none";
})

//SPORTCAR3


document.getElementById("jeep1ac").addEventListener("click",function(){
    document.getElementById("jeep1").style.width = 80 + "%";
    document.getElementById("jeep1").style.height = 100 + "vh";
    document.getElementById("jeep1").style.padding = 10 + "px";
    document.getElementById("jeep1sec").style.display = "flex";
})

document.getElementById("jeep1kapa").addEventListener("click",function(){
    document.getElementById("jeep1").style.width = 0 + "%";
    document.getElementById("jeep1").style.height = 0 + "vh";
    document.getElementById("jeep1").style.padding = 0 + "px";
    document.getElementById("jeep1sec").style.display = "none";
})

//JEEP1


document.getElementById("jeep2ac").addEventListener("click",function(){
    document.getElementById("jeep2").style.width = 80 + "%";
    document.getElementById("jeep2").style.height = 100 + "vh";
    document.getElementById("jeep2").style.padding = 10 + "px";
    document.getElementById("jeep2sec").style.display = "flex";
})

document.getElementById("jeep2kapa").addEventListener("click",function(){
    document.getElementById("jeep2").style.width = 0 + "%";
    document.getElementById("jeep2").style.height = 0 + "vh";
    document.getElementById("jeep2").style.padding = 0 + "px";
    document.getElementById("jeep2sec").style.display = "none";
})

//JEEP2


document.getElementById("jeep3ac").addEventListener("click",function(){
    document.getElementById("jeep3").style.width = 80 + "%";
    document.getElementById("jeep3").style.height = 100 + "vh";
    document.getElementById("jeep3").style.padding = 10 + "px";
    document.getElementById("jeep3sec").style.display = "flex";
})

document.getElementById("jeep3kapa").addEventListener("click",function(){
    document.getElementById("jeep3").style.width = 0 + "%";
    document.getElementById("jeep3").style.height = 0 + "vh";
    document.getElementById("jeep3").style.padding = 0 + "px";
    document.getElementById("jeep3sec").style.display = "none";
})

//JEEP3


document.getElementById("nostalgicac").addEventListener("click",function(){
    document.getElementById("nostalgic1").style.width = 80 + "%";
    document.getElementById("nostalgic1").style.height = 100 + "vh";
    document.getElementById("nostalgic1").style.padding = 10 + "px";
    document.getElementById("nostalgic1sec").style.display = "flex";
})

document.getElementById("nostalgic1kapa").addEventListener("click",function(){
    document.getElementById("nostalgic1").style.width = 0 + "%";
    document.getElementById("nostalgic1").style.height = 0 + "vh";
    document.getElementById("nostalgic1").style.padding = 0 + "px";
    document.getElementById("nostalgic1sec").style.display = "none";
})

//NOSTALGİC 1



document.getElementById("nostalgicac2").addEventListener("click",function(){
    document.getElementById("nostalgic2").style.width = 80 + "%";
    document.getElementById("nostalgic2").style.height = 100 + "vh";
    document.getElementById("nostalgic2").style.padding = 10 + "px";
    document.getElementById("nostalgic2sec").style.display = "flex";
})

document.getElementById("nostalgic2kapa").addEventListener("click",function(){
    document.getElementById("nostalgic2").style.width = 0 + "%";
    document.getElementById("nostalgic2").style.height = 0 + "vh";
    document.getElementById("nostalgic2").style.padding = 0 + "px";
    document.getElementById("nostalgic2sec").style.display = "none";
})

//NOSTALGİC 2



document.getElementById("nostalgicac3").addEventListener("click",function(){
    document.getElementById("nostalgic3").style.width = 80 + "%";
    document.getElementById("nostalgic3").style.height = 100 + "vh";
    document.getElementById("nostalgic3").style.padding = 10 + "px";
    document.getElementById("nostalgic3sec").style.display = "flex";
})

document.getElementById("nostalgic3kapa").addEventListener("click",function(){
    document.getElementById("nostalgic3").style.width = 0 + "%";
    document.getElementById("nostalgic3").style.height = 0 + "vh";
    document.getElementById("nostalgic3").style.padding = 0 + "px";
    document.getElementById("nostalgic3sec").style.display = "none";
})

//NOSTALGİC 3


//RESİM KISMI


var resim = document.getElementsByClassName("resim");
var kutucuk = document.getElementsByClassName("kutu")
var index = 0;	
		galeri();
		function galeri(){
			if(index >= resim.length){
				index = 0;
			}
            else if(index < 0){
				index = resim.length -1;
			}

			for(k = 0; k < resim.length; k++){
                resim[k].classList.remove("aktif");
				kutucuk[k].classList.remove("aktiflist");	
			}

			resim[index].classList.add("aktif");
			kutucuk[index].classList.add("aktiflist");
			
			console.log(index);
		}
		
		function ileri(){
			index++;
			galeri();
		}
		function geri(){
			index--;
			galeri();
		}