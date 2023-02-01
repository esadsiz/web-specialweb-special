let currentImageCode = 1;
let homeFacadeToGo = undefined;
let clickedButton;

document.querySelector("#dot4ID").classList.add("displaydotsNone");
document.querySelector("#dot5ID").classList.add("displaydotsNone");

document.querySelector("#dot6ID").classList.add("displaydotsNone");
document.querySelector("#dot7ID").classList.add("displaydotsNone");
document.querySelector("#dot8ID").classList.add("displaydotsNone");

document.querySelector("#circle1ID").classList.add("circleBigger");
document.querySelector("#circle2ID").classList.remove("circleBigger");
document.querySelector("#circle3ID").classList.remove("circleBigger");

const changeImage = function () {
  if (homeFacadeToGo % 3 === 2) {
    document.querySelector("#dot1ID").classList.add("displaydotsNone");
    document.querySelector("#dot2ID").classList.add("displaydotsNone");
    document.querySelector("#dot3ID").classList.add("displaydotsNone");

    document.querySelector("#dot4ID").classList.remove("displaydotsNone");
    document.querySelector("#dot5ID").classList.remove("displaydotsNone");

    document.querySelector("#dot6ID").classList.add("displaydotsNone");
    document.querySelector("#dot7ID").classList.add("displaydotsNone");
    document.querySelector("#dot8ID").classList.add("displaydotsNone");

    if (clickedButton === "back") {
      if (currentImageCode !== 15) {
        currentImageCode = currentImageCode - 1;
        document.getElementById("currentImage").src =
          currentImageCode + ".jpeg";
      }
      if (currentImageCode === 15) {
        clearTimeout(intervalSetup);
        document.querySelector("#circle1ID").classList.remove("circleBigger");
        document.querySelector("#circle2ID").classList.add("circleBigger");
        document.querySelector("#circle3ID").classList.remove("circleBigger");
      }
    } else if (clickedButton === "next") {
      document.querySelector("#circle1ID").classList.remove("circleBigger");
      document.querySelector("#circle2ID").classList.add("circleBigger");
      document.querySelector("#circle3ID").classList.remove("circleBigger");

      currentImageCode = currentImageCode > 50 ? 1 : currentImageCode;

      if (currentImageCode !== 15) {
        currentImageCode = currentImageCode + 1;
        document.getElementById("currentImage").src =
          currentImageCode + ".jpeg";
      }
      if (currentImageCode === 15) {
        clearTimeout(intervalSetup);
      }
    }
  } else if (homeFacadeToGo % 3 === 0) {
    document.querySelector("#dot1ID").classList.add("displaydotsNone");
    document.querySelector("#dot2ID").classList.add("displaydotsNone");
    document.querySelector("#dot3ID").classList.add("displaydotsNone");

    document.querySelector("#dot4ID").classList.add("displaydotsNone");
    document.querySelector("#dot5ID").classList.add("displaydotsNone");

    document.querySelector("#dot6ID").classList.remove("displaydotsNone");
    document.querySelector("#dot7ID").classList.remove("displaydotsNone");
    document.querySelector("#dot8ID").classList.remove("displaydotsNone");

    if (clickedButton === "back") {
      document.querySelector("#circle1ID").classList.remove("circleBigger");
      document.querySelector("#circle2ID").classList.remove("circleBigger");
      document.querySelector("#circle3ID").classList.add("circleBigger");

      currentImageCode = currentImageCode === 1 ? 50 : currentImageCode;
      if (currentImageCode !== 35) {
        currentImageCode = currentImageCode - 1;
        document.getElementById("currentImage").src =
          currentImageCode + ".jpeg";
      }
      if (currentImageCode === 35) {
        clearTimeout(intervalSetup);
      }
    } else if (clickedButton === "next") {
      document.querySelector("#circle1ID").classList.remove("circleBigger");
      document.querySelector("#circle2ID").classList.remove("circleBigger");
      document.querySelector("#circle3ID").classList.add("circleBigger");

      if (currentImageCode !== 35) {
        currentImageCode = currentImageCode + 1;
        document.getElementById("currentImage").src =
          currentImageCode + ".jpeg";
      }
      if (currentImageCode === 35) {
        clearTimeout(intervalSetup);
      }
    }
  } else if (homeFacadeToGo % 3 === 1) {
    document.querySelector("#dot1ID").classList.remove("displaydotsNone");
    document.querySelector("#dot2ID").classList.remove("displaydotsNone");
    document.querySelector("#dot3ID").classList.remove("displaydotsNone");

    document.querySelector("#dot4ID").classList.add("displaydotsNone");
    document.querySelector("#dot5ID").classList.add("displaydotsNone");

    document.querySelector("#dot6ID").classList.add("displaydotsNone");
    document.querySelector("#dot7ID").classList.add("displaydotsNone");
    document.querySelector("#dot8ID").classList.add("displaydotsNone");

    if (clickedButton === "back") {
      document.querySelector("#circle1ID").classList.add("circleBigger");
      document.querySelector("#circle2ID").classList.remove("circleBigger");
      document.querySelector("#circle3ID").classList.remove("circleBigger");

      if (currentImageCode !== 1) {
        currentImageCode = currentImageCode - 1;
        document.getElementById("currentImage").src =
          currentImageCode + ".jpeg";
      }
      if (currentImageCode === 1) {
        clearTimeout(intervalSetup);
      }
    } else if (clickedButton === "next") {
      document.querySelector("#circle1ID").classList.add("circleBigger");
      document.querySelector("#circle2ID").classList.remove("circleBigger");
      document.querySelector("#circle3ID").classList.remove("circleBigger");

      currentImageCode = currentImageCode === 50 ? 1 : currentImageCode;
      if (currentImageCode !== 1) {
        currentImageCode = currentImageCode + 1;
        document.getElementById("currentImage").src =
          currentImageCode + ".jpeg";
      }
      if (currentImageCode === 1) {
        clearTimeout(intervalSetup);
      }
    }
  }
};

const startSetInterval = () => {
  clickedButton = "next";
  if (homeFacadeToGo === undefined) {
    homeFacadeToGo = 1;
  }

  if (homeFacadeToGo === 50) {
    homeFacadeToGo = 0;
  } else {
    homeFacadeToGo += 1;
  }

  intervalSetup = setInterval(changeImage, 40);
};

const startSetInterval2 = () => {
  clickedButton = "back";
  if (homeFacadeToGo === undefined) {
    homeFacadeToGo = 1;
  }

  if (homeFacadeToGo === 0) {
    homeFacadeToGo = 50;
  } else {
    homeFacadeToGo -= 1;
  }

  if (currentImageCode < 0) {
    currentImageCode = 50;
  }

  intervalSetup = setInterval(changeImage, 40);
};

const showCard = () => {
  document.querySelector("dot3Card").classList.add("displaycard");
};
