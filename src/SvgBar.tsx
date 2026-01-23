export type SvgBarProps = Readonly<{
  x: number,
  y: number,
  width: number,
  barHeight: number,
  capRadius: number,
}>

export default function SvgBar(props: SvgBarProps) {
  const { x, y, width, barHeight, capRadius } = props

  const halfBarHeight = barHeight / 2
  const barWidth = width - 2 * capRadius
  const x1 = x + capRadius
  const x2 = x - capRadius + width
  const y1 = y - halfBarHeight

  return (
    <g className="SvgBar" fill="#000511">
      <rect x={x1} y={y1} width={barWidth} height={barHeight} />
      <circle cx={x1} cy={y} r={capRadius} />
      <circle cx={x2} cy={y} r={capRadius} />
    </g>
  )
}
