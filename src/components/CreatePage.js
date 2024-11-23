import {doc, deleteDoc} from 'firebase/firestore';
import {auth, db} from '../firebase/config';

const CreatePage = ({post, toggle, setToggle}) => {
  const { title, description, author} = post;
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  

  async function handleDelete () {
    const document = doc(db, "posts", post.id);
    await deleteDoc(document);
    console.log(document, "Deleted");
    setToggle(!toggle);
  }

  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>      
      <p className="control">
        <span className="author">{author.name}</span>
        {isAuth && (author.id === auth.currentUser.uid) && <span className="delete" onClick={handleDelete}><i className="bi bi-trash3"></i></span>}
        
      </p>
    </div>
  )
}

export default CreatePage