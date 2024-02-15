import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Post = () => {

  const [post, setPost] = useState({})

  const params = useParams()

  const getPost = async () => {
    try {

      const res = await axios.request(
        {
          method: 'get',
          url: `https://dummyapi.io/data/v1/post/${params.id}`,
          headers: { 'app-id': import.meta.env.VITE_APP_ID }
        }
      )
      console.log(res.data)
      setPost(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div className="container">
      <h1>POST</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.text}</h5>
          <p className="card-text">{post.owner?.title || ""} {post.owner?.firstName || ""} {post.owner?.lastName || ""}</p>
          {post.tags ? post.tags.map(tag => (<span class="badge badge-pill badge-primary pill">{tag}</span>)) : <></>}
        </div>
        {post.image ? <img className="card-img-bottom" src={post.image} alt="Card image cap" /> : <></>}
      </div>
    </div>
  )
}

export default Post