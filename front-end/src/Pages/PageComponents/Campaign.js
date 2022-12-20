import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Campaign extends Component {

  constructor(props) {
      super(props);
    }

  render() {
    const { name, description, amount, logoUrl, id, status } = this.props;
    return (
      <div className="col-sm-6 d-flex align-items-stretch p-2">
        <div className="card">
          <div className="card-body text-center">
            <img className="card-img-top img-thumbnail b-2" src={logoUrl} alt={name}/>
            <h4 className="card-title">{name}</h4>
            <p className="card-text text-justify">{description}</p>
          </div>
          <div className="text-center text-secondary card-footer bg-transparent border-white mb-4">
            <button className="btn btn-primary active" style={{marginRight: "20px"}} type="button">Amount: {amount}</button>
            <button className="btn btn-success active" style={{marginRight: "20px"}} type="button">{status}</button>
            <Link to={'/Donate/' + id} key={id}>
              <button className="btn btn-primary active" type="button">Donate</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
};

export default Campaign;
