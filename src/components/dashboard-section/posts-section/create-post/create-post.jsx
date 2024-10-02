import React, { useState } from "react";
import { useAppContext } from "../../../../contexts/context";

export default function CreatePost() {
  const {posts, setPosts} = useAppContext();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const createPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {description, image}]);
    alert('Post creato!');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="w-[80%] p-10 flex">
      <div className="w-full">
        <form onSubmit={createPost}>
          <label className="flex flex-col w-[49%] gap-y-2">
            <span className="text-xl text-gray700">
              Descrizione:
            </span>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="border rounded-md p-2">
            </input>
          </label>
          <label className="flex flex-col w-[49%] gap-y-2">
            <span className="text-xl text-gray700">
              Immagine:
            </span>
            <img src={image} alt="profile-picture" className="w-32 h-32 rounded-full object-cover"></img>
            <input type="file" onChange={handleImageChange} className="border rounded-md p-2">
            </input>
          </label>
          <button type="submit" className="border rounded-md py-2 px-4 mt-6 mx-auto bg-primary500 text-white">
            Salva modifiche
          </button>
        </form>
      </div>
    </div>
  );
}
