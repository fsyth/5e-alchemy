import { useState } from 'react'

import type { Atoms, Ingredient } from './data/ingredients'
import ingredients from './data/ingredients'
import IngredientCard from './IngredientCard'
import SvgAtoms from './SvgAtoms'

function isBaseIngredient(ingredient: Ingredient) {
  return (
    (ingredient.cost.water ?? 0) === 0 &&
    (ingredient.cost.fire  ?? 0) === 0 &&
    (ingredient.cost.earth ?? 0) === 0 &&
    (ingredient.cost.air   ?? 0) === 0 &&
    (ingredient.cost.vitae ?? 0) === 0 &&
    (ingredient.cost.mors  ?? 0) === 0 &&
    (ingredient.cost.salt  ?? 0) === 0
  )
}

function canAffordIngredient(availableAtoms: Atoms, ingredient: Ingredient) {
  return (
    (ingredient.cost.water ?? 0) <= availableAtoms.water &&
    (ingredient.cost.fire  ?? 0) <= availableAtoms.fire  &&
    (ingredient.cost.earth ?? 0) <= availableAtoms.earth &&
    (ingredient.cost.air   ?? 0) <= availableAtoms.air   &&
    (ingredient.cost.vitae ?? 0) <= availableAtoms.vitae &&
    (ingredient.cost.mors  ?? 0) <= availableAtoms.mors  &&
    (ingredient.cost.salt  ?? 0) <= availableAtoms.salt
  )
}

export default function Brewing() {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([])

  const availableAtoms: Atoms = {
      water: 0,
      fire:  0,
      earth: 0,
      air:   0,
      vitae: 0,
      mors:  0,
      salt:  0,
  }

  for (let ingredient of selectedIngredients) {
    availableAtoms.water += (ingredient.give.water ?? 0) - (ingredient.cost.water ?? 0)
    availableAtoms.fire  += (ingredient.give.fire  ?? 0) - (ingredient.cost.fire  ?? 0)
    availableAtoms.earth += (ingredient.give.earth ?? 0) - (ingredient.cost.earth ?? 0)
    availableAtoms.air   += (ingredient.give.air   ?? 0) - (ingredient.cost.air   ?? 0)
    availableAtoms.vitae += (ingredient.give.vitae ?? 0) - (ingredient.cost.vitae ?? 0)
    availableAtoms.mors  += (ingredient.give.mors  ?? 0) - (ingredient.cost.mors  ?? 0)
    availableAtoms.salt  += (ingredient.give.salt  ?? 0) - (ingredient.cost.salt  ?? 0)
  }

  const availableIngredients = ingredients.filter(ingredient => {
    // Rule: bases can only appear at the start
    if ((selectedIngredients.length === 0) !== isBaseIngredient(ingredient))
      return false

    // Rule: cannot repeat ingredients
    if (selectedIngredients.some(selectedIngredient => selectedIngredient === ingredient))
      return false

    // Rule: all fire must be completely consumed
    if (availableAtoms.fire > 0 && ingredient.cost.fire !== availableAtoms.fire)
      return false

    // Rule: if any mors, must consume some mors
    if (availableAtoms.mors > 0 && (ingredient.cost.mors ?? 0) < 1)
      return false

    // Rule: must be able to pay cost of ingredient
    if (!canAffordIngredient(availableAtoms, ingredient))
      return false

    return true
  })

  const pushIngredient = (ingredient: Ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient])
  }

  const popIngredient = () => {
    setSelectedIngredients(selectedIngredients.slice(0, -1))
  }

  return (
    <div className="Brewing">
      <h2>Selected Ingredients</h2>
      <div>
        {selectedIngredients.map(ingredient =>
          <IngredientCard key={ingredient.name} ingredient={ingredient} />
        )}
        {selectedIngredients.length === 0 &&
          <p>—</p>
        }
      </div>
      <div>
        {selectedIngredients.length > 0 &&
          <button onClick={popIngredient}>Undo</button>
        }
        <h3>
          <svg viewBox='0 0 50 10' height={32}>
            <SvgAtoms atoms={availableAtoms} />
          </svg>
        </h3>
      </div>
      <div>
        <h2>Available Ingredients</h2>
        {availableIngredients.map(ingredient =>
          <IngredientCard key={ingredient.name} ingredient={ingredient} onClick={pushIngredient} />
        )}
        {availableIngredients.length === 0 &&
          <p>—</p>
        }
      </div>
    </div>
  )
}
