import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends React.Component {
    render () {
        console.log(this.props)
        const { selectedBeast, onClose } = this.props;
        
        if (!selectedBeast) {
            return null;
        }

        return (
            <Modal show={true} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='text-center'>
                    <img 
                        src={selectedBeast.image_url} 
                        alt={selectedBeast.title} 
                        className='img-fluid larger-image' />
                    </div>
                    <p>{selectedBeast.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SelectedBeast;