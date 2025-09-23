let green = false;
  let car = document.getElementById("car");
  let car1 = document.getElementById("car1");
  let car2 = document.getElementById("car2");
  let redLight = document.getElementById("redLight");
  let greenLight = document.getElementById("greenLight");

  let carPos = -100;
  let car1Pos = 1550;
  let car2Pos = -600;

   function toggleLight() {
    green = !green;
    if (green) {
      redLight.classList.remove("active");
      greenLight.classList.add("active");
    } else {
      greenLight.classList.remove("active");
      redLight.classList.add("active");
    }
  }

  function moveCar() {
    if (green) {
      
      carPos += 5;
      if (carPos > window.innerWidth) carPos = -200;

      
      car2Pos += 5;
      if (car2Pos > window.innerWidth) car2Pos = -300;


      car1Pos -= 5;
      if (car1Pos < -100) car1Pos = window.innerWidth + 100;
    }
    car.style.left = carPos + "px";
    car1.style.left = car1Pos + "px";
    car2.style.left = car2Pos + "px"; 

    setInterval(moveCar, 100);
  }