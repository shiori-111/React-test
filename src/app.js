import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  handleClick1(){
    this.setState(
      {count: this.state.count + 1}
    );
  }
  handleclick2(){
    this.setState({count: 0});
  }

  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.handleClick1()}}>+</button>
        <button onClick={()=>{this.handleclick2()}}>Reset</button>
      </div>
    );
  }
}


export default App;