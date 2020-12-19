import React from 'react';

export default class FetchRandomUser extends React.Component{

    state = {
        loading: true,
        people: [],
    }

    async componentDidMount(){
        const url = "https://api.randomuser.me/?results=5";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({people: data.results, loading: false})
    }

    render(){

        if(this.state.loading){
            <div>Loading...</div>
        }
        if(!this.state.people.length){
            <div>Didn't get people</div>
        }
        
        return(
            <div>
                {this.state.people.map((person, i) => (
                    <div key={person.name.first + person.name.last}>
                        <div>{person.name.title}</div>
                        <div>{person.name.first}</div>
                        <div>{person.name.last}</div>
                        <img src={person.picture.large} />
                    </div>
                ))}
            </div>
        )
        /*
        return(
            <div>
                {this.state.loading || !this.state.person ? (
                <div>Loading...</div>
                ) : (
                    <div>
                        <div>{this.state.person.name.title}</div>
                        <div>{this.state.person.name.first}</div>
                        <div>{this.state.person.name.last}</div>
                        <img src={this.state.person.picture.large} />
                    </div>
                )}
            </div>
        )*/
    }
}