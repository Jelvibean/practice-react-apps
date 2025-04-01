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
                  Now set your input field to empty. At this point you have
                  <ul>
                    <li>Capture Users Item</li>
                    <li>Stored the Item in localStorage.</li>
                    <li>
                      You are reading it from there and adding it to useState
                    </li>
                    <li>
                      You have created useEffect to read what you have in
                      localStorage at render time.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Now its time to go and create the UI component to hold the results
              of the todos array. Work on doing a map() loop and calling a new
              component with the rows of items. Create the static version of the
              item row. At this point you can pass the{" "}
              <strong>text part</strong>.
            </li>
            <li>
              You will need to pass 3 pieces,
              <ul>
                <li>The text</li>
                <li>A new function to handle edit logic</li>
                <li>A new function to handle delete logic</li>
              </ul>
            </li>
            <li>
              Create the Edit <i>handleEditTodo()</i> function. In this step you
              will find <i>find()</i> the id that is passed to you in the Todos
              array. Next you will push that through you setInputText() to
              update the inputText. Now this item is back on the input field.
            </li>
            <li>
              Now since you have option to change the button the users has at
              the input level, you will want to set a flag to know what state
              you are at to turn on/off the right button. So set a useState for
              this flag. And then pass the the item you found to it.
              <pre>
                <code> const [buttonState, setButtonState]</code>
              </pre>
            </li>
            <li>
              Now go and add logic to the button section. If has a 'Todo' item,
              then turn on "Save Todo". Else if it is null, have the "Add Todo"
              button.
            </li>
            <li>
              Now since you have another button as choice, you need a new
              function. You had the one to <strong>"Add Todo"</strong> but now
              you need <strong>"Save Edited Todo"</strong>
              <ul>
                <li> So go start a new function for this button.</li>
                <li>
                  Here you will do a map() loop and if you find tone item passed
                  you will use the spread operator to update the inputText. This
                  is so your input field holds the one you want to change.
                </li>
                <li>
                  Set <i>setButtonState()</i> to null since you have now
                  execulted you udate.
                </li>
                <li>
                  Set you <i> setInputText("") to empty</i>{" "}
                </li>
                <li>
                  Last Step: Set up your delete <i>handleDeleteTodo()</i> button
                  function. Hint, use your <i>filter()</i> because this will
                  creat a new array without the item you filter out. Which will
                  be the item you are deleting.
                </li>
              </ul>
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
