import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class EditStudent extends Component {
  constructor(props) {
    super(props)
 
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
    this.onChangeStudentAddress = this.onChangeStudentAddress.bind(this);
    this.onChangeStudentContact = this.onChangeStudentContact.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      name: '',
      age: '',
      contact: '',
      address:''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          age: res.data.age,
          address: res.data.address,
          contact: res.data.contact
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeStudentAge(e) {
    this.setState({ age: e.target.value })
  }
  onChangeStudentAddress(e) {
    this.setState({ address: e.target.value })
  }
  onChangeStudentContact(e) {
    this.setState({ contact: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const studentObject = {
      name: this.state.name,
      age: this.state.age,
      address: this.state.address,
      contact: this.state.contact
    };
    axios.put('http://localhost:4000/students/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    // Redirect to Student List 
    this.props.history.push('/student-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>
        <Form.Group controlId="Age">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" value={this.state.age} onChange={this.onChangeStudentAge} />
        </Form.Group>
        <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={this.state.address} onChange={this.onChangeStudentAddress} />
        </Form.Group>
        <Form.Group controlId="Contact">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={this.state.contact} onChange={this.onChangeStudentContact} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
  }
}