import React, {Component} from 'react';
import PropTypes from 'prop-types';
import loader from 'sass-loader';
import { bind, concat } from 'lodash';
import Axios from 'axios';

class Contacts extends Component {
constructor (props){
super(props)

this.state={
    contacts:[],
    loading: true
}
this.fetchContacts=this.fetchContacts.bind(this);
this.componentDidMount=this.componentDidMount.bind(this);
}
    fetchContacts(event){
        const res= axios.get('/contact')
        .then(function(response){
            if(response.data.sttatus==200){
                this.setState({loading:false});
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
        // list=this.state.contacts.map((contact)=>
        // <li>{concat}</li>
        //  );
        if(this.state.loading){
            return <h3>Loading...</h3>
        }
        return (
            <div>
                <h1>hi</h1>
        {this.state.contact.map(contact=>(
            <Contacts contact={contact} key={contact.id}/>
        ))}
            </div>
        );
    }
}

Contacts.propTypes = {};

export default Contacts;
