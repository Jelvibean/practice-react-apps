// This page when over areas such as
// 1.  how to pass props
// 2.  how to pass function that return nothing and return something.
// 3.  how to pass function with no params and with params
"use client";
import MyButton from "../../src/components/MyButtons";

const PlayGround = () => {
  // This one takes no param in and
  // return nothing to the caller so its a void example.
  function wasClicked() {
    console.log(
      "A Click Event triggering a function that returns nothing so Void"
    );
  }

  //This one takes in a param but
  //never returns it.
  //In type script its void
  function returnNothing(text: string) {
    console.log(text);
  }

  // This one on the other hand does return
  // therefore in the type script it needs to be a string.
  function returnString(text: string) {
    return text;
  }

  const buttonProps = {
    label: "Simple function no params passed show console msg",
    takesNoParams: wasClicked,
    takesParamsReturns: (text: string) => returnString(text), //the one that displays on mrkup
    takesParamsNoReturn: (text: string) => {
      // Do this one easier to remember.
      return returnNothing(text);
    },
  };

  //Example of a Closesure
  //***************************/
  function createPizzaOrder(customerName) {
    let orderCount = 0;

    return function orderPizza(pizzaType) {
      orderCount++;
      console.log(
        `${customerName} ordered a ${pizzaType}. Total orders: ${orderCount}`
      );
    };
  }
  const yelvyOrder = createPizzaOrder("Yelvy");
  const chrisOrder = createPizzaOrder("Chris");
  yelvyOrder("Margherita"); // Yelvy ordered a Margherita. Total orders: 1
  yelvyOrder("Pepperoni"); // Yelvy ordered a Pepperoni. Total orders: 2
  yelvyOrder("PineApple"); // Yelvy ordered a Pepperoni. Total orders: 3

  chrisOrder("CheesePizza"); // Chris ordered a CheesePizza. Total orders: 1. THIS IS FIRST ONE. Its a complete new instance
  yelvyOrder("SaladPizza"); // Yelvy ordered a Pepperoni. Total orders: 4.  Yelvy instance continues knowing her count.

  //***************************/
  //Example of a Closesure ENDS

  //Example of a MAP - REMEMBER TO RETURN PLEASE
  // RENDERED IN JSX
  //***************************/
  const exArrayMap = [
    { name: "yelvy", title: "teacher", shift: "nighttime" },
    { name: "Cali", title: "teacher", shift: "daytime" },
    { name: "CJ", title: "teacher", shift: "overnight" },
    { name: "Joe", title: "teacher", shift: "morning" },
    { name: "Helen", title: "teacher", shift: "morning" },
  ];
  //Example of a MAP - ENDS
  //***************************/

  //Example of a FILTER - MAPPED IN JSX
  //***************************/
  const filterGoodTimes = exArrayMap.filter(
    (person) => person.shift === "overnight" || person.shift === "nighttime"
  );
  //***************************/

  // EXAMPLE OF REDUCE
  //***************************/
  const shiftCounts = exArrayMap.reduce((acc, person) => {
    const shift = person.shift;
    acc[shift] = (acc[shift] || 0) + 1;
    return acc;
  }, {});
  console.log("my obj", shiftCounts);
  // EXAMPLE OF REDUCE END
  //***************************/

  return (
    <>
      <div>
        <h1>Welcome to my Playground</h1>
        <MyButton {...buttonProps} />
      </div>
      <hr></hr>
      <div>
        <h2>1. Example of Closure on this page see console for it.</h2>
        <h2>2. Example of a Map() displaying below</h2>
        <div className="indentMe">
          {exArrayMap.map((itm) => {
            return (
              <div key={itm.name}>
                {itm.name}'s' shift is {itm.shift}
              </div>
            );
          })}
        </div>
        <h2>3. Example of a filter() displaying below</h2>
        <div className="indentMe">
          {exArrayMap
            .filter(
              (person) =>
                person.shift === "daytime" || person.shift === "morning"
            )
            .map((item) => (
              <div key={item.name}>
                {item.name} has the good shift of {item.shift}
              </div>
            ))}
        </div>
        <h2>
          4. Example of a filter() but with the filter happening in the JS not
          the JSX
        </h2>
        <div className="indentMe">
          {filterGoodTimes.map((item) => {
            return (
              <div key={item.name}>
                {item.name} has the bad shift of {item.shift}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PlayGround;
