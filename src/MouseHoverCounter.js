import React from "react"
import updatedComponent from "./withCounter"

class MouseHoverCounter extends React.Component {
    

    render() {
        const {count,increment} = this.props
        return (
            <div>
                    <h2 onMouseOver={increment}>just Hover over your mouse {count}</h2>
            </div>
        )
    }
}

export default updatedComponent(MouseHoverCounter)