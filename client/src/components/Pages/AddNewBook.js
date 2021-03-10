import React, { useState } from "react";
import FileBase from "react-file-base64";
import { newPost } from "../../store/actions/Books";
import { useDispatch } from "react-redux";

function AddNewBook() {
  const [bookdata, setBookdata] = useState({
    author: "",
    title: "",
    shortDescription: "",
    file: "",
    tags: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newPost(bookdata));
  };

  return (
    <div className="formMain">
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setBookdata({ ...bookdata, title: e.target.value })}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={(e) => setBookdata({ ...bookdata, author: e.target.value })}
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags"
          onChange={(e) => setBookdata({ ...bookdata, tags: e.target.value })}
        />
        <input
          type="text"
          name="shortDescription"
          placeholder="Short Description"
          onChange={(e) =>
            setBookdata({ ...bookdata, shortDescription: e.target.value })
          }
        />
        <div className="filebase">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setBookdata({ ...bookdata, file: base64 })}
          />
        </div>
        <button type="submit">Submit BOOK</button>
      </form>
    </div>
  );
}

export default AddNewBook;
