import React from 'react';
import { Link } from 'react-router-dom';

class ListItem extends React.Component {
    render() { 
        return (
            <main>
                <h2>The Characters</h2>
                <ul>
                    {
                        this.props.characters.map((character) => {
                            return <Link to={`/details/${character.id}`}>
                                <li>
                                    <img alt={character.image_url} src={character.image_url} />
                                    <h3>{character.name}</h3>
                                </li>
                            </Link>
                        })
                    }
                </ul>
            </main>
        );
    }
}
 
export default ListItem;