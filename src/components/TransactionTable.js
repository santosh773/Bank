import React,{Component} from "react";


class TransactionTable extends Component  {
  //({txns})
  
  constructor(props){
    super(props);
    this.state ={
      date:'',
      values : []
    }
    this.sort = this.sort.bind(this)
  }
  componentDiUpdate(){
   
  }
  componentDidMount(){
    this.setState({values:this.props.txns})
  }
  sort(key){
    
   this.setState({values: this.state.values.sort((a,b)=>a.amount-b.amount)}) 
  }
getDate(){
  
  const state = document.getElementById("date").value
  this.setState({date: state})
} render(){
  // const sort = () => {}; 
  return (
    <div className="layout-column align-items-center mt-50">
      <input>
      
      </input>
      <label>to</label><input></input>
    </div>
  );
}
}

export default TransactionTable;
