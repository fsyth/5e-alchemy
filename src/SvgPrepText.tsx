import SvgBar from "./SvgBar"
import SvgTextArea from "./SvgTextArea"

export type SvgPrepTextProps = Readonly<{
  prep: string,
  x: number,
  y: number,
}>

export default function SvgPrepText(props: SvgPrepTextProps) {
  const { prep, x, y } = props

  return (
    <g className="SvgPrepText" transform={`translate(${x}, ${y})`}>
      <rect x={0} y={0} width={100} height={4.85} fill="white" />
      <SvgTextArea className="prep" x={0} y={-0.5} width={100} height={5} text={prep} />
      <SvgBar x={0} y={0} width={100} barHeight={0.3} capRadius={0} />
    </g>
  )
}
