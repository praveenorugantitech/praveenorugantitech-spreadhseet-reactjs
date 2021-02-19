import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      FirstName: '',
      LastName: '',
      Email: '',
      Website: '',
      responseMsg: ''
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault();
    axios.post('https://sheet.best/api/sheets/bfe1d9b8-0856-4057-9527-116533b75c2d', this.state).then(() => {
      this.setState({responseMsg:"You have updated the Google SpreadSheet successfully!!"});
    })
    .catch((error) => {
      this.setState({responseMsg:"lease try again!!"});
      
    });

  }

  render() {
    const { FirstName, LastName, Email, Website } = this.state;
    return (
      <Container fluid className="container">
        <Header as='h2'>React Google Spreadsheet!</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='Enter your First Name' type="text" name="FirstName" value={FirstName} onChange={this.changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Enter your Last Name' type="text" name="LastName" value={LastName} onChange={this.changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Enter your Email' type="email" name="Email" value={Email} onChange={this.changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Website</label>
            <input placeholder='Enter your Website' type="text" name="Website" value={Website} onChange={this.changeHandler} />
          </Form.Field>

          <Button color="blue" type='submit'>Submit</Button>
        </Form>
        <h4>{this.state.responseMsg}</h4>
      </Container>
    )
  }
}
