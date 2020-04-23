const initstate={
    posts:[
            {  
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"
            },
            {  
            id: 2,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"
            },
            {  
            id: 3,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"
            }

        ]
}

 const rootReducer=(state=initstate,action)=>{
     console.log(action)
     if(action.type==="DELETE_POST"){
        let temp=state.posts.filter(p=>p.id!==action.id);
        return{
            ...state,
            posts:temp
        }
     }
    return state;
}
export default rootReducer;