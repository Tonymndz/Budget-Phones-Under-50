import React from 'react';
import iphone_x from "./images/iphone-x.png";
import medium_battery from "./images/medium-battery.png";
import smartphone_tablet from "./images/smartphone-tablet.png";
import hdd from "./images/hdd.png";
import computer_ram from "./images/computer-ram.png";
import camera from "./images/camera.png";
import smartphone_cpu from "./images/smartphone-cpu.png";
import ebay from "./images/ebay.png";
import "./Card.css"

let Card = ({ ebayPrice, price, phone, imageLink, screenInches, screenPixels, RAM, CPU, CPUCore, batteryLife, cameraPixelsFront, cameraPixelsBack, ebayLink, storage, comparison, comparisonLink, oponnentPhone, comparisonsFromSiteText = "Comparison from Phonemore.com", comparisonButtonText = `See In-depth full comparison`, param2nd = "vs", priceHeading = false}) => {
  /*
  let PriceHeader = () => {
    let priceHeadingIsFalse = priceHeading === false;
    if (priceHeadingIsFalse) return;
    return <div className="PriceHeader">
      <h2 className="Title">{price}</h2>
      <hr />
    </div>
  }
  */

  let Comparison = () => {
    let ComparisonIsFalse = comparison === false;
    if (ComparisonIsFalse) return;

    let versus = [phone, param2nd, oponnentPhone] 

    return <div className="Comparison">
      <div className="flexRow">
        <span >{versus[2]}</span>
        <span >{versus[1]}</span>
        <span >{versus[0]}</span>
      </div>
      <a href={comparisonLink} className="ComparisonButton">
      <img src={iphone_x} alt="Tiny Phone" />
        {comparisonButtonText}
      </a>
      <span id="comparisonText"></span>
    </div>
}

  return <div className="Card">
    <h2 className="Title">{phone} <span className="Price">({price})</span></h2>
    <hr />
    <div className="Left_And_Right_FlexBox">
      <img className="PhoneImage" src={imageLink} alt="Phone"/>
      <div className="Details1">
          <span className="Header">{phone}</span>
          <div className="TopBox">
            <div className="BatteryBox">
              <img className="ResizeImage" src={medium_battery} alt="Battery"/>
              <span id="Top">{batteryLife}</span>
              <span id="Middle">Hours</span>
              <span id="Bottom">Battery Life</span>
            </div>
            <div className="ScreenSizeBox">
              <img className="ResizeImage" src={smartphone_tablet} alt="Screen Size" />
              <span id="Top">{screenInches}</span>
              <span id="Middle">Inches</span>
              <span id="Bottom">{screenPixels} Pixels</span>
            </div>
            <div className="StorageBox">
              <img className="ResizeImage" src={hdd} alt="Storage" />
              <span id="Top">{storage}</span>
              <span id="Middle">Storage</span>
              <span id="Bottom"></span>
            </div>
          </div>
          <div className="BottomBox">
            <div className="RAMBox">
              <img className="ResizeImage" src={computer_ram} alt="RAM"/>
              <span id="Top">{RAM}</span>
              <span id="Middle">RAM</span>
              <span id="Bottom"></span>
            </div>
            <div className="CameraBox">
              <img className="ResizeImage" src={camera} alt="Camera" />
              <span id="Top">{cameraPixelsFront} Front</span>
              <span id="Middle">Million Pixels</span>
              <span id="Bottom">{cameraPixelsBack} Back</span>
            </div>
            <div className="CPUBox">
              <img className="ResizeImage" src={smartphone_cpu} alt="CPU" />
              <span id="Top">{CPU}</span>
              <span id="Middle">CPU</span>
              <span id="Bottom">{CPUCore}</span>
            </div>
          </div>
          <a href={ebayLink} className="BottomButton">
            <img src={ebay} alt="ebay" />
            {ebayPrice}
          </a>
      </div>
    </div>
    {Comparison()}
  </div>
}

export default Card;

/*
  Title: Motorola Moto Z Droid X
  Screen Size(Inches): 5.5" [Bottom Pixel-Size] X
  Ram X
  CPU
  Storage Options
  Battery Life (Hours) X
  Example Ebay Price
*/