import React from "react";
import HornedBeast from "./HornedBeast";
import data from '../assets/data.json';


class Gallery extends React.Component {
    render() {
      const hornedBeasts = data.map((beast) => (
        <HornedBeast
          key={beast._id}
          title={beast.title}
          image={beast.image_url}
          description={beast.description}
        />
      ));
  
      return (
        <div className="gallery">
          {hornedBeasts}
        </div>
      );
    }
  }

export default Gallery;