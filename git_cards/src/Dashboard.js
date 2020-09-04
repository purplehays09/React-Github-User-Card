import React from 'react'
import axios from 'axios'
import Card from './Card'

const userList = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'
]

class Dashboard extends React.Component{
    state = {
        users:[]
    }

    componentDidMount(){
      
        axios.get(`http://api.github.com/users/purplehays09`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    users:res.data
                })
            })
            .catch(err => console.log(err))
     
    }

    render(){
        return(
            <div>
                {this.state.users.login}<br />
                Dashboard

               <Card
                    id={this.state.users.login}
                    user={this.state.users}
                />
         
            </div>
        )
    }
}

export default Dashboard