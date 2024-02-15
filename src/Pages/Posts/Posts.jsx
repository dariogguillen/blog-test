import { useEffect, useState } from "react"
import PostList from "../../componets/PostList"
import axios from "axios"

const Posts = () => {
  const LIMIT = 12
  const [posts, setPosts] = useState([])
  const [filterdPosts, setFilteredPosts] = useState([])

  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  const getPosts = async () => {
    try {
      const list = await axios.request(
        {
          method: 'get',
          url: 'https://dummyapi.io/data/v1/post?page=1',
          headers: { 'app-id': import.meta.env.VITE_APP_ID }
        }
      )

      setPosts(list.data.data)
      setPage(list.data.page)
      setTotal(list.data.total)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  const onChange = e => {
    console.log(e.target.value)
    const filtered = posts.filter(post => post.text.includes(e.target.value))

    setFilteredPosts(filtered)
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Infobae</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={onChange} />
          </form>
        </div>
      </nav>
      <PostList posts={filterdPosts.length ? filterdPosts : posts} />
    </div>
  )
}

export default Posts