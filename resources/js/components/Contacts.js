import React, {Component} from 'react';
import PropTypes from 'prop-types';
import loader from 'sass-loader';
import { bind, concat } from 'lodash';
import Axios from 'axios';
import Contact from "./Contact";
import { Link } from 'react-router-dom';

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
              let c=  this.setState({contacts:res.data.contacts});
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
    // {this.setState.contact.map(contact=>(
    //     <Contact contact={contact} key={contact.id}/>
    // ))}
    // let con = {this.state.contacts};
    // let conss={this.c};
//         var y=this.response.data;
   
//              y.map( y => {
//     return <Contact Contact={y} name={y.name} />
// }) 
const { c = [] } = this.state
return(
c.map( c => 
<Contacts c={c.phone} />
)  
)
 
}
}
// Contacts.propTypes = {};
Contacts.prototype.defaultProps = {
    contact: []
}



export default Contacts;
