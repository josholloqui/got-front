import React from 'react';
import { fetchCharacter } from '../got-api.js';

class Details extends React.Component {
    state = {
        character: {}
    }

    componentDidMount = async () => {
        const characterData = await fetchCharacter(this.props.match.params.id);

        this.setState({
            character: characterData.body
        });
    }

    render() { 
        return (
            <main>
                <h2>{this.state.character.name}</h2>
                <img alt={this.state.character.image_url} src={this.state.character.image_url} />
                <p>House {this.state.character.house}</p>
                <p>Number of Kids: {this.state.character.number_of_kids} - Killed Off: {this.state.character.killed_off ? 'Yes' : 'No'}</p>
                <p>{this.state.character.description}</p>
            </main>
        );
    }
}
 
export default Details;