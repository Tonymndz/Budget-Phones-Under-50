import React from "react";
import "./Title.css";
import pileOfPhones from "./pileOfPhones.jpg";

let Title = () => {
  return (
    <div className="Title">
      <h1 className="TitleHeader">Best Budget Phones under $50</h1>
      <div id="FlexAligning">
        <span id="Updated">Updated September 27, 2020 at 11:31 AM</span>
        <span id="Updated">By Tony Mendez</span>
      </div>
      <img id="PhoneIMG" src={pileOfPhones} alt="Group Of Phones" />
      <p>
        I've compared over <b>150 phones</b> in total, and around 35 of those
        phones were <b>under $50</b>. So if you're looking for extremely cheap
        phones, which are phones under $50, you came to the right place.
        <br />
        <br />
        Here I've compiled a list of 6 phones that I would consider to be the best
        budget phones under $50. All these phones are the best in terms of specs
        while being close to or around under $50. So I let you know these
        phones exist and that will give you the best bang for you buck! 
        <br />
        <br/>
        Since we are going extreme budget mode, the best deals we could get are at <b>EBAY!</b>
      </p>
    </div>
  );
};

export default Title;
