import CreatePage from "../components/CreatePage";
import {useEffect, useRef, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import useTitle from "../hooks/useTitle";

export const Home = () => {

  const [post, setPost] = useState([]);
  const [toggle, setToggle] = useState(false);
  const postRef = useRef(collection(db, "posts"));
  useTitle("Home");

  useEffect(() => {
    async function getPost() {
      try {
        const data = await getDocs(postRef.current); // Fetch all documents from the "post" collection
        setPost(
          data.docs.map((document) => ({
            ...document.data(), // Extract the document data
            id: document.id, // Add the document ID
          }))
        );
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    }

    getPost();
  }, [postRef, toggle]);


  return (
    <section>
      {post.map( postdata => (
          
         <CreatePage key={postdata.id} post={postdata} toggle={toggle} setToggle={setToggle} />
      ))}
     
    </section>
  )
}
