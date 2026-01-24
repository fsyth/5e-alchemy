import Accordion from './Accordion'
import Brewing from './Brewing'
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
      <Accordion heading="Let’s Brew!">
        <Brewing />
      </Accordion>
      <Accordion heading="All Ingredients">
        {ingredients.map(ingredient =>
          <IngredientCard key={ingredient.name} ingredient={ingredient} />
        )}
      </Accordion>
    </div>
  )
}

export default App
