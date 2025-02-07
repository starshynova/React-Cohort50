import React, {useState, useEffect, useDebugValue} from 'react';


function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined })
    
    useDebugValue(`now width is: ${windowSize.width}px, height: ${windowSize.height}px`)

    useEffect(() => {
        const handleResize = () =>
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })

        window.addEventListener("resize", handleResize)
        handleResize() // call it right away!

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize
}

// function useWithinWindowWidth(minWidth, maxWidth) {
//     const { width } = useWindowSize()
  
//     const isWithin = width && width >= minWidth && width <= maxWidth
//     useDebugValue({ minWidth, maxWidth, isWithin }, formatDebugValueWithinWindow)
//     return isWithin
//   }



//   const formatDebugValueWithinWindow = ({ minWidth, maxWidth, isWithin }) => {
//     if (maxWidth === Infinity) {
//         return `(min-width: ${minWidth}px) => ${isWithin}`
//     }
//     if (minWidth === 0) {
//         return `(max-width: ${maxWidth}px) => ${isWithin}`
//     }
//     return `(max-width: ${maxWidth}px) and (min-width: ${minWidth}px) => ${isWithin}`
//   }
  
//   export { useWindowSize, useWithinWindowWidth };

export { useWindowSize}

