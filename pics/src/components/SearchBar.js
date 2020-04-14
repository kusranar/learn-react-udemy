import React from 'react';
import Axios from 'axios';

class SearchBar extends React.Component {
    // use this if function in class not use arrow function
    // constructor() {
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }
    state = {
        term: ''
    };

    // onFormSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                {/* <form className="ui form" onSubmit={event => this.onFormSubmit(event)}> */}
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;