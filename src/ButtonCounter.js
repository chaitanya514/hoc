import React from "react"
import updatedComponent from "./withCounter"


class ButtonCounter extends React.Component {
   
    render() {
        const {count,increment} = this.props
        return (
            <div>
                <button onClick={increment}>Click me I'm gonna increase by {count}</button>

            </div>
        )
    }
}

export default updatedComponent(ButtonCounter)