import SvgBar from "./SvgBar"
import SvgOrnateBar from "./SvgOrnateBar"
import SvgTextArea from "./SvgTextArea"

import parchmentSrc from './assets/textures/parchment.jpg'

export type SvgEffectTextProps = Readonly<{
  text: string,
  x: number,
  y: number,
}>

export default function SvgEffectText(props: SvgEffectTextProps) {
  const { text, x, y } = props

  const h = 140 - y

  return (
    <g className="SvgEffectText" transform={`translate(${x}, ${y})`}>
      <rect x={0} y={0} width={100} height={h} fill="#fff0e7" />
      <image href={parchmentSrc} x={0} y={0} width={100} height={h} opacity={0.5} preserveAspectRatio="xMidYMid slice" />
      <SvgTextArea className="text" x={5} y={0} width={90} height={h} text={text} />
      <SvgOrnateBar x={0} y={0} width={100} barHeight={0.3} capRadius={1.25} />
      <SvgBar x={0} y={h} width={100} barHeight={0.3} capRadius={0.45} />
    </g>
  )
}
