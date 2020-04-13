// These prompts gather mad lib inputs from user and stores into variables
// EASTER EDITION

const day = prompt("(1 of 11) Day of the week:");
const person1 = prompt("(2 of 11) Name of a person:");
const noun1 = prompt("(3 of 11) Add a noun:");
const noun2 = prompt("(4 of 11) Add a noun:");
const noun3 = prompt("(5 of 11) Add a noun:");
const adjective1 = prompt("(6 of 11) Add an adjective:");
const noun4 = prompt("(7 of 11) Add a noun:");
const person2 = prompt("(8 of 11) Name of another person:")
const noun5 = prompt("(9 of 11) Add a noun:");
const pluralNoun = prompt("(10 of 11) Add a plural noun:");
const adjective2 = prompt("(11 of 11) Last one! Add another adjective:");

// This transfers variables into the template literal format to create the story

let msg = `<p>On ${day}, we are going to ${person1}'s house for Easter Brunch.
            Did you know that "brunch" is really a combination of ${noun1} and ${noun2}?
            They are going to cook my favorite ${noun3}, and I hope they make the ${adjective1} ${noun4}.
            For dessert, ${person2} is bringing ${noun5} pie with ${pluralNoun}.
            I'm feeling ${adjective2} already!</p>`;

// Displays the story as a <p> inside the <main> element.

document.querySelector('main').innerHTML = msg;

// Source for original sample comes from
// https://www.woojr.com/easter-mad-libs/easter-mad-lib-brunch/