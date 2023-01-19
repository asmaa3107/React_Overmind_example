import React, { useEffect } from "react";
import "./App.css";
import { useActions, useAppState } from "./overmind";

function App() {
  const { uins,posts } = useAppState();
  const { getAllAction } = useActions().uins;
  const { getAllPostsAction } = useActions().posts;

  useEffect(() => {
    getAllPostsAction().then((data) => {
      if (data) {
          console.log('done!');
      }
    });

    getAllAction().then((data) => {
      if (data) {
          console.log('done!');
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>posts</h3>
        <div>
          {posts.isLoading ? (
            "loading .... "
          ) : (
            <div>
              <ul>
                {posts.posts.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <h3>USA UNIVERSITY</h3>
        <div>
          {uins.isLoadingPosts ? (
            "loading .... "
          ) : (
            <div>
              <ul>
                {uins.unis.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
