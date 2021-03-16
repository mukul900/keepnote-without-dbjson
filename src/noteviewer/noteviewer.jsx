import React from 'react'
import CardDesk from 'react-bootstrap/CardDeck'
import NoteCard from '../noteCard/noteCard'
class NoteViewer extends React.Component{
    constructor(props){
        super(props);

    }
    render()
    {
        const notesDetails = this.props.notes.map((item) =>
        <NoteCard key={item.noteId} note={item}></NoteCard>
    );
      return(
            <div>
                <h1>list of avilable cards</h1>
                <CardDesk>{notesDetails}</CardDesk>
            </div>        
        )
    }
}
export default NoteViewer