import { useState, useEffect } from "react";
import Blog from "./Blog.jsx";
import Post from "./Post.jsx";
import "./App.css";

function App() {
  // setState charger l'etat initial
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("blogState")),
  );

  /*useEffect(() => {
        let appState = localStorage.getItem("blogState");

        if(appState)
        {
            setState(JSON.parse(appState));
        }
        else
        {
            setState({ page: "blog", post:null });
        }

        return(() => {

            }
        );
    }, []);*/

  useEffect(() => {
    // sauvegarder la state avec localStorage
    localStorage.setItem("blogState", JSON.stringify(state));

    return () => {};
  }, [state]);
  // nouveau states avec post
  function showPost(post) {
    let newState = { page: "post", post: post };
    setState(newState);
  }
  // retour a la page blog
  function backToBlog(event) {
    event.preventDefault();
    let newState = { page: "blog", post: null };
    setState(newState);
  }
  // si la state est sur le blog
  if (state.page === "blog") {
    return (
      <>
        {/* afficher blog  */}
        <Blog showPost={showPost} />
      </>
    );
  } else {
    // sinon afficher bouton retour blog et post
    return (
      <>
        <a href="index.html" className="back-link" onClick={backToBlog}>
          ← Retour à l'accueil
        </a>
        <Post post={state.post} />
      </>
    );
  }
}

export default App;
