import React from "react";
import HornedBeast from "./HornedBeast";
import Rhino from "../assets/rhino.jpeg";
import Triceratops from "../assets/triceratops.jpeg";
import Narwhal from "../assets/narwhal.jpeg";


class Gallery extends React.Component {
    render() {
        return (
            <>
            <HornedBeast title="Rhinoceros" image={Rhino} description=" A large, herbivorous mammal with one or two horns on its snout. Rhinos are known for their thick, protective skin and can be found in Africa and Asia." />
            <HornedBeast title="Triceratops" image={Triceratops} description="An extinct dinosaur from the Late Cretaceous period, recognizable for its three facial horns and large frill."/>
            <HornedBeast title="Narwhal" image={Narwhal} description=" A unique toothed whale species found in Arctic waters. The male narwhal's long, spiral tusk is actually an elongated tooth." />
            </>
        )
    }
}

export default Gallery;
