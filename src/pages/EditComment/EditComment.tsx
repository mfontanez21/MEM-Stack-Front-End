import React, { useState, ChangeEvent, FormEvent } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import styles from './EditComment.module.css'
import { CommentFormData } from '../../types/forms';


// Services
import * as commentService from '../../services/commentService'


import { Profile } from "../../types/models"

interface Props {
  handleAddComment: (commentFormData: CommentFormData) => Promise<void>;
  profiles: Profile[]
}

const EditComment = (props) => {
  const { commentId } = useParams()
  const navigate = useNavigate()
  const location  = useLocation()
  const state = location.state
  const [profile, setProfile] = useState<Profile | null>(null);
  
  const [formData, setFormData] = useState(state)

console.log(state);

  

  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [evt.currentTarget.name]: evt.currentTarget.value })
  }

  const handleUpdateComment = async (commentFormData: CommentFormData, commentId: number): Promise<void> => {

    if(state.profileId){
      const currentComment = await commentService.updateComment(commentId, commentFormData)
      setProfile({...profile, commentsReceived: profile.commentsReceived.map((c) => commentFormData.id === c.id ? currentComment : c)})
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const commentId = parseInt(state.comment.id)
    
    handleUpdateComment(formData, commentId);
    setFormData({ value: '' });
    navigate(`/profiles/${state.profileId}`)
  };

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.container} >
        <h1>Edit Signature</h1>
        
      <textarea
        required
        name="text"
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