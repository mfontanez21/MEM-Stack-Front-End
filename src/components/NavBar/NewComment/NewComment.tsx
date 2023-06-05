// npm imports
import { ChangeEvent, useState, FormEvent } from "react"
import styles from "./NewComment.module.css"


interface CommentsProps {
  
  handleAddComment: (commentFormData: string) => void
}

const NewComment = (props: CommentsProps) => {
  const { handleAddComment } = props
  const [formData, setFormData] = useState({ text: '' })

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.handleAddComment(formData.text); 
    setFormData({ text: '' });
  };
  



  return (
    <form className={styles.container} >
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        placeholder="Add a Comment"
        onSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <button type="submit">Sign Yearbook</button>
    </form>
  )
}

export default NewComment