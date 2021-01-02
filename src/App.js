import React, {Component} from 'react';
import './App.css';
import * as Tone from 'tone';
import ScriptTag from 'react-script-tag';
import AceEditor from 'react-ace';
import { Player, Buffer } from 'tone';


class App extends Component {
  constructor(props) {
     super(props);
     this.go = this.go.bind(this);

   }

play(){
console.log('d');}

go() {
  Tone.context.latencyHint = 'fastest';
  Tone.Transport.bpm.value = 130;
  var editor = editor.edit('editor');
  var seq = new Tone.Sequence(function(time, note){
  console.log(note);
     //subdivisions are given as subarrays
     }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]);
        Tone.Transport.start('+0.2');
        seq.start();
}

render() {
var vol = new Tone.Volume(-12).toMaster();

    var p1 = new Player({
     "hihat": 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/hh.mp3'
    }, function()
    {
     //console.log('loaded');
    });

    p1.get('hihat');
    p1.autostart = true;




  return (

    <div className="App">

    <button className='go' onClick={this.go}>play</button>

    <div className='editor' id="editor"></div>



    <AceEditor

                    mode="javascript"
                    theme='monokai'
                    fontSize={20}
                    onChange={this.onChange}
                    name="editor"
                    editorProps={{
                        $blockScrolling: true
                    }}
                    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true
    }}



    value={`
    if ([0,4,8,12].indexOf(idx) >= 0)
       p1.get('kick').start();

    if ([2,6,10,14].indexOf(idx) >= 0)
             p1.get('snare').start();
`}
                />





</div>
  );
}
}

export default App;
