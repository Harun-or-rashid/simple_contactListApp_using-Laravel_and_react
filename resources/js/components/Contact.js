import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { concat } from 'lodash';

export default class Contact extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const {contact}=this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
<                       div className="col-md-2 ">
                            <span>{contact.name[0]}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
