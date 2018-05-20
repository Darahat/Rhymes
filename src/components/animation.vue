<template>
  
</template>

<style>
  .animated-fly1 {
  animation-name: fly;
  animation-duration: 5s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 9999;
}
.animated-fly2 {
  animation-name: fly;
  animation-duration: 4s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 9999;
}
.animated-fly3 {
  animation-name: fly;
  animation-duration: 3s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 9999;
}
.animated-fly4 {
  animation-name: fly;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 9999;
}
.animated-fly5 {
  animation-name: fly;
  animation-duration: 7s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 9999;
}
.animated-fly6 {
  animation-name: fly;
  animation-duration: 6s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 9999;
}
@keyframes fly {
  0%, 100% {
    transform: translate(128px,220px);
 
  }
  10% {
    transform: translate(50px,150px) rotate(-30deg);
 
  }
  20% {
    transform: translate(100px,100px) rotate(35deg);
 
  }
  30% {
    transform: translate(150px,250px) rotate(45deg);
 
  }
  40% {
    transform: translate(40px,200px) rotate(-50deg);
 
  }
  50% {
    transform: translate(250px,250px) rotate(80deg);
  }
  60% {
    transform: translate(-350px,350px) rotate(90deg);
 
  }
  70%,80%,90%,95% {
   transform: translate(128px,220px) rotate(-80deg);
  }
}


/* bounce animation */

.animated-bounce {
  animation-name: bounce;
  animation-duration: .3s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
 
}
.animated-bounce1 {
  animation-name: bounce;
  animation-duration: .5s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
 
}
.animated-bounce2 {
  animation-name: bounce;
  animation-duration: .4s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
 
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(0px) rotate(5deg);
  }

  50% {
    transform: translateY(-15px) rotate(-5deg);
}
80%{
  transform: translateY(-15px) rotate(5deg);
}
}

.animated-fall {
  animation-name: fall;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  transition:transform 300ms ease-in-out;

}
@keyframes fall {
  0% {
    transform: translateY(-350px) rotate(20deg);
  }

  40% {
    transform: translateY(-0px) rotate(50deg);
}
60%{
  transform: translateY(-100px)rotate(-20deg);
}
100%{
  transform: translateY(-0px) rotate(0deg);
}
}
.animated-drop {
  animation-name: fall;
  animation-duration: .5s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  transition:transform 300ms ease-in-out;

}
@keyframes fall {
  0% {
    transform: translateY(-350px) rotate(20deg);
  }

  40% {
    transform: translateY(-0px) rotate(50deg);
}
60%{
  transform: translateY(-100px)rotate(-20deg);
}
100%{
  transform: translateY(-0px) rotate(0deg);
}
}

.animated-baloon {
  animation-name: baloon;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  transition:transform 300ms ease-in-out;

}
@keyframes baloon {
  0% {
    transform: translateY(350px) rotate(360deg);
  }
  20% {
    transform: translateY(300px) rotate(-180deg);
  }
  40% {
    transform: translateY(250px) rotate(180deg);
  }
  60% {
    transform: translateY(200px) rotate(-180deg);
  }
 80% {
    transform: translateY(150px) rotate(180deg);
  }
100%{
  transform: translateY(100px) rotate(0deg);
}
}
</style>
