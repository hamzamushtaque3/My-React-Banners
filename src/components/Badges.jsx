import React from "react"
import classnames from "classnames"


export default function Badges ({children,className,shape,color,...rest}) {

    let shapeClass = shape ? `badge-${shape}`: ""
    let colorClass = color ? `badge-${color}`: ""

    const allClasses = classnames("badge",shapeClass,colorClass,className)
    
    return (
        <button className={allClasses}{...rest}>
            {children}
        </button>

    )
}