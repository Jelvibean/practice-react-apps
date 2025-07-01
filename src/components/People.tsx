import { JSX } from "react";
import { Person } from "../../data/people";

type PeopleProps = {
  people: Person[];
  formatPerson: (person: Person) => JSX.Element;
  title?: string;
};

export const People = ({ people, formatPerson, title }: PeopleProps) => {
  return (
    <>
      <h2>{title ?? "This is a family"}</h2>
      <ul>
        {people.map((person, index) => {
          return <li key={person.name}>{formatPerson(person)}</li>;
        })}
      </ul>
    </>
  );
};
