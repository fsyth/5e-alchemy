import type { Atoms } from "./data/ingredients"

import SvgAtoms from "./SvgAtoms"
import SvgTextArea from "./SvgTextArea"

import parchmentSrc from './assets/textures/parchment.jpg'
import SvgScales from "./SvgScales"

export type SvgNamePlateProps = Readonly<{
  name: string,
  cost: Atoms,
  give: Atoms,
  x: number,
  y: number,
}>

export default function SvgNamePlate(props: SvgNamePlateProps) {
  const { name, cost, give, x, y } = props

  return (
    <g className="SvgNamePlate" transform={`translate(${x}, ${y})`}>
      <rect x={0} y={0} width={100} height={8} fill="#fff0e7" />
      <image href={parchmentSrc} x={0} y={0} width={100} height={8} opacity={0.5} preserveAspectRatio="xMidYMid slice" />
      <SvgScales x={0} y={7} />
      <SvgTextArea className="name" x={5} y={-0.5} width={90} height={10} text={name} />
      <SvgAtoms className="cost" atoms={cost} x={-0.5} y={0.2} />
      <SvgAtoms className="give" atoms={give} x={100.5} y={0.2} alignRight />
    </g>
  )
}
