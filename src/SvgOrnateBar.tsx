export type SvgOrnateBarProps = Readonly<{
  x: number,
  y: number,
  width: number,
  barHeight: number,
  capRadius: number,
}>

export default function SvgOrnateBar(props: SvgOrnateBarProps) {
  const { x, y, width, barHeight, capRadius } = props

  const halfBarHeight = barHeight / 2
  const y1 = y - halfBarHeight

  return (
    <g className="SvgBar" fill="#000511">
      <rect x={x} y={y1} width={width} height={barHeight} />
      <circle cx={0.5 * width} cy={y} r={capRadius} />
      <circle cx={0.5 * width - 1.6 * capRadius} cy={y} r={0.6 * capRadius} />
      <circle cx={0.5 * width + 1.6 * capRadius} cy={y} r={0.6 * capRadius} />
      <circle cx={0.5 * width + 2.56 * capRadius} cy={y} r={0.36 * capRadius} />
      <circle cx={0.5 * width - 2.56 * capRadius} cy={y} r={0.36 * capRadius} />
    </g>
  )
}
