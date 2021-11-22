import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
/* 

    Sheak Iftakhar Rahaman
    101054615 
 
 */
export default class PersonList extends Component {

    state = {
        person: []
    }

     //Component Lifecycle Callback
    componentDidMount =()=> {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const person = res.data.results;
            this.setState({ person });
        })
    }

    render() {
        return (
            <div class="bg-primary clearfix">
                {
                    this.state.person.map(prs=>(
                        <div class="clearfix">
                            <div>{prs.name.title} {prs.name.first} {prs.name.last} - {prs.login.uuid}</div>
                            <div class="pull-left">
                                <img class="rounded-circle" src={prs.picture.large}/>
                            </div>
                            <div>User Name: {prs.login.username}</div>
                            <div class="pull-right">Gender: {prs.gender}</div>
                            <div>Time Zone Description: {prs.location.timezone.description}</div>
                            <div>Email: {prs.email}</div>
                            <div>Birth Date and Age: {prs.dob.date} ({prs.dob.age})</div>
                            <div>Register Date: {prs.registered.date}</div>
                            <div>Phone#: {prs.phone}</div>
                            <div>Cell#: {prs.cell}</div>
                            <br/>
                        </div>
                    ))
                }
            </div>
        )
    }
}
