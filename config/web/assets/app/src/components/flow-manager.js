import React from "react"
import { withStyles } from "@material-ui/core/styles"

import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

const styles = (theme) => ({
  root: {
  },
})

const colors = ["#ff0055", "#0099ff", "#22cc88", "#ffaa00"];

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
}

const FlowManager = (props) => {
  const [selected, setSelected] = useState(colors[0])

  return (
    <AnimateSharedLayout>
      <ul>
        {colors.map(color => (
          <Item
            key={color}
            color={color}
            isSelected={selected === color}
            onClick={() => setSelected(color)}
          />
        ))}
      </ul>
    </AnimateSharedLayout>
  )
}

function Item({ color, isSelected, onClick }) {
  return (
    <li className="item" onClick={onClick} style={{ backgroundColor: color }}>
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        />
      )}
    </li>
  )
}

export default FlowManager
