import React from 'react'
import {Spring, animated, config} from 'react-spring/renderprops'

export default ({ data }) => {

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '1rem 0 1rem 0'
      }}
    >
      <Spring
        native
        reset
        delay={1000}
        from={{ x: 100, opacity: 0 }}
        to={{ x: 0, opacity: 1 }}
        config={config.molasses}
      >
        {({ x, opacity }) => (
          <animated.svg
            className={"icon"}
            style={{ opacity }}
            // viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={100}
            strokeDashoffset={x}
            width="16" 
            height="47" 
            // viewBox="0 0 16 47"
          >
            <path pathLength="100" d="M6.5 45.5V5.5"  />
            <path pathLength="100" d="M6.5 45.5L12.5 40.5"  />
            <path pathLength="100" d="M6.5 45.5L0.5 40.5" />
            
          </animated.svg>
        )}
      </Spring>
    </div>
  )
}