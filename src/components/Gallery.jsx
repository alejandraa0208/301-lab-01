import React from "react";
import HornedBeast from "./HornedBeast";


class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }
  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

    render() {
      const { data } = this.props;
      const { searchQuery } = this.state;

      const filteredData = data.filter(beast => {
        const regex = new RegExp(searchQuery, 'i');
        return regex.test(beast.keyword);
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