import React, {Component} from 'react';
import PropTypes from 'prop-types';
import loader from 'sass-loader';
import { bind, concat } from 'lodash';
import Axios from 'axios';
import Contact from "./Contact";

class Contacts extends Component {
constructor (props){
super(props)

this.state={
    contacts:[],
    // loading: true,

}
this.fetchContacts=this.fetchContacts.bind(this);
this.componentDidMount=this.componentDidMount.bind(this);
}
    fetchContacts(event){
        const res= axios.get('/contact')
        .then(function(response){
            if(response.data.sttatus==200){
                // this.setState({loading:false});
                this.setState({contacts:res.data.contacts});
            }

            console.log(response);
        }) .catch(function (response) {
            console.log(response);
            });
    }
 componentDidMount(){
     this.fetchContacts();
 }


    render() {
        return (
            <div>
                try{
        {this.state.contact.map(contact=>(
            <Contact contact={contact} key={contact.id}/>
        ))}}catch(error){
                console.log('error')
            }
            </div>
        );
    }
}

Contacts.propTypes = {};

export default Contacts;
