import React from "react";
import s_flashmo_022_park_34 from "./images/s_flashmo_022_park_34.jpg";

const PortfolioContent = (props) => {
  return (
    <>
     
      <div className="section_box2" align="justify">
        <div className="post_title">{props.title}</div>
        <div className="text_area">
          <img
            src={props.image}
            alt="Photo One"
            title="Photo One"
            width="120"
            height="90"
            className="templatemo_pic"
          />
          Cras magna velit, pellentesque mattis, faucibus vitae, feugiat vitae,
          sapien. Donec ante. Nam sit amet justo vel libero tincidunt dignissim.
          Fusce ac orci sit amet velit ultrices condimentum. <br />
          <br />
          Integer imperdiet odio ac eros. Ut id massa. Nullam nunc. Vivamus
          sagittis varius lorem. Quisque in diam a justo condimentum molestie.
          Vivamus a velit. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Curabitur quis velit quis tortor
          tincidunt aliquet.
          <div className="publish_date">
            Post Date: 21-10-2020 · Tags: <a href="#">CSS</a> ·{" "}
            <a href="#">Web Design</a> · <a href="#">Full Story</a>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default PortfolioContent;
