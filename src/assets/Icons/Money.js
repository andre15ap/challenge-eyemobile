import React from "react"
import Svg, { Circle, G, Rect, Ellipse, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 120 120" {...props}>
      <Circle data-name="Oval 7" cx={60} cy={60} r={60} fill="#62dbc0" />
      <G data-name="Group 5">
        <G data-name="Group 4" transform="rotate(-46.01 97.076 3.558)">
          <Rect
            data-name="Rectangle 13"
            width={63.889}
            height={34.47}
            rx={6.947}
            fill="#fff"
          />
          <Ellipse
            data-name="Oval 7"
            cx={8.406}
            cy={12.064}
            rx={8.406}
            ry={12.064}
            transform="translate(23.538 6.894)"
            fill="#7aedd3"
          />
        </G>
        <G data-name="Group 4">
          <G
            data-name="Rectangle 13"
            transform="rotate(-12.04 249.214 -74.982)"
            fill="#fff"
            stroke="#62dbc0"
            strokeMiterlimit={10}
            strokeWidth={3.064}
          >
            <Rect width={72.25} height={37.339} rx={6.947} stroke="none" />
            <Rect
              x={1.532}
              y={1.532}
              width={69.186}
              height={34.276}
              rx={5.415}
              fill="none"
            />
          </G>
          <Path
            d="M64.563 57.687a31.263 31.263 0 00-3.088-.5 6.92 6.92 0 01-1.725-.42c-1.065-.438-1.107-1.509-.104-2.15a3.22 3.22 0 01.923-.373 8.518 8.518 0 013.736-.155c.62.114.791 0 .876-.55.088-.58.14-1.161.214-1.743.048-.39-.158-.597-.59-.665a10.566 10.566 0 00-2.4-.103c-1.06.084-1.062.079-1.255-.808-.267-1.252-.267-1.252-1.734-.94l-.636.136c-.681.162-.775.29-.669.885.047.266.113.529.17.797.166.782.154.775-.665 1.234-1.989 1.118-3.035 2.637-2.753 4.65.249 1.787 1.57 2.74 3.436 3.247a32.339 32.339 0 003.552.566 5.225 5.225 0 011.323.35 1.357 1.357 0 01.133 2.545 4.634 4.634 0 01-2.057.684 10.828 10.828 0 01-3.385-.144c-.649-.138-.808-.032-.894.561-.072.512-.124 1.024-.177 1.537-.07.688.04.824.82.974a11.84 11.84 0 003.044.096c.805-.059.834-.035.991.657.067.314.134.632.211.945.085.397.36.58.84.487a56.476 56.476 0 001.624-.346c.442-.102.624-.358.543-.742-.092-.43-.16-.869-.276-1.294s.055-.703.52-.922a5.735 5.735 0 002.503-2.168c1.62-2.587.166-5.565-3.05-6.328z"
            fill="#62dbc0"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
