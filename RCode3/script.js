const animal = "gato";
const DOMESTIC_ANIMALS = ["gato", "perro", "loro", "vaca"];

if (DOMESTIC_ANIMALS.includes(animal)) {
  console.log("Es un animal doméstico");
} else {
  console.log("Es salvaje como tu madre!");
}

// includes function scales better than making individual conditions for each animal
