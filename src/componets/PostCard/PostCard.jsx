const PostCard = ({ post }) => {

  const formatDate = (date) => new Date(date).toLocaleDateString()

  return (
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1"><b>Post: </b>{post.text}</h5>
        <small>{formatDate(post.publishDate)}</small>
      </div>
      <p className="mb-1"><b>Published by: </b>{post.owner.title} {post.owner.firstName} {post.owner.lastName}</p>
      <small><b>Likes: </b>{post.likes}</small>
    </a>
  )
}

export default PostCard