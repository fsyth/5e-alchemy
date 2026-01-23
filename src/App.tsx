import ingredients from './data/ingredients'
import IngredientCard from './IngredientCard'

import './App.css'

function App() {
  return (
    <div className="App">
      <h1>5e Alchemy</h1>
      {ingredients.map(ingredient =>
        <IngredientCard key={ingredient.name} {...ingredient} />
      )}
    </div>
  )
}

export default App
