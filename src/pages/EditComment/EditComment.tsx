import { useState, ChangeEvent, FormEvent } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styles from './EditComment.module.css'

import diskette from '../../assets/images/diskette.png'

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
        <div className={styles.header}>
          <h1>Edit Signature</h1>
          </div>
          
      <textarea
        required
        name="value"
        id="text-input"
        value={formData.value}
        onChange={handleChange}
        />
        <button type="submit" className={styles.buttons}><img src={diskette}/></button>
      </form>
    </main>
  )
}

export default EditComment