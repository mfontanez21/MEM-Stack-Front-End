import React, { FormEvent, ChangeEvent, useState } from "react";
import styles from "./NewComment.module.css";
import { CommentFormData } from "../../types/forms";

interface Props {
  handleAddComment: (commentFormData: CommentFormData) => Promise<void>;
}

const NewComment: React.FC<Props> = (props) => {
  const [formData, setFormData] = useState<CommentFormData>({
    value: "",
    id: null,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleAddComment(formData);
    setFormData({ value: "", id: null });
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ value: event.target.value, id: null });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        required
        name="text"
        cols={30}
        id="text-input"
        value={formData.value}
        placeholder="limited to 255 characters"
        onChange={handleChange}
      />
      <button type="submit">Add Signature</button>
    </form>
  );
};

export default NewComment;
