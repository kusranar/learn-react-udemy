import React from 'react';
import { connect } from 'react-redux'
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        console.log(this.props)
        return this.props.songs.map((song, i) => (
            <div className="item" key={i}>
                <div className="right floated content">
                    <button
                        className="ui button primary"
                        onClick={() => this.props.selectSong(song)}
                    >
                        SELECT
                    </button>
                </div>
                <div className="content">
                    {song.title}
                </div>
            </div>
        ))
    }

    render() {
        return (
            <div className="ui devider list">
                {this.renderList()}
            </div>
        )
    }
}

// essentially all of the data thats inside of our redux store and were going to make some computation that going to cause that data to eventually show up as props inside of our component
// you can call name it name of function anything we want
// function is going to be called with all of the state inside of a redux store
// state right here all of that data inside of a redux store
const mapStateToProps = state => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList); 