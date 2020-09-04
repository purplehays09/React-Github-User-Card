import React from 'react'



class Card extends React.Component{
    constructor(props){
        super();
    }

    


    

    render(){
        return(
            <div>
                <p>UserName: {this.props.user.login}</p>
                <img src={this.props.user.avatar_url}/>
                <p>UserName: {this.props.user.login}</p>
                <p>UserName: {this.props.user.login}</p>
                <p>UserName: {this.props.user.login}</p>
            </div>
        )
    }
}

export default Card