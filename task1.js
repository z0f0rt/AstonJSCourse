const DEFAULT_PRORETIES = {
  DEFAULT_FUEL: 5,
  DEFAULT_DURABILITY: 100,
  DEFAULT_SPEED: 10,
  DEFAULT_TRACK_LENGTH: 200,
};
const selectCar = document.querySelector(".select_car");
const settings = document.querySelector(".settings");
const saveCar = document.querySelector(".save_car");
const enemies = document.querySelector(".enemies");
const saveEnemies = document.querySelector(".save_enemies");
const table = document.querySelector(".table");

let carType;
class Car {
  constructor(name = "Unknown Car") {
    this.name = name;
    this.fuel = 0;
    this.lowFuelConsumption = 0;
    this.durability = 0;
    this.speed = 0;
  }

  getPowerReserve(fuel, lowFuelConsumption) {
    const totalFuel = DEFAULT_PRORETIES.DEFAULT_FUEL + fuel;
    const powerReserve =
      totalFuel * DEFAULT_PRORETIES.DEFAULT_TRACK_LENGTH +
      totalFuel *
        0.1 *
        DEFAULT_PRORETIES.DEFAULT_TRACK_LENGTH *
        lowFuelConsumption;
    return powerReserve;
  }

  getCommonDurability(durability) {
    const commonDurability =
      DEFAULT_PRORETIES.DEFAULT_DURABILITY +
      durability * 0.1 * DEFAULT_PRORETIES.DEFAULT_DURABILITY;
    return commonDurability;
  }

  getCommonSpeed(speed) {
    const commonSpeed =
      DEFAULT_PRORETIES.DEFAULT_SPEED +
      speed * 0.05 * DEFAULT_PRORETIES.DEFAULT_SPEED;
    return commonSpeed;
  }
}

class Civilian extends Car {
  fuel = 2;
  lowFuelConsumption = 2;
  durability = 2;
  speed = 4;
}

class Sport extends Car {
  fuel = 2;
  lowFuelConsumption = 1;
  durability = 1;
  speed = 6;
}

class Military extends Car {
  fuel = 2;
  lowFuelConsumption = 2;
  durability = 4;
  speed = 2;
}

const cars = [];

selectCar.addEventListener("click", (event) => {
  carType = chooseCarType(event.target.id);
  selectCar.remove();
  settings.classList.remove("hidden");
  setPlayersSettings(carType);
});

saveCar.addEventListener("click", () => {
  cars.push(getSettings(settings));
  settings.remove();
  enemies.classList.remove("hidden");
});

saveEnemies.addEventListener("click", () => {
  const quantityEnemies = +enemies.children.choose_enemies.value;
  enemies.remove();
  cars.push(...createEnemies(quantityEnemies));
  table.classList.remove("hidden");
  createTableList(compare(cars));
});

function getSettings(node) {
  const { fuel, lowFuelConsumption, durability, speed } = node.children;
  return {
    fuel: Number(fuel.value),
    lowFuelConsumption: Number(lowFuelConsumption.value),
    durability: Number(durability.value),
    speed: Number(speed.value),
    name: carType.name,
  };
}

function setPlayersSettings(car) {
  const { fuel, lowFuelConsumption, durability, speed, power_reserve } =
    settings.children;
  fuel.value = car.fuel;
  fuel.min = car.fuel;

  lowFuelConsumption.value = car.lowFuelConsumption;
  lowFuelConsumption.min = car.lowFuelConsumption;

  durability.value = car.durability;
  durability.min = car.durability;

  speed.value = car.speed;
  speed.min = car.speed;

  power_reserve.value = car.getPowerReserve(
    Number(fuel.value),
    Number(lowFuelConsumption.value)
  );
  settings.addEventListener("change", (e) => {
    saveCar.disabled = false;

    const currentPoints =
      Number(fuel.value) +
      Number(lowFuelConsumption.value) +
      Number(durability.value) +
      Number(speed.value);
    if (
      currentPoints > 12 ||
      fuel.value < car.fuel ||
      lowFuelConsumption.value < car.lowFuelConsumption ||
      durability.value < car.durability ||
      speed.value < car.speed
    ) {
      saveCar.disabled = true;
    }
    if (currentPoints > 12) alert("Превышен лимит распределяемых очков");
    power_reserve.value = car.getPowerReserve(
      +fuel.value,
      +lowFuelConsumption.value
    );
  });
}

function createTableList(array) {
  array.forEach((el, i, arr) => {
    let div = document.createElement("div");
    div.classList.add("table_list");

    let name = document.createElement("div");
    if (arr[i] === arr[0]) {
      name.textContent = `${el.name}(You)`;
      name.classList.add("name");
    } else {
      name.textContent = el.name;
      name.classList.add("name");
    }
    let powerReserve = document.createElement("div");
    powerReserve.textContent = el.powerReserve;
    powerReserve.classList.add("power_reserve");

    let durability = document.createElement("div");
    durability.textContent = el.durability;
    durability.classList.add("durability");

    let speed = document.createElement("div");
    speed.textContent = el.speed;
    speed.classList.add("speed");

    div.appendChild(name);
    div.appendChild(powerReserve);
    div.appendChild(durability);
    div.appendChild(speed);
    table.appendChild(div);
  });
}

function configEnemiesParams(bot) {
  const randomNum = Math.floor(Math.random() * 4);
  switch (randomNum) {
    case 0:
      bot.fuel++;
      return bot;
    case 1:
      bot.lowFuelConsumption++;
      return bot;
    case 2:
      bot.durability++;
      return bot;
    case 3:
      bot.speed++;
      return bot;
  }
  return newArray;
}

function createEnemies(amount) {
  const arrayOfCars = [];
  for (let i = 0; i < amount; i++) {
    arrayOfCars.push(
      compose(configEnemiesParams, configEnemiesParams)(chooseCarType())
    );
  }
  return arrayOfCars.map((car) => {
    return {
      ...car,
      name: `${car.name}(Bot)`,
    };
  });
}

function chooseCarType(typeOfCar) {
  const types = ["Civilian", "Sport", "Military"];
  if (!typeOfCar) {
    const genetatedIndex = Math.floor(Math.random() * types.length);
    typeOfCar = types[genetatedIndex];
  }
  switch (typeOfCar) {
    case "Civilian":
      return new Civilian("Civilian");
    case "Sport":
      return new Sport("Sport");
    case "Military":
      return new Military("Military");
  }
}

function compose(...funcs) {
  return (comp) => {
    return funcs.reduceRight(
      (prevRes, curFunction) => curFunction(prevRes),
      comp
    );
  };
}

const compare = (arrayCars) => {
  let carsSample = arrayCars.map((car) => {
    const { fuel, lowFuelConsumption, durability, speed, name } = car;
    return {
      name,
      powerReserve: Car.prototype.getPowerReserve(fuel, lowFuelConsumption),
      durability: Car.prototype.getCommonDurability(durability),
      speed: Car.prototype.getCommonSpeed(speed),
    };
  });

  let maxPowerReserve = 0;
  let maxDurability = 0;
  let maxSpeed = 0;

  carsSample.forEach((car) => {
    const { powerReserve, durability, speed } = car;
    if (powerReserve > maxPowerReserve) {
      maxPowerReserve = powerReserve;
    }
    if (durability > maxDurability) {
      maxDurability = durability;
    }
    if (speed > maxSpeed) {
      maxSpeed = speed;
    }
  });

  return carsSample.map((car) => {
    const { powerReserve, durability, speed, name } = car;
    return {
      name,
      powerReserve: `${Math.round((powerReserve * 100) / maxPowerReserve)}%`,
      durability: `${Math.round((durability * 100) / maxDurability)}%`,
      speed: `${Math.round((speed * 100) / maxSpeed)}%`,
    };
  });
};
