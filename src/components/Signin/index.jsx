import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default class SignIn extends React.Component {
    render() {
        return (
            <div className="signin" id="signin">
                <form className="modal-content" action="/action_page.php">
                    <div className="container">
                        <div className="form-signin">
                            <h1>SMASH</h1>
                            <p className="txt-wcback">Welcome back!</p>

                            <input type="text" placeholder="Email" name="email" required />

                            <input type="password" placeholder="Password" name="psw" required />

                            <div className="clearfix">
                                <button type="submit" className="signupbtn normal-btn">
                                    Sign In
                                </button>
                            </div>
                            <NavLink to="/signup">
                                <p className="txt-donthave">Don't have an account?</p>
                            </NavLink>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
