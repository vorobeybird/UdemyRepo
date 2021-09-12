import React from "react";
import "./post-add-form.css"
const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="What are you thinking"
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-secondary">
        добавить
      </button>
    </form>
  );
};

export default PostAddForm;