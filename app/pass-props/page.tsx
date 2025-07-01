import { people, Person } from "../../data/people";
import { Description } from "../../src/components/Description";
import { People } from "../../src/components/People";
import { formatPageDescription } from "../../utls/usefulFunction";

const formatPerson = (person: Person) => {
  return (
    <div>
      {person.name} is {person.age} years old and {person.description}.
    </div>
  );
};

const pageDescription = (
  <>
    <p>
      This page has all the notes and code that was done to understand the
      concept of passing props from parent to child component.
    </p>
    <p>
      This page also went over different types and how to declare them. We
      passed strings, numbers, callback functions, objects, and arrays.
    </p>
    <p>You can see all the detailed exercises here:</p>
  </>
);

const pageLink = (
  <>
    <a href="https://www.notion.so/Types-and-Passing-Props-Challenges-217a46a316f58040b782ece41af8039a">
      Types and Passing Props Challenges
    </a>
  </>
);

const pageDetails = {
  pageDescription: (
    <>
      <p>
        This page has all the notes and code that was done to understand the
        concept of passing props from parent to child component.
      </p>
      <p>
        This page also went over different types and how to declare them. We
        passed strings, numbers, callback functions, objects, and arrays.
      </p>
      <p>You can see all the detailed exercises here:</p>
    </>
  ),
  pageLink: (
    <>
      👉
      <a href="https://www.notion.so/Types-and-Passing-Props-Challenges-217a46a316f58040b782ece41af8039a">
        Types and Passing Props Challenges
      </a>
    </>
  ),
};

const PassProps = () => {
  return (
    <>
      <Description callback={formatPageDescription} PageDetails={pageDetails} />
      <People people={people} formatPerson={formatPerson} />
    </>
  );
};

export default PassProps;
