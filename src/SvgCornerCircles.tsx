export type SvgCornerCirclesProps = Readonly<{
  r: number,
  x: number,
  y: number,
  width: number,
  height: number,
}>

export default function SvgCornerCircles(props: SvgCornerCirclesProps) {
  const { r, x: x1, y: y1, width, height } = props

  const x2 = x1 + width
  const y2 = y1 + height

  return (
    <g className="SvgCornerCircles" fill="#000511">
      <path d={`M ${x1} ${y1} l 0,${r} a ${r},${r} 0,0,0 ${r},-${r} z`} />
      <path d={`M ${x2} ${y1} l -${r},0 a ${r},${r} 0,0,0 ${r},${r} z`} />
      <path d={`M ${x1} ${y2} l ${r},0 a ${r},${r} 0,0,0 -${r},-${r} z`} />
      <path d={`M ${x2} ${y2} l 0,-${r} a ${r},${r} 0,0,0 -${r},${r} z`} />
    </g>
  )
}
