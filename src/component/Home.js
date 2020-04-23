import React, { Component } from 'react'
// import Axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

 class Home extends Component {
    // state={
    //     posts:[]
    // }
    // componentDidMount(){
    //     Axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
    //         this.setState({posts:res.data})
    //     })

    // }
    render() {  
        const {posts}=this.props;
        const postList=posts.length? (posts.map(post=>{
            return(
            <div className="post card" key={post.id}>
                <div className="card-content">
        <Link to={"/"+post.id}><span className="card-
        title">{post.title}</span></Link>
        <p>{post.body}</p>
                </div>
            </div>
            )
        })):(<h5>No post yet...</h5>);
        return (
        <div className="container center">
        <h2>Home</h2>
        {postList}     
        </div>
    )
    }

}
const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}
export default connect(mapStateToProps)(Home);