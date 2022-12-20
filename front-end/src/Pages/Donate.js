import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import axios from 'axios';

class Donate extends Component {
    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeCurrency = this.onChangeCurrency.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.id = props.match.params.id
        this.state = {
            name: '',
            amount: '',
            id: '',
            currency:'',
            currencies: [],
            inputErrors : ''
        }
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeAmount(e) {
        this.setState({ amount: e.target.value })
    }
    onChangeId(e) {
        this.setState({ id: e.target.value })
    }
    onChangeCurrency(e) {
        this.setState({ currency: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const Object = {
            name: this.state.name,
            amount: this.state.amount,
            id: this.id,
            currency:this.state.currency
        };
        axios.post('http://localhost:3002/api/donate', Object)
            .then((res) => {
                this.props.history.push('/ThankYou');
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
                this.setState({inputErrors: 'input fields missings'});
                
            });
        this.setState({ name: '', amount: '', id:'', currency:'' })
    }
    componentDidMount() {
        fetch('http://localhost:3002/api/currency', {
          method: "GET",
          headers: {
            "Content-Type" : "application/json"
          },
        })
          .then(res => res.json())
          .then(
            (result) => {
                // console.log(result);
              this.setState({
                currencies: result
              });
            },
          )
    }
  render() {
    const { currencies } = this.state;

    return (
      <div>
          <p className="p-4 text-monospace text-left text-secondary">
             <Link to={'/Campaigns'}>
                <button className="btn btn-primary active" type="button">BACK</button>
             </Link>
          </p>
          <div className="pageContainer">
              <div className="d-flex">
                  <div className="mr-auto p-2">
                      <div className="text-left text-secondary">
                          <h4 className={"mb-4"}>Donation Info</h4>
                          <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input className="form-control form-control-m" type="text" value={this.state.name} onChange={this.onChangeName} id="name" placeholder="Name" required/>
                            </div>
                            <div className="form-group">
                                <input className="form-control form-control-m" type="number" value={this.state.amount} onChange={this.onChangeAmount} id="amount" placeholder="amount" required/>
                            </div>
                            <div className="form-group">
                                <input className="form-control form-control-m" style={{display:"none"}} type="text" value={this.id} onChange={this.onChangeId} id="id" />
                            </div>
                            <br></br>
                            <div className="form-inline">
                            <select className="form-control form-control-m"  onChange={this.onChangeCurrency} id="currency" required>
                                {/* {currencies.map((currency) => {
                                    <option value="us">{currency['country']}</option>
                                })} */}
                                
                                <option value="AFN">Afghanistan</option>
                                <option value="ARS">Argentina Peso</option>
                                <option value="AWG">Aruba Guilder</option>
                                <option value="AUD">Australia Dollar</option>
                                <option value="AZN">Azerbaijan Manat</option>
                                <option value="AZN">Bahamas Dollar</option>
                                <option value="BBD">Barbados Dolla</option>
                                <option value="BYN">Belarus Ruble</option>
                                <option value="BZD">Belize Dollar</option>
                                <option value="BMD">Bermuda Dollar</option>
                                <option value="BOB">Bolivia Bolíviano</option>
                                <option value="BRL">Brazil Real</option>
                                <option value="CAD">Canada Dollar</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="DONATE NOW" style={{marginTop:"20px"}} className="btn btn-primary active" />
                            </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Donate;
