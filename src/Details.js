import React from 'react';
import { fetchCharacter } from './got-api.js';

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
            </main>
        );
    }
}
 
export default Details;