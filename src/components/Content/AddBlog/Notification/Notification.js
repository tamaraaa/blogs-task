import React from 'react';
import {connect} from 'react-redux';
import {removeNotification} from '../../../../redux/actions';

import './Notification.scss';

export const Notification = ({notification, removeNotification}) => {
    return (
        <div className={`notification ${notification.type === 'error' ? 'red-text' : 'green-text'}`}>
            <p>{notification.text}</p>
            <span className='notification__close' onClick={removeNotification}>x</span>
        </div>          
    );
};
const mapStateToProps = ({notification}) =>({
    notification,
});
const mapDispatchToProps = {
    removeNotification,
};
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
