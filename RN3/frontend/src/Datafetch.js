import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Datafetch() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost/api')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div>
            <ul>
                {posts.map(post => (
                <li key={posts.id}>
                    ชื่อหนังสือ {post.title}
                     {' '}={'>'} ผู้แต่ง{' '}{post.author}
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default Datafetch