import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };
    }

    componentDidMount() {
        this.props.searchDecks(str)
    }

    update(field) {
        return e =>
            this.setState({ [field]: e.currentTarget.value })
    }

    render () {

    return (
        <input
            type="text"
            value={this.state.query}
            onChange={this.update('query')}>Search</input>
    );
}
}

export default Search;