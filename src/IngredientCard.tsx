import type { Ingredient } from './data/ingredients'

import SvgEffectText from './SvgEffectText'
import SvgNamePlate from './SvgNamePlate'
import SvgPrepText from './SvgPrepText'

import './IngredientCard.css'

export type IngredientCardProps = Readonly<Ingredient>

export default function IngredientCard(props: IngredientCardProps) {
  const { name, prep, text, cost, give, art='cauldron.jpg' } = props

  return (
    <svg className="IngredientCard" viewBox="-2.5 -2.5 105 145">
      <rect className="border" x={-2.5} y={-2.5} width={105} height={145} rx={2.5} fill="#eeeeff" />
      <rect className="background" x={0} y={0} width={100} height={140} fill="#ffeecc" />
      <image href={`../src/assets/art/${art}`} x={0} y={8} width={100} height={62} preserveAspectRatio="xMidYMid slice" />
      <SvgNamePlate name={name} cost={cost} give={give} x={0} y={0} />
      <SvgEffectText text={text} x={0} y={75} />
      <SvgPrepText prep={prep} x={0} y={70} />
    </svg>
  )
}
