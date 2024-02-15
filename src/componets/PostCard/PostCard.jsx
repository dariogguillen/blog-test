import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {

  const formatDate = (date) => new Date(date).toLocaleDateString()

  return (

    <Link to={`/post/${post.id}`} className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1"><b>Post: </b>{post.text}</h5>
        <small>{formatDate(post.publishDate)}</small>
      </div>
      <p className="mb-1"><b>Published by: </b>{post.owner.title} {post.owner.firstName} {post.owner.lastName}</p>
      <p><small><b>Likes: </b>{post.likes}</small></p>
      {post.tags ? post.tags.map(tag => (<span class="badge badge-pill badge-primary pill">{tag}</span>)) : <></>}
    </Link>
  )
}

export default PostCard