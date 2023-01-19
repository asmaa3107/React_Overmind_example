import React, { useEffect } from "react";
import "./App.css";
import { useActions, useAppState } from "./overmind";
import { university } from './overmind/University/state'

function App() {
  const { uins } = useAppState();
  const { getAllAction } = useActions().uins;

  useEffect(() => {
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
        <div></div>
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
