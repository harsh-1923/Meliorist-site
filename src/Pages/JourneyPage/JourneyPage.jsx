import React from "react";
import "./JourneyPage.css";
import GRASSPIC from "../../assets/GRASSPIC.jpg";

const JourneyPage = () => {
  return (
    <div className="journey-wrapper">
      <img src={GRASSPIC} className="journey-img" />
      <div className="journey-header">THE JOURNEY</div>

      <div className="journey-main-wrapper">
        <p className="journey-header-main">THE ROOTS</p>
        <p className="xxx">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum
          dolor in nemo animi. Error, ipsum eveniet earum repellendus animi
          ratione veniam, magni iste adipisci voluptatum fugiat quo hic, officia
          accusantium. Dolorem consectetur eos neque fuga eum architecto quia
          provident!
        </p>

        <br />
        <br />

        <p className="journey-header-main">THE ROOTS</p>
        <p className="xxx">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum
          dolor in nemo animi. Error, ipsum eveniet earum repellendus animi
          ratione veniam, magni iste adipisci voluptatum fugiat quo hic, officia
          accusantium. Dolorem consectetur eos neque fuga eum architecto quia
          provident!
        </p>

        <br />
        <br />
        <p className="journey-header-main">THE ROOTS</p>
        <p className="xxx">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum
          dolor in nemo animi. Error, ipsum eveniet earum repellendus animi
          ratione veniam, magni iste adipisci voluptatum fugiat quo hic, officia
          accusantium. Dolorem consectetur eos neque fuga eum architecto quia
          provident!
        </p>
      </div>
    </div>
  );
};

export default JourneyPage;
