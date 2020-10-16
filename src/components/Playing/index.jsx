import React from 'react';
import './style.scss';
// import { Card, Row } from 'antd';
import { image1, image3 } from '../../assets/images';

export default class Playing extends React.Component {
    render() {
        return (
            <div className="playing">
                <div className="container">
                    <h3>Playing</h3>
                    <div className="select-player">
                        <div className="player">
                            <img src={image1} alt="avt" />
                            <div className="title">Minh</div>
                        </div>
                        <div className="txt-vs">VS</div>
                        <div className="player">
                            <img src={image3} alt="img" />
                            <div className="title">Man</div>
                        </div>
                    </div>
                    <div className="input-core">
                        <div className="player">
                            <input type="number" placeholder="Enter points" />
                        </div>
                        <div className="txt-vs">Set 1</div>
                        <div className="player">
                            <input type="number" placeholder="Enter points" />
                        </div>
                    </div>
                    <div className="input-core">
                        <div className="player">
                            <input type="number" placeholder="Enter points" />
                        </div>
                        <div className="txt-vs">Set 2</div>
                        <div className="player">
                            <input type="number" placeholder="Enter points" />
                        </div>
                    </div>
                    <div>
                        <button>End Game</button>
                    </div>
                </div>
            </div>
        );
    }
}
