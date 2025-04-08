import { useState, useEffect } from "react";

type Pug = {
  id: number;
  url: string;
  breeds: Breed;
  width: number;
  height: number;
};

type Breed = {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
};

const FetchPug = () => {
  const [pugsData, setPugInfo] = useState<Pug | null>(null);
  useEffect(() => {
    const fetchPugData = async () => {
      try {
        const response = await fetch(
          "https://api.thedogapi.com/v1/images/HyJvcl9N7"
        );
        const data = await response.json();
        setPugInfo(data);
      } catch (error) {
        console.log("opps something went wrong.");
      }
    };
    fetchPugData();
  }, []);

  return (
    <>
      <h3>Loop through an object right out of the gate</h3>
      <div>
        <h2>Breed: {pugsData?.breeds[0].name}</h2>
        <img width="500" height="100%" src={pugsData?.url} alt="Dog" />
        <p>Life Span: {pugsData?.breeds[0].life_span}</p>
        <p>Weight: {pugsData?.breeds[0].weight.imperial} lbs</p>
        <p>Height: {pugsData?.breeds[0].height.imperial} inches</p>
      </div>
    </>
  );
};

export default FetchPug;
