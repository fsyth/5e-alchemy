import type { Atoms } from './data/ingredients'

import airSrc   from './assets/atoms/air.png'
import earthSrc from './assets/atoms/earth.png'
import fireSrc  from './assets/atoms/fire.png'
import morsSrc  from './assets/atoms/mors.png'
import saltSrc  from './assets/atoms/salt.png'
import vitaeSrc from './assets/atoms/vitae.png'
import waterSrc from './assets/atoms/water.png'

export type SvgAtomsProps = Readonly<{
  atoms: Partial<Atoms>,
  className?: string,
  imageSize?: number,
  stride?: number,
  x?: number,
  y?: number,
  alignRight?: boolean,
}>

export default function SvgAtoms(props: SvgAtomsProps) {
  const {
    atoms: {
      water = 0,
      fire  = 0,
      earth = 0,
      air   = 0,
      vitae = 0,
      mors  = 0,
      salt  = 0,
    },
    className,
    imageSize = 10,
    stride = imageSize * 0.85,
    x = 0,
    y = 0,
    alignRight = false,
  } = props

  const imageSrcs = []

  for (let i = 0; i < water; ++i) {
    imageSrcs.push(waterSrc)
  }

  for (let i = 0; i < fire; ++i) {
    imageSrcs.push(fireSrc)
  }

  for (let i = 0; i < earth; ++i) {
    imageSrcs.push(earthSrc)
  }

  for (let i = 0; i < air; ++i) {
    imageSrcs.push(airSrc)
  }

  for (let i = 0; i < vitae; ++i) {
    imageSrcs.push(vitaeSrc)
  }

  for (let i = 0; i < mors; ++i) {
    imageSrcs.push(morsSrc)
  }

  for (let i = 0; i < salt; ++i) {
    imageSrcs.push(saltSrc)
  }

  return (
    <g className={className} transform={`translate(${x}, ${y})`}>
      {imageSrcs.map((imageSrc, index) =>
        <image
          key={index}
          href={imageSrc}
          x={alignRight ? -index * stride - imageSize : index * stride}
          y={0}
          width={imageSize}
          height={imageSize}
        />
      )}
    </g>
  )
}
