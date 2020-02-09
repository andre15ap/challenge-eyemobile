import React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function IconDebit(props) {
  return (
    <Svg width={props.width || 120} height={props.height || 120} viewBox="0 0 120 120" {...props}>
      <G data-name="ic_debit">
        <Circle data-name="Oval 7" cx={60} cy={60} r={60} fill="#4a90e2" />
        <Path
          data-name="Combined Shape"
          d="M86 81H34a7.008 7.008 0 01-7-7V56.5h66V74a7.008 7.008 0 01-7 7zm7-31.5H27V46a7.008 7.008 0 017-7h52a7.008 7.008 0 017 7v3.5z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default IconDebit