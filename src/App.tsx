import React, { useEffect } from "react";
import "./App.css";
import { useActions, useAppState } from "./overmind";

function App() {
  const { unis, isLoadingPosts } = useAppState();
  const { getAllAction } = useActions();

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
        <h3>USA UNIVERSITY</h3>
        <div>
          {isLoadingPosts ? (
            "loading .... "
          ) : (
            <div>
              <ul>
                {unis.map((item, index) => (
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
