import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

export default class SignUp extends React.Component {
    render() {
        return (
            <div className="signup" id="signup">
                <form className="modal-content" action="/action_page.php">
                    <div className="container">
                        <div className="form-signup">
                            <h1>SMASH</h1>
                            <p className="txt-create">
                                Create your account to fully experience the app
                            </p>

                            <input type="text" placeholder="Email" name="email" required />

                            <input type="password" placeholder="Password" name="psw" required />

                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="psw-repeat"
                                required
                            />
                            <div className="clearfix">
                                <NavLink to="/welcomepage">
                                    <button type="submit" className="signupbtn normal-btn">
                                        Create Account
                                    </button>
                                </NavLink>
                            </div>
                            <NavLink to="/" exact>
                                <p className="txt-already">Already have an account?</p>
                            </NavLink>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
