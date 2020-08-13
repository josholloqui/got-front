import React from 'react';

class List extends React.Component {
    render() { 
        return (
            <main>
                <h2>The Characters</h2>
                <ul>
                    {
                        this.props.characters.map((character) => {
                            return <li>
                                <h3>{character.name}</h3>
                                <img alt={character.image_url} src={character.image_url} />
                                <p>House {character.house}</p>
                                <p>Number of Kids: {character.number_of_kids} - Killed Off: {character.killed_off ? 'Yes' : 'No'}</p>
                                <p>{character.description}</p>
                            </li>
                        })
                    }
                </ul>
            </main>
        );
    }
}
 
export default List;