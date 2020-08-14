import React from "react"

const updatedComponent = (OriginalComponent,incrementNumber) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
            this.increment = this.increment.bind(this)
        }

        increment() {
            this.setState((state) => {
                return {
                    count: state.count + incrementNumber
                }})
             }
        render() {
            return (
                <OriginalComponent count={this.state.count} 
                                    increment={this.increment} 
                                    {...this.props}/>
            ) }
}
    return NewComponent
}

export default updatedComponent