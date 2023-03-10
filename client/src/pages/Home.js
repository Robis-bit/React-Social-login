import React from 'react'
import Card from '../components/Card.js'
import {posts} from "../data.js"

function Home() {
  return (
    <div className="home">
       
       {posts.map(post=>(
                <Card key={post.id} post={post}/>
            ))}
     
    </div>
  )
}

export default Home