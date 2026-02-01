import SvgTextArea from './SvgTextArea'

export type SvgScalesProps = Readonly<{
  x: number,
  y: number,
}>

export default function SvgScales(props: SvgScalesProps) {
  const { x, y } = props

  return (
    <g className="SvgScales" transform={`translate(${x}, ${y})`}>
      <rect x={9} y={0.7} width={82} height={0.4} fill="#8b6400" />
      <path d="M  0,0 l 0,1 a 30,30 0,0,0 18,0 l 0,-1 z" fill="#b68d13" />
      <path d="M 82,0 l 0,1 a 30,30 0,0,0 18,0 l 0,-1 z" fill="#b68d13" />
      <circle cx={50} cy={1} r={0.9} fill="#8b6400" />
      <circle cx={50} cy={1} r={0.8} fill="#f3b90a" />
      <circle cx={50} cy={1} r={0.5} fill="#8b6400" />
      <SvgTextArea x={0}  y={-1} width={18} height={5} text="costs" />
      <SvgTextArea x={82} y={-1} width={18} height={5} text="gives" />
    </g>
  )
}
