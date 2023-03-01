import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

class Body extends Component {
  constructor(props) {
    super(props);
    // Define an array of post objects with titles, images, and descriptions
    this.state = {
      posts: [
        // {
        //   name: 'Tusker',
        //   sex: 'Male',
        //   age: 35,
        //   health_status: 'Good',
        //   image_url: "https://i.natgeofe.com/k/e7ba8001-23ac-457f-aedb-abd5f2fdda62/moms5_3x2.png",
        //   species_name: 'African Elephant',
        //   species_id: 1,
        //   animal_id: 123456,
        //   is_approved: "YES"
        // }  
      ]
    }
  }
  componentDidMount() {
    fetch('http://localhost:8080/individuals') 
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.posts.map((post, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img className="card-img-top" src={post.image_url} alt={post.name} />
                <div className="card-body">
                  <h5 className="card-title">{post.name}</h5>
                  <p className="card-text">{post.species_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Body;