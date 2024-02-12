import React, { Component } from 'react'

export class kennie extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"lambo"
      }
      this.state={
        value:"how are you"
      }
      this.state={
      option:"value"
      }
    }

    const textChange=(event)=>{
        this.setState({
            value:event.target.value
        })
    }
    
  render() {
    return (
      <div>
        <form>
<input type="text" value={this.state.value} onchange={this.textChange}/>
        </form>
      </div>
    )
  }
}

export default kennie
