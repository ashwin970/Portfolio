const hero = document.querySelector(".hero")
const slider = document.querySelector(".slider")
const headline = document.querySelector('.headline')
const logo = document.querySelector('#logo');

var t1 = new TimelineMax();

t1.fromTo(
    hero, 
    1,
     {height: "0%"},
      {height:"100%", ease: Power2.easeInOut}
      ).fromTo(
          hero,
           1.2, 
           {width: "100%"},{width: "80%",ease: Power2.easeInOut}
           ).fromTo(
               slider,
                1.2,
                {x: "-100%"},
                {x:"0%",ease: Power2.easeInOut},"-=1.2"
                ).fromTo(
               logo,
               0.5,
               {opacity: 0, x: 70},
               { opacity: 1, x: 20}, "-=0.5"
                 ).fromTo(headline,
                     1, 
                     {opacity: 0, x: 0},
                     { opacity: 1, x: 0, ease: Power2.easeInOut}, "-=1")


                     
                    