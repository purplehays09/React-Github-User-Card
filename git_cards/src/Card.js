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
                <p>Bio: {this.props.user.bio}</p>
                <p>Blog: {this.props.user.blog}</p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
                <p>Repos: {this.props.user.public_repos}</p>
            </div>
        )
    }
}

export default Card