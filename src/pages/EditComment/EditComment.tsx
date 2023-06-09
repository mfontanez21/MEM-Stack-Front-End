import { useState, ChangeEvent, FormEvent } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import styles from './EditComment.module.css'



// Services
import * as commentService from '../../services/commentService'



const EditComment = () => {
  const navigate = useNavigate()
  const location  = useLocation()
  const state = location.state.comment
  
  const [formData, setFormData] = useState(state)

console.log(state);

  

  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [evt.currentTarget.name]: evt.currentTarget.value })
  }





  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const commentId = parseInt(state.id)
    if(state.profileId){
      await commentService.updateComment(commentId, formData)
    }
    setFormData({ value: '' });
    navigate(`/profiles/${state.profileId}`)
  };

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.container} >
        <h1>Edit Signature</h1>
        
      <textarea
        required
        name="value"
        id="text-input"
        value={formData.value}
        onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditComment