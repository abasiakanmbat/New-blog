import React from 'react'

export default function BlogList(props) {
  const blogs = props.blogs
  const head = props.title
  const handleDelete = props.handleDelete
  const styledButton = {
    color: 'white',
    backgroundColor:'#f1356d',
    border: 'unset',
    cursor: 'pointer',
    borderRadius:'8px'}
  return (
    <div>
      <h1>{head}</h1>
          {
        blogs.map(blog =>(
        <div className="blog-preview" key = {blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <button style={styledButton} 
        onClick={()=>handleDelete(blog.id)}>Delete</button>
        </div>
        ))
      }
    </div>
  )
}
