let currentImageCode = 1;
let homeFacadeToGo = 1;
let next;
let gelinenCephe = (homeFacadeToGo % 3) - 1;

const changeImage = function () {
  if (Math.abs(homeFacadeToGo) % 3 === 2) {
    if (currentImageCode < 15) {
      console.log(next);
      document.getElementById("currentImage").src = currentImageCode + ".jpeg";
      currentImageCode = next ? currentImageCode + 1 : currentImageCode - 1;
    } else {
      clearTimeout(intervalKur);
    }
  }

  if (Math.abs(homeFacadeToGo) % 3 === 0) {
    console.log(currentImageCode);
    if (gelinenCephe === 2) {
      document.getElementById("currentImage").src = currentImageCode + ".jpeg";
      currentImageCode = currentImageCode + 1;
    }
    if (gelinenCephe === 1) {
      if (Math.abs(currentImageCode) % 50 > 36) {
        document.getElementById("currentImage").src =
          currentImageCode + ".jpeg";
        currentImageCode = currentImageCode - 1;
      } else {
        clearTimeout(intervalKur);
      }
    }
  }

  if (Math.abs(homeFacadeToGo) % 3 === 1) {
    if (currentImageCode < 50) {
      document.getElementById("currentImage").src = currentImageCode + ".jpeg";
      currentImageCode = next ? currentImageCode + 1 : currentImageCode - 1;
    } else {
      clearTimeout(intervalKur);
    }
  }
};

const startSetInterval = () => {
  next = true;
  homeFacadeToGo += 1;
  intervalKur = setInterval(changeImage, 40);
};

const startSetInterval2 = () => {
  next = false;
  homeFacadeToGo -= 1;
  intervalKur = setInterval(changeImage, 40);
};

let currentImageCode = 1;
let homeFacadeToGo = 1;

const changeImage = function () {
  if (Math.abs(homeFacadeToGo) % 3 === 2) {
    if (currentImageCode < 15) {
      document.getElementById("currentImage").src = currentImageCode + ".jpeg";
      currentImageCode = currentImageCode + 1;
    } else {
      clearTimeout(intervalKur);
    }
  } else if (Math.abs(homeFacadeToGo) % 3 === 0) {
    if (currentImageCode < 36) {
      document.getElementById("currentImage").src = currentImageCode + ".jpeg";
      currentImageCode = currentImageCode + 1;
    } else {
      clearTimeout(intervalKur);
    }
  } else if (Math.abs(homeFacadeToGo) % 3 === 1) {
    if (currentImageCode < 50) {
      document.getElementById("currentImage").src = currentImageCode + ".jpeg";
      currentImageCode = currentImageCode + 1;
    } else {
      clearTimeout(intervalKur);
    }
  } else {
    clearTimeout(intervalKur);
  }
};

const startSetInterval = () => {
  currentImageCode = currentImageCode === 50 ? 1 : currentImageCode;
  homeFacadeToGo += 1;
  intervalKur = setInterval(changeImage, 40);
  console.log(homeFacadeToGo % 3);
};
