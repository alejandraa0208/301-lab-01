import React from "react";
import PropTypes from "prop-types";

const HornedBeast = ({ title, imageUrl, description }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={imageUrl} alt={title} title={title} />
            <p>{description}</p>
        </div>
    );
};

HornedBeast.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
export default HornedBeast;