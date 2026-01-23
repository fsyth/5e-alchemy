import SvgTextArea from "./SvgTextArea"

export type SvgScalesProps = Readonly<{
  x: number,
  y: number,
}>

export default function SvgScales(props: SvgScalesProps) {
  const { x, y } = props
  
  return (
    <g className="SvgScales" transform={`translate(${x}, ${y})`}>
      <rect x={9} y={0.7} width={82} height={0.4} fill="#634700" />
      <path d="M 0,0 a 20,20 0,0,0 18,0 z" fill="#b68d13" />
      <path d="M 82,0 a 20,20 0,0,0 18,0 z" fill="#b68d13" />
      <circle cx={50} cy={0.9} r={0.6} fill="#f3b90a" />
      <circle cx={50} cy={0.9} r={0.2} fill="#4d3700" />
      <SvgTextArea x={0} y={-0.5} width={18} height={3} text="costs" />
      <SvgTextArea x={82} y={-0.5} width={18} height={3} text="gives" />
    </g>
  )
}
