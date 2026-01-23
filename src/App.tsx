import ingredients from './data/ingredients'
import IngredientCard from './IngredientCard'

import './App.css'
import Explanation from './Explanation'
import Accordion from './Accordion'

function App() {
  return (
    <div className="App">
      <h1>5e Alchemy</h1>
      <Accordion heading="Explanation" defaultExpanded>
        <Explanation />
      </Accordion>
      {ingredients.map(ingredient =>
        <IngredientCard key={ingredient.name} {...ingredient} />
      )}
    </div>
  )
}

export default App
