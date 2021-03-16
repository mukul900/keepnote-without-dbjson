import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { PropTypes } from 'react'
class NoteTaker extends React.Component{
    constructor()
    {
        super();
        this.state={
            noteTitle:"",
            noteDesc:""
        };
      
        this.handleOnChange=this.handleOnChange.bind(this);
        this.handleOnClick=this.handleOnClick.bind(this);
    }
    handleOnChange(event)
    {
        event.preventDefault();
        
        if(event.target.id =="txtText")
        {
            this.setState({
                  noteTitle:event.target.value
            })
        } 
        else{
            this.setState({
                noteDesc:event.target.value
            })
        }
          
    }
    
    handleOnClick(event) {
        event.preventDefault()
  
       this.props.saveNotes(this.state);
        this.setState({
            noteTitle:"",
            noteDesc:""
        })
    }
    render()
    {
        return(
            <Form>
                <Form.Group>
                    <Form.Label>Enter note Title</Form.Label>
                    <Form.Control id="txtText"  type="text" value={this.state.noteTitle} placeholder="Note Title" onChange={this.handleOnChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Note Text</Form.Label>
                    <Form.Control id="txtDescription" type="text" value={this.state.noteDesc} placeholder="Note Text" onChange={this.handleOnChange}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.handleOnClick}>
                    Submit
                 </Button>
            </Form>
        )
    }
}
export default NoteTaker