import PostCard from "../PostCard"

const PostList = ({ posts }) => {
  return (
    <div className="container">
      <div className="list-group">
        {
          posts.map(post => (
            <PostCard post={post} key={post.id} />
          ))
        }
      </div>
    </div>
  )
}

export default PostList