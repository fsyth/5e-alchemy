export type SvgTextAreaProps = Readonly<{
  text: string,
  className?: string,
  x: number,
  y: number,
  width: number,
  height: number,
}>

export default function SvgTextArea(props: SvgTextAreaProps) {
  const { text } = props

  const lines = text.split('\n')

  return (
    <foreignObject {...props}>
      <div className="SvgTextArea">
        {lines.map((line, index) =>
          <p key={index}>{line}</p>
        )}
      </div>
    </foreignObject>
  )
}
