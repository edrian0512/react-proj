import React, { Component } from 'react'

export class SearchBar extends Component {
    // Old method
    // constructor(props) {
    //     super(props)
    //     this.state = { term: '' }
    //     this.onInputChange = this.onInputChange.bind(this)
    // }

    state = { term: '' }
    // onInputChange = (event) => {
    //     event.preventDefault();
    //     console.log(event.target.value)
    //     console.log(this)
    //     this.setState({ term: event.target.value })
    // }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
        // console.log(this.state.term)
        
    }
    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Search</label>
                        <input value={this.state.term} onChange={(event) => { this.setState({ term: event.target.value }) }} type='text' />

                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar