import { useState } from 'react';
import BlogList from './props';

// learning State Hook

export default function HookStates() {
  const [name, setName] = useState('Jane');
  const handleClick = () => {
    setName('Moses');
    console.log(name);
  }
  return (
    <div>
      <p>{name}</p>
      <button onClick={handleClick}>Click me </button>
    </div>
  )
}


// using arrow fuctions in buttons.

export function Buttons() {
  const handleClick = (e) => {
    console.log('hello Agba coders');
  }
  const handleNewClick = (name,e) => {
    console.log('Hello',name,e.target)
  }
  return (
    <div>
      <h2>home page</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleNewClick('Basky', e)}>New click</button>
    </div>
  )
}

// out putting lists

export function FirstList() {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
   const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog)=>blog.id !== id)
    setBlogs(newBlogs)
   }
  return (

    <div>
  <BlogList blogs = {blogs} title = 'All the blogs' handleDelete = {handleDelete}/>
  {/* <BlogList blogs = {blogs.filter((blog)=>blog.author === 'mario')} title = "Mario's blogs"/> */}
    </div>    
  )
}  


