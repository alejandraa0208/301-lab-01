import React from "react";
import { Card, Button } from 'react-bootstrap';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        };
    }
    handleFavoriteClick = () => {
        this.setState(prevState => ({
            favorites: prevState.favorites + 1
        }));
    }
    render() {
        const { title, image, description, onClick } = this.props;
        const { favorites } = this.state;

        return (
            <Card className="horned-beast">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img 
                        variant="top" 
                        src={image} 
                        alt={title}
                        className="img-fluid"
                        onClick={onClick} 
                    />
                    <Card.Text>{description}</Card.Text>
                    <div className="favorite">
                        <span>{favorites}</span>
                        <Button onClick={this.handleFavoriteClick} variant="danger">
                            ❤️ Favorite Me
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            
        );
    }
}
export default HornedBeast;