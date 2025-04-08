import { useEffect, useState } from "react";

const fetchFlights = () => {
  const [inputText, setInputText] = useState("");
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const response = await fetch(
          "https://67d98a2700348dd3e2ab8ad8.mockapi.io/jets/jetStore"
        );
        const data = await response.json();
        setClientData(data);
      } catch (error) {
        console.log("oops something went wrong with you data.");
      }
    };

    fetchClientData();
  }, []);

  const detectUserInput = (event) => {
    setInputText(event.target.value);
    // console.log(inputText);
  };

  const checkPrice = () => {
    if (inputText.trim()) {
      const inputstringtonum = Number(inputText);

      const filteredData = clientData.filter((client) => {
        const totalprice = Number(client.pricePerSeat) * client.seats;
        return totalprice < inputstringtonum;
      });

      setClientData(filteredData);
    }
  };

  return (
    <div>
      <header>
        <h4>Jet Finder</h4>
      </header>
      <section>
        <label>Enter max price:</label>
        <input
          id="priceInputField"
          type="text"
          placeholder="Enter Desired Price"
          value={inputText}
          onChange={detectUserInput}
          aria-describedby="priceInputHelp"
        />
        <small id="priceInputHelp">
          "Enter the maximun price to filter you flights"
        </small>
      </section>

      <section>
        <button className="button" onClick={checkPrice}>
          Filter by price
        </button>
      </section>

      <section className="results">
        <ul role="list">
          {clientData.map((client) => {
            const totalprice = Number(client.pricePerSeat) * client.seats;
            return (
              <li className="user-info" key={client.id}>
                <div className="price-data">Total: ${totalprice}</div>
                <div className="client-name">
                  City: &#9825; {client.availableAt}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default fetchFlights;
