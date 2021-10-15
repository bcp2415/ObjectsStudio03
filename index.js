
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateB,candidateD,candidateF];

// Code your crewMass function here:
function calculateCrewMass(crewList) {
  let totalMass = 0;
  for (animal of crewList) {
    totalMass += animal.mass;
  }
  totalMass = Math.round(totalMass * 10) / 10;
  return totalMass;
}

console.log(calculateCrewMass(crew));
// Code your fuelRequired function here:

function fuelRequired(crewList = crew, crewMass, rocketAndSuppliesMass) {
  let totalFuel = (9.5 * crewMass * rocketAndSuppliesMass);
    for (animal of crewList) {
      if (animal.species === 'dog' || animal.species === 'cat') {
        console.log(`Adding 200 kg to fuel required, because ${animal.name} is a ${animal.species}.`)
        totalFuel += 200;
      } else {
        console.log(`Adding only 100 kg to fuel required, because ${animal.name} is just a ${animal.species}.`)
        totalFuel += 100;
      }
    }
  return Math.ceil(totalFuel);
}

console.log(`The mission has a launch mass of ${calculateCrewMass(crew)} kg and  requires ${fuelRequired(crew, calculateCrewMass(crew), 75000)} kg of fuel.`)

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.
