import Tiger from "./Tiger.js";
// import { Tiger } from "../Module/Tiger";

import Wolf from "./Wolf.js";
// import { Wolf } from "../Module/Wolf";

// const { Tiger } = require('./Tiger.js');
// const { Wolf } = require('./Wolf.js');

const figthing = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        tiger.growl();
        return;
    }

    if (tiger.strength < wolf.strength) {
        wolf.howl();
        return;
    }

    console.log('tiger and wolf have same strength');
}

const tiger = new Tiger();
const wolf = new Wolf();


figthing(tiger, wolf);