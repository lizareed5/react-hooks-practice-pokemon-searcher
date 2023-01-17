import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleSubmit}) {
  
  const [nameInput, setNameInput] = useState("")
  const [hpInput, setHpInput] = useState("")
  const [frontSpriteInput, setFrontSpriteInput] = useState("")
  const [backSpriteInput, setbackSpriteInput] = useState("")
  
  const handleNameInput = (e) => {
    setNameInput(e.target.value)
  }

  const handleHpInput = (e) => {
    setHpInput(e.target.value)
  }

  const handleFrontSpriteInput = (e) => {
    setFrontSpriteInput(e.target.value)
  }

  const handleBackSpriteInput = (e) => {
    setbackSpriteInput(e.target.value)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        // onSubmit={(e) => {handleSubmit(e)}}
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={nameInput}
            onChange={handleNameInput}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={hpInput} 
            onChange={handleHpInput}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontSpriteInput}
            onChange={handleFrontSpriteInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backSpriteInput}
            onChange={handleBackSpriteInput}

          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
