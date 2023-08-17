import React from "react";
import { Form } from 'react-bootstrap';
import HornedBeast from "./HornedBeast";



class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOption: "",
      searchQuery: "",
    };
  }
  handleFilterChange = (event) => {
    this.setState({ filterOption: event.target.value });
  }

    render() {
      const { data } = this.props;
      const { filterOption, searchQuery } = this.state;
      
      // the uniqueHorns was assisted by chatGPT
      const uniqueHorns = [...new Set(data.map((beast) => beast.horns))];
      
      // merging the searchQuery and Filter by horns was assisted by chatGPT
      const filteredData = data.filter(beast => {
        if (filterOption === "all" || filterOption === "") {
          return true;
        } else if (filterOption === "search") {
          const regex = new RegExp(searchQuery, "i");
          return regex.test(beast.keyword);
        } else {
          return beast.horns === parseInt(filterOption);
        }
      });

      const displayedData =
        filterOption === "all" || filterOption === ""
        ? data
        : filteredData;

      const hornedBeasts = displayedData.map((beast) => (
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
              <Form.Group controllId="formFilter">
                <Form.Label>Filter by:</Form.Label>
                <Form.Control
                as="select"
                value={filterOption}
                onChange={this.handleFilterChange}
                >
                  <option value="all">Show All</option>
                  {uniqueHorns.map((hornsValue, index) => (
                    <option key={index} value={hornsValue}>
                      {hornsValue} Horn{hornsValue !== 1 ? "s" : ""}
                    </option>
                  ))}
                  <option value="search">Search by Keyword</option>
                </Form.Control>
                {filterOption === "search" && (
                  <input
                  type="text"
                  placeholder="Enter keyword..."
                  onChange={(e) =>
                  this.setState({ searchQuery: e.target.value })
                  }
                />
                )}
              </Form.Group>
            </Form>
            <div className="row">
              {hornedBeasts}
            </div>
          </div>
        );
      }
  }

export default Gallery;