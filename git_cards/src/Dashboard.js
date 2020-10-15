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
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }
    

    componentDidMount(){

        userList.map(user => {
            this.setState(
                axios.get(`https://api.github.com/users/${user}`)
                .then(res => {
                        this.setState({
                            users:[
                                ...this.state.users,
                                res.data
                            ]
                        } 
                    )
                })
                .catch(err => console.log(err))
            )
        })
      
        // axios.get(`http://api.github.com/users/purplehays09`)
        //     .then(res => {
        //         console.log(res.data)
        //         this.setState({
        //             users:res.data
        //         })
        //     })
        //     .catch(err => console.log(err))
     
    }

    render(){
        return(
            <div>
                {this.state.users.login}<br />
                Dashboard

            {
                this.state.users.map(user => {
                    return(
                        <Card
                            key={user.id}
                            id={user.login}
                            user={user}
                        />
                    )

                })
            }
               
         
            </div>
        )
    }
}

export default Dashboard