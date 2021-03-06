import React, {Component} from 'react';
import axios from 'axios';
class AddContact extends Component {
    constructor (props) {

        super(props)
        this.state = {
            name: '',
            email: '',
            phone:'',
        }
        this.handleInput = this.handleInput.bind(this),
        this.saveContact=this.saveContact.bind(this)
    }
    handleInput(e){
        this.setState({[e.target.name]:e.target.value})
    }
    saveContact  (e){
        e.preventDefault();
      const res= axios.post('/contact',this.state);
        // this.setState({
        //     name:'',email:'',phone:''
        // });
       res.then(function (response) {
        console.log(response);
        })
        .catch(function (response) {
        console.log(response);
        });
        // if(this.props.status==200){
        //     this.props.history.push("/");
        //     // console.log(res);
        // }

    }
    render() {
        return (
            <div className='container mt-5'>
                    <form onSubmit={this.saveContact}>
                        <div className="form-group">
                            <h4 className="badge badge-info">Contacts Information</h4>
                            <div className="form-group">
                            <input type="text" name="name" className="col-md-5 form-control" value={this.state.name}
                             onChange={this.handleInput} placeholder="Enter Contacts Name" required/>
                            </div>
                            <div className="form-group">
                             <input type="text" name="email" className="col-md-5  form-control" value={this.state.email}
                             onChange={this.handleInput} placeholder="Enter Email" required/>
                            </div>
                            <div className="form-group">
                            <input type="text" name="phone" className="col-md-5  form-control" value={this.state.phone}
                             onChange={this.handleInput} placeholder="Enter  Phone" />
                             </div>
                             <div className="form-group">
                             <input type="submit" className="btn  btn-success" value="Add Contacts"   />
                             </div>
                        </div>
                    </form>
                </div>
        );
    }
}

export default AddContact;
