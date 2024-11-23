import React from 'react'
import { addDoc, collection } from 'firebase/firestore';
import {db, auth} from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import useTitle from "../hooks/useTitle";

export const CreatePost = () => {
  const postRef = collection(db, "posts");
  const navigate = useNavigate();
  useTitle("Add Blog post");

  async function handleCreatePost (event) {
    event.preventDefault();

    const documents = {
      title : event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid  
      }
    }

    try {
      await addDoc(postRef, documents);
      alert("Blog post created sucessfully!");
      event.target.reset();
      navigate("/")
      
    } catch (error) {
      console.error("Error adding the POST", error);
      alert("Faild to create post please try again");
      
    }
    

  }

  return (
    <section className='create'>
      <div className='heading'>
        <h1>Add New Blog Post</h1>
      </div>
      <form className="createPost" onSubmit={handleCreatePost}>
      <input
          type="text"
          className="title"
          name="title"
          placeholder="Title"
          maxLength="50"
          required
        />
        <textarea
          name="description"
          id="description"
          className="description"
          placeholder="Description"
          required
        ></textarea>
        <button type="submit" className="submit">
          Create Post
        </button>

      </form>

    </section>
  )
}

