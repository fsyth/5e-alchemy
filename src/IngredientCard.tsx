import type { Ingredient } from './data/ingredients'

import SvgAtoms from './SvgAtoms'
import SvgTextArea from './SvgTextArea'

import './IngredientCard.css'

type IngredientCardProps = Readonly<Ingredient>

export default function IngredientCard(props: IngredientCardProps) {
  const { name, prep, text, cost, give } = props

  return (
    <svg className="IngredientCard" viewBox="0 0 100 140">
      <rect className="background" x={0} y={0} width={100} height={140}></rect>
      <rect className="name-background" x={0} y={2} width={100} height={10}></rect>
      <rect className="effect-background" x={0} y={75} width={100} height={61}></rect>
      <SvgTextArea className="name" x={5} y={ 2} width={90} height={10} text={name} />
      <SvgTextArea className="prep" x={5} y={66} width={90} height={ 8} text={prep} />
      <SvgTextArea className="text" x={5} y={75} width={90} height={60} text={text} />
      <SvgAtoms className="cost" atoms={cost} x={ 1} y={2.5} />
      <SvgAtoms className="give" atoms={give} x={99} y={2.5} alignRight />
    </svg>
  )
}
