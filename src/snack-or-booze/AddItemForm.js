import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Menu.css'

// Define the AddItemForm component with addItem prop for adding new items
function AddItemForm({ addItem }) {
  //utiizes history hook for navigation
  const history = useHistory();
  // Initialize form state with default values for each field
  const [formData, setFormData] = useState({
    type: 'snacks', //sets default type to snacks
    name: '',
    description: '',
    recipe: '',
    serve: '',
  });

  // Handle form field changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value, // Update the changed field value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the selected type with the form data
    addItem(formData, formData.type);
    history.push('/');
  };

  // Render the form
  return (
    <Form onSubmit={handleSubmit} className="inner-border" style={{ margin: '20px', padding: '20px' }}>
      //Form field for Item Type: Snack or Drink
      <FormGroup>
        <Label for="type">Type</Label>
        <Input type="select" name="type" id="type" value={formData.type} onChange={handleChange} className="list-group-item">
          <option value="snacks">Snacks</option>
          <option value="drinks">Drinks</option>
        </Input>
      </FormGroup>
       {/* Input fields for name, description, recipe, and serve with labels */}
      <FormGroup className="list-group-item">
        <Label for="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup className="list-group-item">
        <Label for="description">Description</Label>
        <Input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="list-group-item">
        <Label for="recipe">Recipe</Label>
        <Input
          id="recipe"
          name="recipe"
          value={formData.recipe}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="list-group-item">
        <Label for="serve">Serve</Label>
        <Input
          id="serve"
          name="serve"
          value={formData.serve}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit" className="list-group-item">Add Item</Button>
    </Form>
  );
}

export default AddItemForm;
