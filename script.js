let score = 0;
let rate = 0;
function coneClicked() {
  const cone = document.getElementById("cone");
  const point = document.createElement("p");
  const node = document.createTextNode("+1");
  point.setAttribute("class", "point");
  point.appendChild(node);
  const yoonseo = document.getElementById("yoonseo");
  yoonseo.appendChild(point);
  let scale = 50;
  let cycle = false;
  let id = null;
  id = setInterval(bump, 5);
  function bump() {
    if (cycle == 1 && scale == 51) {
      clearInterval(id);
    } else if (scale == 45 || cycle) {
      cone.style.width = scale / 2 + "%";
      cone.style.height = scale + "%";
      scale++;
      cycle = true;
    } else {
      cone.style.width = scale / 2 + "%";
      cone.style.height = scale + "%";
      scale--;
    }
  }
  let pos = 180;
  let id2 = null;
  id2 = setInterval(move, 5);
  function move() {
    pos--;
    if (pos == 0) {
      clearInterval(id2);
      point.remove();
    } else {
      point.style.top = pos + "px";
    }
  }
  score++;
}
//goldenCone chances:
let testCone = 3;
//store variables:
let coneGenCount = 0;
let coneGenCost = 15;
let kitchenCost = 100;
let kitchenCount = 0;
let classCost = 1000;
let classCount = 0;
let aquaCost = 12000;
let aquaCount = 0;
let domeCost = 130000;
let domeCount = 0;
let castleCost = 1.4 * 10 ** 6;
let castleCount = 0;
let factoryCost = 20 * 10 ** 6;
let factoryCount = 0;
function goldenCone() {
  if (Math.random() * 100 <= testCone) {
    let posX = Math.random() * 100;
    let posY = Math.random() * 100;
    let width = 0.125;
    const test = document.createElement("div");
    test.setAttribute("class", "goldenCone");
    body.appendChild(test);
    test.style.top = posX + "%";
    test.style.left = posY + "%";
    let id = setInterval(goldenMove, 100);
    let cycle = 1;
    function goldenMove() {
      if (width <= 0.125 && cycle == -1) {
        clearInterval(id);
        test.remove();
      } else if (width >= 25) {
        cycle = -1;
        width += cycle;
      } else {
        test.style.width = width + "%";
        test.style.height = 2 * width + "%";
        width += cycle;
      }
    }
  }
}
function update() {
  const cone = document.getElementById("cone");
  const body = document.getElementById("body");
  //golden cone functions:
  setInterval(goldenCone, 1000);
  //store functions:
  function coneGenerator() {
    score -= coneGenCost;
    coneGenCost = Math.floor(coneGenCost * 1.15);
    coneGenCount++;
    document.getElementById("coneGenNum").innerHTML = coneGenCount;
    document.getElementById("coneGenCost").innerHTML = coneGenCost;
    rate += 0.1;
  }
  function kitchenGen() {
    score -= kitchenCost;
    kitchenCost = Math.floor(kitchenCost * 1.15);
    kitchenCount++;
    document.getElementById("kitchenNum").innerHTML = kitchenCount;
    document.getElementById("kitchenCost").innerHTML = kitchenCost;
    rate += 1;
  }
  function classGen() {
    score -= classCost;
    classCost = Math.floor(classCost * 1.15);
    classCount++;
    document.getElementById("classNum").innerHTML = classCount;
    document.getElementById("classCost").innerHTML = classCost;
    rate += 8;
  }
  function aquaGen() {
    score -= aquaCost;
    aquaCost = Math.floor(aquaCost * 1.15);
    aquaCount++;
    document.getElementById("aquaNum").innerHTML = aquaCount;
    document.getElementById("aquaCost").innerHTML = aquaCost;
    rate += 47;
  }
  function domeGen() {
    score -= domeCost;
    domeCost = Math.floor(domeCost * 1.15);
    domeCount++;
    document.getElementById("domeNum").innerHTML = domeCount;
    document.getElementById("domeCost").innerHTML = domeCost;
    rate += 260;
  }
  function castleGen() {
    score -= castleCost;
    castleCost = Math.floor(castleCost * 1.15);
    castleCount++;
    document.getElementById("castleNum").innerHTML = castleCount;
    document.getElementById("castleCost").innerHTML =
      Math.round((castleCost / 10 ** 6) * 10) / 10 + " million";
    rate += 1400;
  }
  function factoryGen() {
    score -= factoryCost;
    factoryCost = Math.floor(factoryCost * 1.15);
    factoryCount++;
    document.getElementById("factoryNum").innerHTML = factoryCount;
    document.getElementById("factoryCost").innerHTML =
      Math.round((factoryCost / 10 ** 6) * 10) / 10 + " million";
    rate += 7800;
  }
  setInterval(changeScore, 5);
  setInterval(coneUpgrade, 5);
  setInterval(check, 5);
  let upgrading = 0;
  function changeScore() {
    const counter = document.getElementById("coneCounter");
    const header = document.getElementById("coneHeader");
    score += rate / 150;
    counter.innerHTML = Math.floor(score);
    header.style.left = 48 + calcDigits(Math.floor(score)) / 2 + "%";
    counter.style.left = 48 - calcDigits(Math.floor(score)) / 2 + "%";
    const rateEl = (document.getElementById("rate").innerHTML =
      Math.round(rate * 10) / 10);
    rateEl.style.left = 48 - calcDigits(Math.floor(score)) / 2 + "%";
  }
  let color = "white";
  function coneUpgrade() {
    const points = document.getElementsByClassName("point");
    for (let i = 0; i < points.length; i++) {
      points[i].style.color = color;
    }
    if (score >= 100 && upgrading == 0) {
      upgrading++;
      const upgrade = document.createElement("h1");
      const text = document.createTextNode("UPGRADE!");
      upgrade.appendChild(text);
      document.getElementById("body").appendChild(upgrade);
      const info = document.createElement("p");
      const node = document.createTextNode("Rate increases by 1!");
      rate += 1;
      info.appendChild(node);
      upgrade.appendChild(info);
      upgrade.style.position = "absolute";
      upgrade.style.left = 35 + "%";
      upgrade.style.top = 0 + "%";
      upgrade.style.opacity = 2;
      upgrade.style.fontSize = 80 + "px";
      upgrade.style.color = "red";
      info.style.fontSize = 30 + "px";
      info.style.position = "absolute";
      info.style.left = 20 + "%";
      let pos = 0;
      let id = setInterval(move, 20);
      function move() {
        if (pos >= 100) {
          upgrade.remove();
          clearInterval(id);
        } else {
          upgrade.style.top = pos + "%";
          pos++;
        }
      }
      cone.style.clipPath =
        "polygon(26% 85%,26% 18%, 20% 14%, 78% 14%, 72% 18%, 72% 50%, 72% 85%)";
      cone.style.backgroundImage =
        "url(https://lh3.googleusercontent.com/asSW8Nu-QJc1-rZaxGYVTytF_KPTRMwC47FOaC4BkCZDu0M-KP-Oq98mSx9uvNiboylrSCyJbkD3AxJhMV6Rdyx10AWW-bH84YCqr03_PHgVXZL-HPHGANMGZKXBs50tz7CbnvrvdQ=w2400)";
      cone.style.backgroundColor = "rgba(255,255,255,0)";
      color = "white";
    }
    if (score >= 1000 && upgrading == 1) {
      cone.style.backgroundImage =
        "url(https://i.ibb.co/93qs5Sg/output-onlinepngtools-4.png)";
      cone.style.clipPath = "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)";
      const upgrade = document.createElement("h1");
      const text = document.createTextNode("UPGRADE 2!");
      upgrade.appendChild(text);
      document.getElementById("body").appendChild(upgrade);
      upgrade.style.position = "absolute";
      upgrade.style.left = 35 + "%";
      upgrade.style.top = 0 + "%";
      upgrade.style.opacity = 2;
      upgrade.style.fontSize = 80 + "px";
      upgrade.style.color = "red";
      const info = document.createElement("p");
      const node = document.createTextNode("Rate increases by 2!");
      rate += 2;
      info.appendChild(node);
      upgrade.appendChild(info);
      upgrade.style.position = "absolute";
      upgrade.style.left = 35 + "%";
      upgrade.style.top = 0 + "%";
      upgrade.style.opacity = 2;
      upgrade.style.fontSize = 80 + "px";
      upgrade.style.color = "red";
      info.style.fontSize = 30 + "px";
      info.style.position = "absolute";
      info.style.left = 20 + "%";
      let pos = 0;
      let id = setInterval(move, 40);
      function move() {
        if (pos >= 100) {
          upgrade.remove();
          clearInterval(id);
        } else {
          upgrade.style.top = pos + "%";
          pos++;
        }
      }
      color = "blue";
      upgrading++;
    }
    if (score >= 10000 && upgrading == 2) {
      const upgrade = document.createElement("h1");
      const text = document.createTextNode("UPGRADE 3!");
      upgrade.appendChild(text);
      document.getElementById("body").appendChild(upgrade);
      const info = document.createElement("p");
      const node = document.createTextNode("Rate doubles by 2!");
      rate *= 2;
      info.appendChild(node);
      upgrade.appendChild(info);
      upgrade.style.position = "absolute";
      upgrade.style.left = 35 + "%";
      upgrade.style.top = 0 + "%";
      upgrade.style.opacity = 2;
      upgrade.style.fontSize = 80 + "px";
      upgrade.style.color = "blue";
      info.style.fontSize = 30 + "px";
      info.style.position = "absolute";
      info.style.left = 20 + "%";
      let pos = 0;
      let id = setInterval(move, 50);
      function move() {
        if (pos >= 100) {
          upgrade.remove();
          clearInterval(id);
        } else {
          upgrade.style.top = pos + "%";
          pos++;
        }
      }
      color = "blue";
      upgrading++;
    }
  }
  const coneGen = document.getElementById("coneGen");
  const kitchen = document.getElementById("kitchen");
  const belwalClass = document.getElementById("class");
  const aqua = document.getElementById("aqua");
  const dome = document.getElementById("dome");
  const castle = document.getElementById("castle");
  const factory = document.getElementById("factory");
  let coneGencheck = false;
  function check() {
    shops(coneGen, coneGenCost, coneGenerator);
    shops(kitchen, kitchenCost, kitchenGen);
    shops(belwalClass, classCost, classGen);
    shops(aqua, aquaCost, aquaGen);
    shops(dome, domeCost, domeGen);
    shops(castle, castleCost, castleGen);
    shops(factory, factoryCost, factoryGen);
  }
}
function shops(element, cost, funct) {
  let buildingCheck = false;
  if (score >= cost) {
    if (!buildingCheck) {
      element.style.opacity = 0.9;
      buildingCheck = true;
    }
    element.addEventListener("click", funct);
  } else {
    element.removeEventListener("click", funct);
    buildingCheck = false;
    element.style.opacity = 0.5;
  }
}

function setScore(num) {
  score = num;
}
function addCones(num) {
  score += num;
}

function hover(element) {
  if (element.style.opacity >= 0.9) {
    element.style.opacity = 1;
  }
}
function dim(element) {
  if (element.style.opacity == 1) {
    element.style.opacity = 0.9;
  }
}
function calcDigits(num) {
  let digit = 1;
  num += 0.05;
  while (num > 0) {
    num = Math.floor(num / 10);
    digit++;
  }
  return digit;
}
function round(num, digit) {
  return Math.floor(num * Math.pow(10, digit)) / 10 ** digit;
}
