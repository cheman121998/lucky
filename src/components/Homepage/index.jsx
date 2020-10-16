import React from 'react';
import './style.scss';
import { Card, Modal, Col } from 'antd';
import { emptyPlayer } from '../../assets/images';

import { SearchOutlined } from '@ant-design/icons';

import { dataTimeActive } from '../../api/Data';

const ListCard = ({ title, timeActive, image }) => (
    <Col xs={12} md={12} lg={12}>
        <div className="search-card">
            <img alt="img" src={image} />
            <div className="title">{title}</div>
            <div className="card-time-active">Active {timeActive} mins ago</div>
        </div>
    </Col>
);

export default class Homepage extends React.Component {
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div className="homepage">
                <div className="container">
                    <h3>Select players</h3>
                    <div className="select-player">
                        <Card
                            onClick={this.showModal}
                            className="card-select"
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={emptyPlayer} />}
                        />

                        <div className="txt-vs">VS</div>

                        <Card
                            onClick={this.showModal}
                            className="card-select"
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={emptyPlayer} />}
                        />
                    </div>
                    <div>
                        <button className="normal-btn">Start Game</button>
                    </div>
                </div>
                <Modal
                    className="modal-list-card"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div className="search-player">
                        <div className="container">
                            <h3>Search</h3>
                            <span className="search">
                                <SearchOutlined />
                                <input type="text" placeholder="Tag a name, eg. John" />
                            </span>
                            <div className="group-card">
                                {/* {console.log('===========Data card=========', dataTimeActive)} */}
                                {dataTimeActive.slice(0, 6).map((e, i) => (
                                    <ListCard
                                        key={i}
                                        title={e.title}
                                        timeActive={e.timeActive}
                                        image={e.image}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}
