import React, { useEffect, useState } from 'react'
import Blog_Card from '../../Components/Blogcard/Blog-Card'

const Blogs = () => {
    const [blogs, setblogs] = useState([])
    const [loading, setloading] = useState(true)
    window.scroll(0, 0)

    const GetBlogs = async () => {
        try {
        let blogsdata = await fetch(`https://blogging-app-mern.vercel.app/api/blogs`)
        blogsdata = await blogsdata.json()
        setblogs(blogsdata.Blogs)
        setloading(false)
    }
    catch (err) {
        console.log('Error message >>', err)
        
    }
    
    
}
useEffect(() => {
    GetBlogs()
    
}, [])
console.log('Blogs Get Successfully', blogs)
  return (
    <div className='min-h-screen p-4'>
        <h1 className='text-center my-10 text-4xl font-semibold'>Explore Blogs</h1>
        <div className="blogs flex justify-center gap-6 flex-wrap">
            { loading ? 
            <p>Loading...</p> :
                blogs.map((blog) => (
                    <Blog_Card blog={blog}/>
                ))
            }
        </div>
    </div>
  )
}

export default Blogs