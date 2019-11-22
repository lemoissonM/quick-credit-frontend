import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/login.action";
import Input from '../presentationnal/Input.jsx';
import Alert from '../presentationnal/Alert.jsx';
import PropTypes from "prop-types";
import '../../../../public/style/style.css';

function mapDispatchToProps(dispatch) {
  return {
    login: user => dispatch(login(user))
  };
}

const mapStateToProps = state => ({
  error: state.login.error,
  user: state.login.user,
  pending: state.login.pending
});

class loginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
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
    //const { userData, error } = this.props;
    return (

      <form onSubmit={this.handleSubmit} action="dashboard.html" className="form-content row" id="connection">
        <Alert className="alert alert-primary" role="alert" value={this.setResponse()} handleChange={this.handleChange}/>
        <Input type="mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="col-10" placeholder="Your email address" id="email" handleChange={this.handleChange} required/>
        <Input id="password" type="password" className="col-10" placeholder="Your password" handleChange={this.handleChange} required/>
        <a href="#" className="forgot col-12">Forgot password ?</a>
        <Input value="Sign in" type="submit" className="submit "name="button" id="loginBtn" />
        <p className="swtch_create col-12"><b>-- Or --</b></p>
      </form>
    );
  }
}
loginForm.propTypes = {
  login: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  user: PropTypes.object,
  error: PropTypes.object
};
const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginForm);
export default Form;
