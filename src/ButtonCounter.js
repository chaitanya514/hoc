import React from "react"

class ButtonCounter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count :0
        }
        this.increment = this.increment.bind(this)
    }

    increment(){
        this.setState((state)=>{
         return{
            count:state.count+1
         }
            
         
    }
          
        )
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}>Click me I'm gonna increase by {this.state.count}</button>

                </div>
        )
    }
}

export default ButtonCounter