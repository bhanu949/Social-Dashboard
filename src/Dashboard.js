import React from 'react'
import axios from 'axios'
import Login from './Login'
import {Redirect} from 'react-router-dom'


class Dashboard extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            posts:[],
            status:false,

        }
    }
    componentDidMount(){
           let id= localStorage.getItem('id')
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
              let user=response.data
                this.setState({user})
            })
            .catch((err)=>{
                console.log(err)
            })
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response)=>{
                let posts=response.data
                this.setState({posts})
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    handleClick=()=>{
        localStorage.clear('id')
        this.setState(prevState=>{
            return{
                status:!prevState.status
            }
        })
        // if(this.state.status === true){
        //     return <Route to="/" component={Login}/>
        // }
    }
    render(){
        console.log(this.state.status)
        if(this.state.status === true){
            return <Redirect to='/' component={Login} />
        }
       return(
            <div>
            
            <h3>Name: {this.state.user.name}</h3>
            <h3>Phone No: {this.state.user.phone}</h3>
            <h3>Email: {this.state.user.email}</h3>
        
            {this.state.posts.map(ele=>{
                return(
                    <ul key={ele.id}>
                         <li>Title-{ele.title}</li>
                         <li>Body-{ele.body}</li>
                    </ul>  
                )
            })}
    
            <input type="button"  value="Logout" onClick={this.handleClick}/>                   
            </div>
        )
    }
}
export default Dashboard