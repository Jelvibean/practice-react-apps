"use client";
import { useEffect, useState } from "react";

type FlightData = {
  id: number;
  pricePerSeat: string;
  seats: number;
  availableAt: string;
};

const FetchFlights = () => {
  const [inputText, setInputText] = useState("");
  const [clientData, setClientData] = useState<FlightData[] | null>(null);

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
  };

  const checkPrice = () => {
    if (inputText.trim()) {
      const inputstringtonum = Number(inputText);

      const filteredData = clientData?.filter((client) => {
        const totalprice = Number(client.pricePerSeat) * client.seats;
        return totalprice < inputstringtonum;
      });

      setClientData(filteredData?.length ? filteredData : null);
    }
  };

  return (
    <>
      <div>
        <header>
          <h4>Jet Finder</h4>
        </header>
        <div className="fieldWrapper">
          <div className="inputwrapper">
            <label>Enter max price:</label>
            <input
              id="priceInputField"
              type="text"
              placeholder="Enter Desired Price"
              value={inputText}
              onChange={detectUserInput}
              aria-describedby="priceInputHelp"
              className="form-control"
            />
            <small id="priceInputHelp" style={{ fontSize: "0.75em" }}>
              "Enter the maximum price to filter your flights"
            </small>
          </div>

          <div className="buttonWrapper">
            <button className="btn btn-purple" onClick={checkPrice}>
              Filter by price
            </button>
          </div>
        </div>

        <section className="results">
          <ul role="list">
            {clientData?.map((client) => {
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
    </>
  );
};

export default FetchFlights;
