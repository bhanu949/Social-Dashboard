import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import Dashboard from './Dashboard'


class Login extends React.Component{
    constructor(){
      super()
      this.state={
        email:'',
        users:[],
        status:false,
        err:''
       }
    }
    componentDidMount(){

              axios.get('https://jsonplaceholder.typicode.com/users')
                    .then((response)=>{
                      let users=response.data
                      console.log(users)
                      this.setState({users})
              })
              .catch((err)=>{
                      console.log(err)
                  })
 }
    handleEmail=(e)=>{
                      let email=e.target.value
                      this.setState({email})
      }
    handleSubmit=(e)=>{
                      e.preventDefault()
                      let value = this.state.users.find(user=>{
                        if(user.email == this.state.email){
                                return user
                        }
                     })
                      if(value){
                        localStorage.setItem('id',value.id)
                       console.log(value.id)
                        this.setState(prevState=>{
                            return{
                                 status:!prevState.status
                            }
                            
                        })
                       // console.log(this.state.status)
                    }
                    else{
                        this.setState({err:this.state.email})
                    }
                  //  console.log(this.state.status)

                  //   if(this.state.status == true){
                  //     return (<Route path="/dashboard" component={Dashboard}/>)
                  // }
     }
   
    render(){
      //console.log(this.state.status)
      if(this.state.status == true){
        return <Redirect to="/dashboard" component={Dashboard} exact={true}/>
    }
      //console.log(this.state.user.name)
      return (
              <div>
                 <form onSubmit={this.handleSubmit}>                
                 <h3>Enter your Email to Login</h3>
                 <input type="email"  value={this.state.email} onChange={this.handleEmail}/>
                 <input type="submit" value="login"/> 
                 {
                    this.state.err && <h4>Email not found</h4>
                } 
                 </form>
                
                 {/* {this.state.user!=''&&<Link to={`/dashboard/${this.state.user.id}`}></Link>} */}
               </div>     
      )
  }
   }
export default Login