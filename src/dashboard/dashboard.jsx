import React from 'react'
import NoteTaker from '../notetaker/notetaker';
import NoteViewer from '../noteviewer/noteviewer';
class Dashboard extends React.Component{
    constructor()
    {
        super();
        this.state={
            noteList:[]
        }
        this.saveNotes=this.saveNotes.bind(this)
    }
    saveNotes(data){
        let noteList=this.state.noteList;
        data.noteId=noteList.length+1;
        noteList.push(data);
        this.setState({
            noteList
        })
        console.log(this.state.noteList);
    }
    render(){
        return(
            <div>
               <NoteTaker saveNotes={this.saveNotes}></NoteTaker>
               <NoteViewer notes={this.state.noteList}></NoteViewer>
            </div>
        )
    }
}
export default Dashboard