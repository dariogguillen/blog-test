import { useEffect, useState } from "react"
import PostList from "../../componets/PostList"
import axios from "axios"

const Posts = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {

      const list = await axios.request(
        {
          method: 'get',
          url: 'https://dummyapi.io/data/v1/post',
          headers: { 'app-id': import.meta.env.VITE_APP_ID }
        }
      )

      setPosts(list.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="container">
      <h1>Blog Test Infobae</h1>
      <PostList posts={posts} />
    </div>
  )
}

export default Posts