import React from "react";
import PropTypes from "prop-types";
import HornedBeast from "./HornedBeast";

const Gallery = () => {
    return (
        <div>
            <HornedBeast
            title="Rhinoceros"
            imageUrl={https://media.istockphoto.com/id/497537400/photo/rhinoceros-on-white-background.jpg?s=612x612&w=0&k=20&c=QQ8kHjUIcGmvkFo4hoFcYw2hc2hB5g9fvt0Myu6PvpU=}
            description={"Rhinoceroses, commonly known as rhinos, are large herbivorous mammals characterized by their thick skin and one or two horns on their snouts. They have a prehistoric appearance and are known for their massive size and powerful build. Despite their imposing appearance, they are primarily herbivores and are found in various habitats across Africa and Asia."}
            />
        </div>
    );
};

export default Gallery;
