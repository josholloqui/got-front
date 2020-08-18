import React from 'react';
import { fetchCharacter, deleteCharacter, updateCharacter, fetchHouses } from '../got-api.js';

class Details extends React.Component {
    state = {
        character: {},
        name: '',
        image_url: '',
        number_of_kids: 0,
        killed_off: false,
        description: '',
        house_id: 1,
        houses: []
    }

    componentDidMount = async () => {
        const characterData = await fetchCharacter(this.props.match.params.id);

        const houseData = await fetchHouses();

        const matchingHouses = houseData.body.find(house => house.house === characterData.body.house)

        this.setState({
            character: characterData.body,
            houses: houseData.body,
            name: characterData.body.name,
            image_url: characterData.body.image_url,
            number_of_kids: characterData.body.number_of_kids,
            killed_off: characterData.body.killed_off,
            description: characterData.body.description,
            house_id: matchingHouses.id,
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await updateCharacter(
            this.props.match.params.id, 
            {
                name: this.state.name,
                image_url: this.state.image_url,
                number_of_kids: this.state.number_of_kids,
                killed_off: this.state.killed_off,
                description: this.state.description,
                house_id: this.state.house_id
        });

        const updatedCharacter = await fetchCharacter(this.props.match.params.id);

        this.setState({
            name: this.state.name,
            image_url: this.state.image_url,
            number_of_kids: this.state.number_of_kids,
            killed_off: this.state.killed_off,
            description: this.state.description,
            house_id: this.state.house_id,
            character: updatedCharacter.body
        });
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleImageChange = e => {
        this.setState({ image_url: e.target.value });
    }

    handleKidsChange = e => {
        this.setState({ number_of_kids: Number(e.target.value) });
    }

    handleKilledChange = e => {
        this.setState({ killed_off: true });
    }

    handleHouseChange = e => {
        this.setState({ house_id: e.target.value });
    }

    handleDescriptionChange = e => {
        this.setState({ description: e.target.value });
    }

    handleDelete = async () => {
        await deleteCharacter(this.props.match.params.id);

        this.props.history.push('/');
    }

    render() { 
        return (
            <main>
                <h2>{this.state.character.name}</h2>
                <img alt={this.state.character.image_url} src={this.state.character.image_url} />
                <p>House {this.state.character.house}</p>
                <p>Number of Kids: {this.state.character.number_of_kids} - Killed Off: {this.state.character.killed_off ? 'Yes' : 'No'}</p>
                <p>{this.state.character.description}</p>
                <h2>Add Character</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input onChange={this.handleNameChange} value={this.state.name} placeholder='Enter Character Name...' required />
                    </label>
                    <label>
                        Image URL:
                        <input onChange={this.handleImgChange} value={this.state.image_url} placeholder='Enter Image URL...' required />
                    </label>
                    <label>
                        House:
                        <select onChange={this.handleHouseChange} >
                            {
                                this.state.houses.map((house) => <option value={house.id}>{house.house}</option>)
                            }
                        </select>
                    </label>
                    <label>
                        Number of Kids:
                        <input onChange={this.handleKidsChange} type='number' value={this.state.number_of_kids} placeholder='Enter Number of Kids...' required />
                    </label>
                    <label>
                        Was the Character Killed Off?
                        <input type='checkbox' onChange={this.handleKilledChange} name='killed' value='true' />
                        <span>Yes</span>
                    </label>
                    <label>
                        Description:
                        <input onChange={this.handleDescriptionChange} value={this.state.description} placeholder='Enter Description...' required />
                    </label>
                    <button>Update Character</button>
                </form>
                <button onClick={this.handleDelete}>Delete Character</button>
            </main>
        );
    }
}
 
export default Details;