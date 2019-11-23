import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../../redux/actions/signup.action";
import Input from '../presentationnal/Input.jsx';
import PropTypes from "prop-types";
import '../../../../public/style/style.css';

function mapDispatchToProps(dispatch) {
  return {
    signup: user => dispatch(signup(user))
  };
}

const mapStateToProps = state => ({
  error: state.signup.error,
  user: state.signup.user,
  pending: state.signup.pending
});

class signupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fname: '',
      lname: '',
      address: '',
      country: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { email, password, fname, lname } = this.state;
    this.props.signup({ email, password, fname, lname, country: 'none', address: 'none' });
  }
  setResponse() {
    const { user, error } = this.props;
    let response;
    if (user) response = 'successfuly';
    else if (error) response = 'error occured';
    else response = '';
    return response;
  }
  render() {
    //const { email, password } = this.state;
    const { user, error, pending } = this.props;
    return (
      <form onSubmit={this.handleSubmit} action="dashboard.html" className="form-content row" id="connection">
        <Input handleChange={this.handleChange} required type="text" name="fname" id="fname" className="col-4" placeholder="Firstname" pattern=".{2,}"/>
        <Input handleChange={this.handleChange} required type="text" name="lname" id="lname" className="col-4" placeholder="Lastname" pattern=".{2,}"/>
        <Input handleChange={this.handleChange} required type="mail" name="mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="email" className="col-10" placeholder="Your email address"/>
        <Input handleChange={this.handleChange} required type="password" name="password" id="password" className="col-10" placeholder="Create your password"/>
        <Input handleChange={this.handleChange} required type="password" name="cpassword" id="cpassword_input" className="col-10" placeholder="Confirm your password"/>
        <Input type="submit" value="Create account" className="submit col-11" name="button" />
        {pending && <p className="swtch_create col-12"><b> Creating your account...</b></p>}
        {user && <p className="swtch_create col-12"><b> Account created</b></p>}
        {error && <p className="swtch_create col-12"><b>{error.message}</b></p>}
      </form>
    );
  }
}
signupForm.propTypes = {
  signup: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  user: PropTypes.object,
  error: PropTypes.object
};
const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(signupForm);
export default Form;
