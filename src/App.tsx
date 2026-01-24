import Accordion from './Accordion'
import Explanation from './Explanation'
import IngredientCard from './IngredientCard'

import ingredients from './data/ingredients'

import './App.css'

function App() {
  return (
    <div className="App">
      <h1>5e Alchemy</h1>
      <Accordion heading="Explanation">
        <Explanation />
      </Accordion>
      <Accordion heading="All Ingredients">
        {ingredients.map(ingredient =>
          <IngredientCard key={ingredient.name} {...ingredient} />
        )}
      </Accordion>
    </div>
  )
}

export default App
