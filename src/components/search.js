import React from 'react';
import People from '../People'


export class SearchBox extends React.Component {
    state = { "filteredpeople": [] };

    constructor() {
        super()
        this.update = this.update.bind(this);
    }

    update(e) {
        if(e.target.value == ""){
           this.setState({filteredpeople : []});;
           return;
        }
        this.setState({
            filteredpeople: People.filter(person => {
                return person.first_name.includes(e.target.value) || person.last_name.includes(e.target.value)
            })
        });
        console.log("updated function ran");
        console.log(e.target.value);
        return "updated";
    }



    render() {
        // console.log(People);
        console.log(this.state);
        return (


            <div>
                <input placeholder="Search" type="text" name="inputbox" onChange={this.update} />


                <ul>
                    {this.state.filteredpeople.map(person => {
                        return <li>{person.first_name} {person.last_name}</li>;
                    })
                    }
                </ul>
            </div>
        )
    }
}