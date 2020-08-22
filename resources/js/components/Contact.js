import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    render() {
        const {contact}=this.props;
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2">
                                <span>{contact.name[0]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {};

export default Contact;
