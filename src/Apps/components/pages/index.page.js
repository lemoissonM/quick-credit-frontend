import React from "react";
import SigninForm from "../container/SigninForm";
import Tab from '../presentationnal/Tab.jsx';
import background from '../../../../public/images/background/background_image.jpg';
import '../../../../public/style/style.css';
const App = () => (
  <>
    <div className="container background">
      <div className="center-container" background={background}>
        <div className="col-6">
          <h1 className="title"> Quick Credit </h1>
          <h2 className="title_description">Take your project to the next Level with low interest loans</h2>
        </div>
        <div className="col-6">
          <div className="account-box" >
            <SigninForm />
            <div className="tab_menu">
              <Tab type="button" value="SIGN IN" className="tab-connection-active" id="connection_tab"/>
              <Tab type="button" className="tab-connection" id="registerTab" value="SIGN UP"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default App;
