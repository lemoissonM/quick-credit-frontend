import React from "react";
import SigninForm from "../container/SigninForm";
import SignupForm from "../container/SignupForm";
import Tab from '../presentationnal/Tab.jsx';
import background from '../../../../public/images/background/background_image.jpg';
import '../../../../public/style/style.css';


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginActive: true
    };
    this.pageToDisplay = this.pageToDisplay.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  pageToDisplay() {
    if (this.state.loginActive) {
      return <SigninForm />;
    }
    return <SignupForm />;
  }
  handleClick(event) {
    if (event.target.id === 'connection_tab') {this.setState({ loginActive: true });} else {this.setState({ loginActive: false });}
  }
  render() {
    return (<>
      <div className="container background">
        <div className="center-container" background={background}>
          <div className="col-6">
            <h1 className="title"> Quick Credit </h1>
            <h2 className="title_description">Take your project to the next Level with low interest loans</h2>
          </div>
          <div className="col-6">
            <div className="account-box" >
              {this.pageToDisplay()}
              <div className="tab_menu">
                <Tab type="button" value="SIGN IN" className={this.state.loginActive ? "tab-connection-active" : "tab-connection"} id="connection_tab" handleClick={this.handleClick} />
                <Tab type="button" className={!this.state.loginActive ? "tab-connection-active" : "tab-connection"} id="registerTab" value="SIGN UP" handleClick={this.handleClick}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>);
  }
}

export default IndexPage;
