import React, {Component} from 'react';
import PropTypes from 'prop-types';
import loader from 'sass-loader';
import { bind } from 'lodash';
import Axios from 'axios';

class Contact extends Component {
constructor (props){
super(props)

this.state={
    contacts:[],
    loader: true
}
this.fetchContacts=this.fetchContacts.bind(this);
this.componentDidMount=this.componentDidMount.bind(this);
}
    fetchContacts(event){
        const res= axios.get('/contact')
        .then(function(res){
            if(res.data.sttatus==200){
                this.setState({contacts:res.data.contacts});
                this.setState({loader:true});
            }
            console.log(res);
        }) .catch(function (res) {
            console.log(res);
            });
    }
 componentDidMount(){
     this.fetchContacts();
 }
   
    render() {
        if(!this.state.loader==this.state.contacts){
            return <h3>Loading...</h3>
        }
        return (
            <div>
                <h1>hi</h1>
            </div>
        );
    }
}

Contact.propTypes = {};

export default Contact;
