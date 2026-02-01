import SvgAtoms from './SvgAtoms'

import periodicTableSrc from './assets/images/periodic-table.png'

import './Explanation.css'

export default function Explanation() {
  return (
    <div className="Explanation">
      <p>This is a potion crafting system designed for D&D 5e. The concept is fairly simple: ingredients have effects, and a brewed potion is just all of its ingredients’ effects concatenated to build a potion description.</p>
      <p>Ideally, you should just need to order a list of ingredients following the brewing rules, and the potion effect (plus some flavour for the potion’s preparation) should just emerge.</p>
      <img src={periodicTableSrc} />
      <p>Ingredients have an element cost that must be met to successfully add them to the brew. Potions start with a base that has no element cost, provides some elements, and also describes the usage of the potion as its effect.</p>
      <p>For example, a liquid base makes a drinkable potion, a powder base makes a thrown flask, and an oil base makes a potion that can be applied to a weapon.</p>
      <h2>Brewing Rules</h2>
      <p>Any invalid mixture results in the alchemy fizzling into a puff of smoke or a fizzle or a sludge: something inert and a waste of time and ingredients. Failure to meet any of the following conditions will make the alchemy invalid:</p>
      <ul>
        <li>Bases can only appear at the start.</li>
        <li>You must be able to pay the element cost of an ingredient before adding it.</li>
        <li>All provided elements must be consumed by the end of the brew.</li>
        <li>Ingredients cannot be repeated.</li>
        <li>Fire is unstable, so <i>all</i> outstanding fire has to be consumed immediately by the next ingredient.</li>
        <li>Mors is volatile. If you have any mors, your next ingredient must consume some mors.</li>
      </ul>
      <svg viewBox="0 0 61 10">
        <SvgAtoms atoms={{ water: 1, fire: 1, earth: 1, air: 1, vitae: 1, mors: 1, salt: 1 }} />
      </svg>
    </div>
  )
}
