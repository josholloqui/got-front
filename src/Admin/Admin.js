import React from 'react';
import { addCharacter, fetchHouses } from '../got-api.js';
import './admin.css';

class Admin extends React.Component {
    state = {
        name: '',
        image_url: '',
        number_of_kids: 0,
        killed_off: false,
        description: '',
        house_id: 1,
        houses: []
    }

    componentDidMount = async () => {
        const houseData = await fetchHouses();

        this.setState({
            houses: houseData.body
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await addCharacter({
            name: this.state.name,
            image_url: this.state.image_url,
            number_of_kids: this.state.number_of_kids,
            killed_off: this.state.killed_off,
            description: this.state.description,
            house_id: this.state.house_id
        });

        this.setState({
            name: '',
            image_url: '',
            number_of_kids: 0,
            killed_off: false,
            description:'',
            house_id: 1
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

    render() { 
        return (
            <main>
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
                    </label>
                    <label>
                        Description:
                        <input onChange={this.handleDescriptionChange} value={this.state.description} placeholder='Enter Description...' required />
                    </label>
                    <button>Add Character</button>
                </form>
            </main>
        );
    }
}
 
export default Admin;