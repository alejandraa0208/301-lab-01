import React from "react";
import { Form } from 'react-bootstrap';
import HornedBeast from "./HornedBeast";



class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      selectedHorns: '',
    };
  }
  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  handleHornsChange = (event) => {
    this.setState({ selectedHorns: event.target.value });
  }

    render() {
      const { data } = this.props;
      const { searchQuery, selectedHorns } = this.state;

      const uniqueHorns = [...new Set(data.map((beast) => beast.horns))];

      const filteredData = data.filter(beast => {
        const regex = new RegExp(searchQuery, 'i');
        return regex.test(beast.keyword) && (selectedHorns === '' || beast.horns === parseInt(selectedHorns));
      });

      const hornedBeasts = filteredData.map((beast) => (
          <div key={beast._id} className="col-md-3 mb-4">
             <HornedBeast
            title={beast.title}
            image={beast.image_url}
            description={beast.description}
            onClick={() => this.props.onBeastSelect(beast)}
          />
        </div>
        ));
    
        return (
          <div className="container mt-4">
            <Form>
              <Form.Group controllId="formHornsFilter">
                <Form.Label>Filter by Number of Horns:</Form.Label>
                <Form.Control
                as="select"
                value={selectedHorns}
                onChange={this.handleHornsChange}
                >
                  <option value="">All</option>
                  {uniqueHorns.map((hornsValue, index) => (
                    <option key={index} value={hornsValue}>
                      {hornsValue} Horn{hornsValue !== 1 ? "s" : ""}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
            <input
              type="text"
              placeholder="Search by keyword..."
              value={searchQuery}
              onChange={this.handleSearchChange}
            />
            <div className="row">
              {hornedBeasts}
            </div>
          </div>
        );
      }
  }

export default Gallery;