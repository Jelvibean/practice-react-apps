import React from "react";
import styles from "./Summary.module.scss";

export const Summary = () => {
  return (
    <>
      <div className={styles.summaryWrapper}>
        <h1>Application Summary Section</h1>
        This small application was created to show some features I want to note.
        <br />
        The application is simple. It gives user 3 options to trigger:
        <div className={styles.users}>
          <h3>User's Experience</h3>
          <ol>
            <li>User can add an item.</li>
            <li>User can edit an existing item.</li>
            <li>User can delete an existing item.</li>
          </ol>
        </div>
        <div className={styles.logic}>
          <h3>Application Logic Steps</h3>
          <ol>
            <li>
              Start off making the markup for the input field and the "Add Todo"
              button
            </li>
            <li>
              Create a function <i>detectUsersInput()</i>, to detect the
              onChange of the input field and pass the event to the useState
              function to have it set your value. Hint below.
              <pre>
                <code> const [inputText, setInputText] = useState("");</code>
              </pre>
            </li>

            <li>
              Now create the function <i>addTodo()</i> that will trigger when
              the user clicks on "Add Todo" button. In this fuction you will
              needed: <br />
              <ul>
                <li>Check to see if inputText has an item </li>
                <li>
                  Then create the object with the piece you need. Maybe an id &
                  the text.{" "}
                </li>
                <li>
                  Now you need to store you first object, so go and create you
                  useState for you array of todos.
                  <pre>
                    <code>
                      const [todos, setTodos] = userState([]); <br />
                    </code>
                  </pre>
                </li>
                <li>
                  Now add your new item to your todos Hint:
                  <pre>
                    <code>setTodos([...todos, newTodo]);</code>
                  </pre>
                  <i>
                    Remember this is logging todos immediately after calling
                    setTodos([...todos, newTodo]);. However, state updates in
                    React are asynchronous. This means that when you log todos,
                    it still holds the old state (which is empty initially)
                    because setTodos has not yet completed updating the state.
                  </i>
                </li>
                <li>
                  So go set a useEffect() to watch for changes. This is where
                  you set the todo to local storage.
                  <pre>
                    <code>
                      {" "}
                      localStorage.setItem("todos", JSON.stringify(todos));
                    </code>
                  </pre>
                </li>
                <li>
                  Now go back to your todos userState and rewrite it now to get
                  the data from localstorage. <br />
                  So your useEffect SETS <i>setItem()</i> , and your userState
                  GETS <i>getItem()</i>
                </li>
                <li>
                  Now set your input field to empty since once user hits the
                  button you have capture their item and you have stored the
                  item in localstorage, read it and added it to useState todos,
                  and you have created a useEffect to read what is in local
                  storage at render time.
                </li>
              </ul>
              -
            </li>
          </ol>
        </div>
      </div>
      <div className="hrspace">
        <hr />
        <hr />
        <hr />
      </div>
    </>
  );
};
