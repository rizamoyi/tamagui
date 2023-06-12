import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <_Circle cx="12" cy="17" r="1" stroke={`${color}`} />
      <Path d="M21 7v6h-6" stroke={`${color}`} />
      <Path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'RedoDot'

export const RedoDot = memo<IconProps>(themed(Icon))
