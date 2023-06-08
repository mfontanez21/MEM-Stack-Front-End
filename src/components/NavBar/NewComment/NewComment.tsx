import React, { FormEvent, ChangeEvent, useState } from 'react';
import styles from './NewComment.module.css'
import { CommentFormData } from '../../../types/forms';



interface Props {
  handleAddComment: (commentFormData: CommentFormData) => Promise<void>;
}

const NewComment: React.FC<Props> = (props) => {
  const [formData, setFormData] = useState<CommentFormData>({ value: '' });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleAddComment(formData);
    setFormData({ value: '' });
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ value: event.target.value });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        required
        name="text"
        id="text-input"
        value={formData.value}
        placeholder="Add a Comment"
        onChange={handleChange}
      />
      <button type="submit">Sign Yearbook</button>
    </form>
  );
};

export default NewComment;