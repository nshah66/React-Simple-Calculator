/**
 * Created by Niyati on 3/15/2017.
 */

//Button Component
class Button extends React.Component{

  localHandleClick(){
    this.props.localHandleClick(this.props.name);
  }
      render(){
        return(
            <button onClick={this.localHandleClick.bind(this)}>{this.props.name}</button>
        );
      }
}

//Result Component
class Result extends React.Component{
  render(){
    return(
      <text>{this.props.localResult}</text>
    );
  }
}



//Main component which contains all other elements(components) which we need to display on screen
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {answer: "RESULT"}
    this.HandleClick = this.HandleClick.bind(this);
  }
  HandleClick(e){
    var fVal = parseInt(this.first.value);
    var sVal = parseInt(this.second.value);
    var res;
    switch (e){
        case "+":
            res = fVal+sVal;
            this.setState({answer: res});
            break;
        case "-":
            res = fVal-sVal;
            this.setState({answer: res});
            break;
        case "*":
            res = fVal*sVal;
            this.setState({answer: res});
            break;
        case "/":
            res = fVal/sVal;
            this.setState({answer: res.toFixed(2)});
            break;
        case "%":
            res = fVal%sVal;
            this.setState({answer: res});
            break;
        default:
          alert("going wrong way!!!")
            break;

    }

  }
    render() {
        return (
            <div>
              <input type="text" name="text" placeholder="Enter any Number!" ref={(x) => this.first = x}/><br/><br/>
              <input type="text" name="text" placeholder="Enter any Number!" ref={(y) => this.second = y}/><br/><br/><br/>
              <Button localHandleClick={this.HandleClick} name="+"/>
              <Button localHandleClick={this.HandleClick} name="-"/>
              <Button localHandleClick={this.HandleClick} name="*"/>
              <Button localHandleClick={this.HandleClick} name="/"/>
              <Button localHandleClick={this.HandleClick} name="%"/><br/><br/><br/>
              <Result localResult={this.state.answer}/>
            </div>
        );
    }
}



ReactDOM.render(
  <Main/>,
    document.getElementById('root')
);