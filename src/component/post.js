import React, { Component } from 'react';
//import Axios from 'axios';
import { connect } from 'react-redux';
import {deletePost} from '../actions/postaction';
class Post extends Component {
    // state={
    //     posts:[]
    // }
    // componentDidMount(){
    //     Axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.post_id).then(res=>{
    //         this.setState({posts:res.data})
    //     console.log(this.state.posts)
    //     })
        
    // }
    handleClick=()=>{
       this.props.deletePost(this.props.posts.id);
       this.props.history.push('/');
    }

    render() {
        
        const {posts}=this.props;
        const postList=posts? (
            <div className="post card" key={posts.id}>
                <div className="card-content">
        <h3 className="card-
        title">{posts.title}</h3>
        <p>{posts.body}</p>
                 </div>
                 <div className="center"><button onClick={this.handleClick} className="btn blue">delete Post</button></div>
       
            </div>
            
        ):(<h5>Loding...</h5>);
        return (
            <div className="container">
                {postList}
            </div>
        )
    }
}

const mapStateToProps=(state,ownprops)=>{
    let id=ownprops.match.params.post_id;
   
    return{
        posts:state.posts.find(p=>p.id==id)
    }
}
const mapDispachToProps=(dispach)=>{
return{
    deletePost:(id)=>{dispach(deletePost(id))}
}
}
export default connect(mapStateToProps,mapDispachToProps)(Post);