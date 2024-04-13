import {Component} from "react"
import './App.css'
class Age extends Component{
state = {
  date : new Date(),
  newDate : "",
  yourAge : "",
  isShow : false,
  error : false


}
onChangeDate = event =>{
  this.setState({newDate : event.target.value})
}
renderDisplay = ()=>{
  const{date,newDate,yourAge} = this.state
      const fullDate = parseInt(date.getFullYear())
      const newFullDate = parseInt(newDate) 
      let display = fullDate - newFullDate
      if(yourAge === ""){
        this.setState({error : true})
      }
      if(yourAge > 0){
        this.setState({isShow : true})
      }
      this.setState({yourAge : display})
     
    }
 
    render(){
      const{yourAge,isShow,error} = this.state
      
        return(
            <div className="bg">
              <div>
              <div>
              <h1>Age calculator</h1>
              <p className="para">calculate your Age</p>
              </div>
              <label className="label">Enter your birth year</label>
              <div>
                
              <input type="text" onChange = {this.onChangeDate} placeholder="ENTER YOUR BIRTH YEAR" className="inpu"/>
              
             
              </div>
              {!error && <p className="reqpa">required</p>}
              <button onClick={this.renderDisplay} className="btn">calculate Your age</button>
              {isShow && <h1>{`your are ${yourAge} old `}</h1> }
             
              </div>
            </div>
        )
    }
}
export default Age