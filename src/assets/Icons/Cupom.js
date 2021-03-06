import React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function IconCupom(props) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 120 120" {...props}>
      <G data-name="Grupo 12">
        <G data-name="ic_debit">
          <Circle data-name="Oval 7" cx={60} cy={60} r={60} fill="#4ae250" />
        </G>
        <G data-name="Grupo 3" fill="#fff">
          <Path
            data-name="Caminho 1"
            d="M90.847 48.521l-4.9-4.858a7.506 7.506 0 01-10.571 0 7.194 7.194 0 01-2.176-5.286 7.2 7.2 0 012.179-5.283l-4.859-4.861a5.021 5.021 0 00-7.034 0L28.234 63.445a5.02 5.02 0 000 7.034l4.858 4.9a7.2 7.2 0 015.286-2.176 7.193 7.193 0 015.285 2.176 7.507 7.507 0 010 10.571l4.9 4.9a5.021 5.021 0 007.035 0l35.251-35.29a5.021 5.021 0 000-7.034zm-10.533 7.773L56.296 80.312a2.534 2.534 0 01-3.5 0L38.728 66.244a2.441 2.441 0 010-3.5l24.019-24.017a2.536 2.536 0 013.5 0l14.067 14.067a2.439 2.439 0 010 3.5z"
          />
          <Path
            data-name="Caminho 2"
            d="M64.497 42.264l12.282 12.281-22.231 22.231-12.281-12.281z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default IconCupom;