import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const RestaurantForm = (props) => {
    const { restaurant, handleChange, heading, handleSubmit } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3> 
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name of Restaurant:</Form.Label>
                <Form.Control
                    placeholder="Restaurant's name"
                    name="name"
                    id="name"
                    value={restaurant.name}
                    onChange={handleChange}
                />
                <Form.Label>Type of Cuisine:</Form.Label>
                <Form.Select
                    aria-label='type of cuisine'
                    name="type"
                    defaultValue={restaurant.type}
                    onChange={handleChange}
                >
                    <option>Select a type</option>
                    <option value="American">American</option>
                    <option value="Chinese">Chinese</option>
                    <option value="French">French</option>
                    <option value="Italian">Italian</option>
                    <option value="Indian">Indian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                    <option value="Mediterranean">Mediterranean</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Other">Other</option>
                </Form.Select>
                <Form.Label>Address:</Form.Label>
                <Form.Control
                    placeholder="Restaurant's address"
                    name="address"
                    id="address"
                    value={restaurant.address}
                    onChange={handleChange}
                />
                <Form.Label>Telephone:</Form.Label>
                <Form.Control
                    placeholder="Enter a phone number (e.g. 012-345-6789)"
                    name="telephone"
                    id="telephone"
                    value={restaurant.telephone}
                    onChange={handleChange}
                />
                <Form.Check 
                    label="Does this restaurant deliver?"
                    name="delivery"
                    defaultChecked={restaurant.delivery}
                    onChange={handleChange}
                />
                <Form.Check 
                    label="Are you the restaurant owner?"
                    name="isUserRestaurantOwner"
                    defaultChecked={restaurant.isUserRestaurantOwner}
                    onChange={handleChange}
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default RestaurantForm