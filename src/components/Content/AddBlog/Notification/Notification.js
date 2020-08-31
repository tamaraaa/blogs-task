import React from 'react';
import {connect} from 'react-redux';

import './Notification.scss';

export const Notification = ({notification}) => {
    return (
        <div className={`notification ${notification.type === 'error' ? 'red-text' : 'green-text'}`}>
            <p>{notification.text}</p>
            <span className='notification__close'>x</span>
        </div>          
    );
};
const mapStateToProps = ({notification}) =>({
    notification,
});
export default connect(mapStateToProps, null)(Notification);
