export type Atoms = Partial<{
  water: number,
  fire:  number,
  earth: number,
  air:   number,
  vitae: number,
  mors:  number,
  salt:  number,
}>

export type Ingredient = {
  name: string, // Name of the ingredient, used as a card title
  prep: string, // Short flavour text for preparing the ingredient in alchemy
  text: string, // Long effect text added to the finished alchemy
  cost: Atoms,
  give: Atoms,
}

const ingredients: Ingredient[] = [
  // Water bases
  {
    name: "Spring Water",
    prep: "Bring to a gentle simmer.",
    text: "This small bottle contains one dose of a potion that can be drunk as an action by a creature.",
    cost: {},
    give: { water: 1 },
  },
  {
    name: "Crushed Opal",
    prep: "Chisel pieces into a vessel.",
    text: "This potion flask can be thrown up to 30 feet, shattering on impact. Creatures within 5 feet of the impact are affected.",
    cost: {},
    give: { water: 1 },
  },
  // Fire bases
  {
    name: "Guano Dust",
    prep: "Sieve the powder into a cauldron.",
    text: "This flask contains fine dry powder that ignites easily when exposed to air.\nAs an action, you can throw this flask up to 20 feet, shattering it on impact. Target creatures within 10 feet of the impact must make a DC13 Dexterity saving throw.",
    cost: {},
    give: { fire: 1 },
  },
  // Mors bases
  {
    name: "Linseed Oil",
    prep: "Warm the oil gently.",
    text: "This pot of oil can coat one weapon or up to 5 pieces of ammunition, and affects a creature that is hit.\nThe coating lasts for 1 minute before drying out and becoming inert.",
    cost: {},
    give: { mors: 1 },
  },
  // Earth bases
  {
    name: "Flawed Emerald",
    prep: "Submerge the stone in a cauldron.",
    text: "This enchanted gem has magical properties when it is attuned to by a creature.",
    cost: {},
    give: { earth: 1 },
  },
  // Air bases
  {
    name: "Ash of Birch",
    prep: "Create a circle of ash and begin to chant.",
    text: "This ritual takes one action to perform per ingredient, and affects a 20 foot cube within 120 feet.",
    cost: {},
    give: { air: 1 },
  },
  // Mixed bases
  {
    name: "Desearean Wine",
    prep: "Bring to a gentle simmer.",
    text: "This small bottle contains one dose of a poison that can be drunk as an action by a creature. When ingested, the creature must make a DC 13 Constitution saving throw.",
    cost: {},
    give: { water: 1, fire: 1 },
  },
  // Water adaptors
  {
    name: "Hanging Moss",
    prep: "Tie strands into a bundle.",
    text: "An affected creature benefits from the positive effects of this alchemy for 1 minute.",
    cost: { water: 1 },
    give: { earth: 1 },
  },
  {
    name: "Lotus Seeds",
    prep: "Shake the seeds from one flower pod.",
    text: "An affected creature benefits from the positive effects of this alchemy for 1 round.",
    cost: { water: 1 },
    give: { earth: 2 },
  },
  {
    name: "Waterlily",
    prep: "Extract the stamens.",
    text: "An affected creature benefits from the positive effects of this alchemy for 1 hour.",
    cost: { water: 2 },
    give: { earth: 1 },
  },
  {
    name: "Blisterwort",
    prep: "Separate head from stalk and steep.",
    text: "Alternatively, a willing creature in touch range can be affected instead, as an action.",
    cost: { water: 1 },
    give: { vitae: 1 },
  },
  {
    name: "Pegasus Down",
    prep: "Allow to flutter down.",
    text: "Alternatively, a willing creature within 20 feet can be affected instead, as an action.",
    cost: { water: 2 },
    give: { vitae: 2 },
  },
  {
    name: "Scotch Bonnet",
    prep: "Cut in half lengthwise.",
    text: "For one minute, an affected creature gains the ability to spew magical energy from its mouth as an action. Target creatures in a 15 foot cone in front of it must make a DC13 Dexterity saving throw.",
    cost: { water: 1 },
    give: { fire: 1 },
  },
  {
    name: "Moonstone",
    prep: "Grind into a fine dust.",
    text: "An affected creature projects an aura in a 20 foot radius with an effect.",
    cost: { water: 1 },
    give: { air: 1 },
  },
  {
    name: "Pink Rocksalt",
    prep: "Crush one teaspoon.",
    text: "—",
    cost: { water: 1 },
    give: { salt: 1 },
  },
  // Fire adaptors
  {
    name: "Iron Filings",
    prep: "Stir at high heat.",
    text: "On a failed save, a creature suffers the following harmful effect.",
    cost: { fire: 1 },
    give: { mors: 1 },
  },
  {
    name: "Dry Ice",
    prep: "Drop a single piece.",
    text: "On a failed save, a creature is enveloped in a 10 radius sphere of mist that affects the area within.",
    cost: { fire: 1 },
    give: { air: 1 },
  },
  // Earth adaptors
  {
    name: "Crocodile Tears",
    prep: "Crush one teaspoon.",
    text: "An affected creature gains the ability to apply an effect to itself as an action, once per day.",
    cost: { earth: 1 },
    give: { water: 1 },
  },
  {
    name: "Left Ear of Elf",
    prep: "Stir clockwise until dissolved.",
    text: "As an action, an affected creature can force other creatures within 5 feet of itself to make a DC13 Wisdom saving throw. Once it does so, it can’t do so again until the next dawn.",
    cost: { earth: 1 },
    give: { fire: 1 },
  },
  {
    name: "Blood of an Enemy",
    prep: "The fresher the better.",
    text: "Once per turn, when an affected creature deals damage, the target suffers the following harmful effect.",
    cost: { earth: 1 },
    give: { mors: 1 },
  },
  // Air adaptors
  {
    name: "Pixie Dust",
    prep: "Scatter a generous pinch.",
    text: "Friendly creatures in the area benefit from a positive effect.",
    cost: { air: 1 },
    give: { water: 1 },
  },
  {
    name: "Red Amanita",
    prep: "Blow off the spores.",
    text: "Creatures in the affected area must make a DC11 Wisdom saving throw.",
    cost: { air: 1 },
    give: { fire: 1 },
  },
  // Mors adaptors
  {
    name: "Fire Salts",
    prep: "Sprinkle a decent pinch.",
    text: "Hostile creatures within 10 feet must make a DC11 Dexterity saving throw.",
    cost: { mors: 1 },
    give: { fire: 1 },
  },
  // Need adaptors giving salt
  // Ramps
  {
    name: "Saltpetre",
    prep: "Add gingerely.",
    text: "—",
    cost: { fire: 1 },
    give: { fire: 2 },
  },
  {
    name: "Ashes of a Loved One",
    prep: "Try not to lose any.",
    text: "—",
    cost: { earth: 1 },
    give: { earth: 2 },
  },
  // Water terminals
  {
    name: "Hair of Horse",
    prep: "Roll between fingers.",
    text: "An affected creature has an additional 10 feet of movement speed.",
    cost: { water: 1 },
    give: {},
  },
  {
    name: "Rose Petal",
    prep: "Bruise the petal by hand.",
    text: "An affected creature becomes charmed for 1 minute.",
    cost: { water: 1 },
    give: {},
  },
  {
    name: "Holy Water",
    prep: "Sprinkle a little.",
    text: "An affected creature becomes under the effect of the spell _bless_ for 1 minute.",
    cost: { water: 2 },
    give: {},
  },
  {
    name: "Drop of Silver",
    prep: "Drip from a hot ladel.",
    text: "An affected creature becomes under the effect of the spell _disguise self_ for 1 hour (save DC 13).",
    cost: { water: 2 },
    give: {},
  },
  // Fire terminals
  {
    name: "Eye of Newt",
    prep: "Drop from a height.",
    text: "On a failed save, a creature takes 1d12 poison damage.",
    cost: { fire: 1 },
    give: {},
  },
  {
    name: "Blood of Goat",
    prep: "Drip from the tip of a blade.",
    text: "On a failed save, a creature becomes under the effect of the spell _bane_.",
    cost: { fire: 2 },
    give: {},
  },
  {
    name: "Redmist Bulb",
    prep: "Squeeze to release the juice.",
    text: "On a failed save, an affected creature becomes compelled to duel with the first creature it sees for 1 minute. While under this effect, the creature has disadvantage to attack any other target and cannot willingly move away from its target. The effect ends prematurely if its target falls to 0 hit points or ends its turn more than 30 feet away.",
    cost: { fire: 2 },
    give: {},
  },
  // Earth terminals
  {
    name: "Stamella Shroom",
    prep: "Slice the mushroom thinly.",
    text: "An affected creature gains a +1 bonus to Athletics and Acrobatics checks.",
    cost: { earth: 1 },
    give: {},
  },
  {
    name: "Owlbear Feather",
    prep: "Strip with a knife.",
    text: "An affected creature gains a darkvision out to a range of 60 feet.",
    cost: { earth: 2 },
    give: {},
  },
  {
    name: "Ironcap Shroom",
    prep: "Slice the mushroom thinly.",
    text: "An affected creature gains a +2 bonus to AC.",
    cost: { earth: 2 },
    give: {},
  },
  // Air terminals
  {
    name: "Lump of Coal",
    prep: "Crush in the hand.",
    text: "The affected area is filled with black smoke and becomes heavily obscured for 1 minute.",
    cost: { air: 1 },
    give: {},
  },
  {
    name: "Block of Peat",
    prep: "Set alight.",
    text: "The ground in the affected area becomes difficult terrain for 1 minute.",
    cost: { air: 1 },
    give: {},
  },
  // Vitae terminals
  {
    name: "Sheaf of Wheat",
    prep: "Twist off the grains.",
    text: "An affected creature regains 2d4+2 hit points.",
    cost: { vitae: 1 },
    give: {},
  },
  {
    name: "Manuka Honey",
    prep: "Drizzle 4 heaped teaspoons.",
    text: "An affected creature regains 4d4+4 hit points.",
    cost: { vitae: 2 },
    give: {},
  },
  {
    name: "Bone of Chicken",
    prep: "Snap in half.",
    text: "An affected creature is no longer affected by one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.",
    cost: { vitae: 2 },
    give: {},
  },
  // Mors terminals
  {
    name: "Brimstone",
    prep: "Crush and scatter.",
    text: "An affected creature takes 1d6 fire damage.",
    cost: { mors: 2 },
    give: {},
  },
  // Salt terminals
  {
    name: "Fine Sand",
    prep: "Let a handful run through your fingers.",
    text: "[Double the duration of the previous ingredients effects.]",
    cost: { salt: 1 },
    give: {},
  },
  {
    name: "Dragon Egg Yolk",
    prep: "Crack and whisk.",
    text: "[Repeat the effect of the previous ingredient.]",
    cost: { salt: 2 },
    give: {},
  },
  {
    name: "Quicksilver",
    prep: "Just one drop.",
    text: "[The previous action can alternatively be done as a bonus action.]",
    cost: { salt: 3 },
    give: {},
  },
  // Mixed terminals
  {
    name: "Salamander Tail",
    prep: "Drop while still wriggling.",
    text: "An affected creature’s severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If the severed part is held to the stump, they are instantaneously knit together.",
    cost: { water: 1, vitae: 1 },
    give: {},
  },
]

export default ingredients
