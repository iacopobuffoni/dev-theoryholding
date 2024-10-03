import React, { useState } from "react";
import defaultProfilePicture from "../../../images/logo192.png";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../contexts/context";

export default function Posts() {
  const navigate = useNavigate();
  const {posts, setPosts} = useAppContext();
  const [isPostMenuOpen, setIsPostMenuOpen] = useState(false);

  //Eliminazione post
  const handleDeletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div className="w-[80%] p-10">
      {/* Pulsante per creare un nuovo post */}
      <div className="mb-6">
        <button className="bg-primary500 hover:bg-primary700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center" onClick={() => navigate("/dashboard/posts/create")}>
          Crea Nuovo Post
        </button>
      </div>
      <div className="flex gap-x-6">
        {/* Lista dei post */}  
        {posts.map((post, index) => (
        <div className="w-[20%] max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Header del post */}
          <div className="flex items-center p-3 justify-between relative">
            <div className="flex items-center">
              <img
              className="w-8 h-8 rounded-full mr-3"
              src={localStorage.getItem("profilePicture") || defaultProfilePicture}
              alt="Profilo utente"
            />
            <span className="font-semibold text-sm">{localStorage.getItem("name")}</span> 
            </div>
            <button onClick={() => setIsPostMenuOpen(!isPostMenuOpen)}>
              <svg className="w-6 h-6 ml-auto text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
            {isPostMenuOpen && 
              <div 
                className="absolute w-[200px] bg-gray100 right-0 top-10 rounded-md cur" 
                onClick={() => handleDeletePost(index)}
              >
                <div className="p-4">
                  Elimina post
                </div>
              </div>
            }
          </div>
          {/* Immagine del post */}
          <img
            className="w-full aspect-square object-cover"
            src={post.image}
            alt="Post"
          />
          {/* Azioni del post */}
          <div className="p-3">
            <div className="flex space-x-4">
              <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2h-2v3.17c0 .53-.61.82-1.03.49L11.83 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10z" />
              </svg>
              <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
              </svg>
            </div>
          </div>
          {/* Contenuto del post */}
          <div className="px-3 pb-3">
            <p className="font-semibold text-sm mb-1">10 Mi piace</p>
            <p className="text-sm">
              <span className="font-semibold mr-1">{localStorage.getItem("name")}</span>
              {post.description}
            </p>
            <p className="text-xs text-gray-500 mt-1">Visualizza tutti e 5 i commenti</p>
            <p className="text-xs text-gray-400 mt-1">2 ORE FA</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
