import React from 'react';
import './style.scss';
import { SearchOutlined } from '@ant-design/icons';
//import { Col } from 'antd';
import { dataTimeActive } from '../../api/Data';

const ListCard = ({ title, timeActive, image }) => (
    <div className="search-card">
        <img alt="img" src={image} />
        <div className="title">{title}</div>
        <div className="card-time-active">Active {timeActive} mins ago</div>
    </div>
);

export default class SearchPlayer extends React.Component {
    render() {
        return (
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
        );
    }
}
