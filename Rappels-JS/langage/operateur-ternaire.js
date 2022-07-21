let pileOuFace1;

if (Math.random() > 0.5) {
  pileOuFace1 = 'pile'
} else {
  pileOuFace1 = 'face';
}

console.log(pileOuFace1);


// Operateur ternaire (if else sur une ligne)
const pileOuFace2 = (Math.random() > 0.5) ? 'pile' : 'face';


let randomError1;

if (Math.random() > 0.5) {
  randomError1 = 'error'
}

// Operateur && (if simple)
const randomError2 = (Math.random() > 0.5) && 'error';
