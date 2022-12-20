import React, { Component } from 'react';
import Campaign from './PageComponents/Campaign.js';

class CampaignBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3002/api/campaign', {
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            campaigns: result
          });
        },
      )
  }

  render() {
    const { campaigns } = this.state;
    return (
      <div>
        <div>
          <h1 className="p-4 display-4 text-center"> Crowd Funding List </h1>
        </div>
        <div className="container">
          <div className="row">
            {campaigns.map((campaign) => {
              return <Campaign key={campaign['id']} name={campaign['name']}
              description={campaign['discriptions']}
              amount={campaign['amount']}
              logoUrl="https://images.justgiving.com/image/d2754874-1419-46c3-bbdd-e2c5494a156c.jpg" id={campaign['id']} status={campaign['status']}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CampaignBuilder;
