import React from 'react';
import { addCharacter } from '../got-api.js';
import './admin.css';

class Admin extends React.Component {
    state = {
        name: '',
        image_url: '',
        number_of_kids: 0,
        killed_off: false,
        house: '',
        description:''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await addCharacter({
            name: this.state.name,
            image_url: this.state.image_url,
            number_of_kids: this.state.number_of_kids,
            killed_off: this.state.killed_off,
            house: this.state.house,
            description: this.state.description
        });

        this.setState({
            name: '',
            image_url: '',
            number_of_kids: 0,
            killed_off: false,
            house: '',
            description:''
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
        this.setState({ house: e.target.value });
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
                            <option value='Arryn'>Arryn</option>
                            <option value='Baratheon'>Baratheon</option>
                            <option value='Bronn'>Bronn</option>
                            <option value='Greyjoy'>Greyjoy</option>
                            <option value='Lannister'>Lannister</option>
                            <option value='Martell'>Martell</option>
                            <option value='Stark'>Stark</option>
                            <option value='Targaryen'>Targaryen</option>
                            <option value='Tully'>Tully</option>
                            <option value='Tyrell'>Tyrell</option>
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