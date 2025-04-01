import React from "react";

export const Notes = () => {
  const myUL = {
    width: "700px",
  };
  const myLi = {
    display: "flex",
  };
  const myStyle = {
    display: "flex",
    flex: "0 0 auto",
  };
  const divBorders = {
    border: "2px solid blue",
    padding: "10px",
  };
  const imgStyle = {
    width: "25px", // Set the width you want
    height: "25px", // Optional: maintain aspect ratio
  };

  const colorMyBackground = {
    backgroundColor: "green",
  };

  return (
    <div>
      <ul style={myUL}>
        <li style={myLi}>
          <div style={myStyle}>
            <div style={divBorders}>
              1. You were able to wire up the components
            </div>
            <div style={{ ...divBorders, ...colorMyBackground }}>
              <img
                style={imgStyle}
                src="https://as2.ftcdn.net/jpg/09/94/19/81/1000_F_994198199_Nv4xZLAT0qvBEZjVM7QKKOS1NblbXZJy.jpg"
              ></img>
            </div>
          </div>
        </li>
        <li style={myLi}>
          <div style={myStyle}>
            <div style={divBorders}>
              2. Captured users input, added it to useState and add it to the
              input value.
            </div>
            <div style={{ ...divBorders, ...colorMyBackground }}>
              <img
                style={imgStyle}
                src="https://as2.ftcdn.net/jpg/09/94/19/81/1000_F_994198199_Nv4xZLAT0qvBEZjVM7QKKOS1NblbXZJy.jpg"
              ></img>
            </div>
          </div>
        </li>

        <li style={myLi}>
          <div style={myStyle}>
            <div style={divBorders}>
              3. Set up the useEffect to set the item to the local storage
            </div>
            <div style={{ ...divBorders, ...colorMyBackground }}>
              <img
                style={imgStyle}
                src="https://as2.ftcdn.net/jpg/09/94/19/81/1000_F_994198199_Nv4xZLAT0qvBEZjVM7QKKOS1NblbXZJy.jpg"
              ></img>
            </div>
          </div>
        </li>
        <li style={myLi}>
          <div style={myStyle}>
            <div style={divBorders}>
              4. Reset your todo useState. to get from localStorage.
            </div>
            <div style={{ ...divBorders, ...colorMyBackground }}>
              <img
                style={imgStyle}
                src="https://as2.ftcdn.net/jpg/09/94/19/81/1000_F_994198199_Nv4xZLAT0qvBEZjVM7QKKOS1NblbXZJy.jpg"
              ></img>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
