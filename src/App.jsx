import React, {useState} from 'react';
import './index.css';

const bankOne = ['Heater Kit', {
    'Q': {
      name: 'Heater 1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    'W': {
      name: 'Heater 2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    'E': {
      name: 'Heater 3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    'A': {
      name: 'Heater 4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    'S': {
        name: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      },
    'D': {
        name: 'Open HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      },
    'Z': {
        name: "Kick n' Hat" ,
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      },
    'X': {
        name: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      },
    'C': {
        name: 'Closed HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      }}]
  
const bankTwo = ['Smooth Piano Kit', {
    'Q': {
      name: 'Chord 1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    'W': {
      name: 'Chord 2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    },
    'E': {
      name: 'Chord 3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
    },
    'A': {
      name: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    },
    'S': {
        name: 'Open HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
      },
    'D': {
        name: 'Closed HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
      },
    'Z': {
        name: 'Punchy Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
      },
    'X': {
        name: 'Side Stick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
      },
    'C': {
        name: 'Snare',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
      }}]
var count = 1;
function App() {
  const [bank, setBank] = useState(bankOne);
  const [name, setName] = useState('');
  const [pow, setPow] = useState(false);
  function changeBank() {
   if(bank === bankOne) {
     setBank(bankTwo);
     setName(bankTwo[0]);
   } else {
     setBank(bankOne);
     setName(bankOne[0]);
   }
  }
  function printButton(e) {
    setName(bank[1][e.target.id].name);
    document.getElementById(e.target.id).children[0].play();
  }
  
  function power() {
    if(count === 1) {
      setPow(true);
      count = 0;
    } else {
      count++;  
      setPow(false);
    }
    
  }

  return (
    <div className="App" id="drum-machine">
      <div id="drum-pad">
        <button className="drum-pad" id="Q" onClick={printButton} disabled={pow}><audio className="clip" src={bank[1]['Q'].url} />Q</button>
        <button className="drum-pad" id="W" onClick={printButton} disabled={pow}><audio className="clip" src={bank[1]['W'].url} />W</button>
        <button className="drum-pad" id="E" onClick={printButton} disabled={pow}><audio className="clip" src={bank[1]['E'].url} />E</button>
        <button className="drum-pad" id="A" onClick={printButton} disabled={pow}><audio className="clip" src={bank[1]['A'].url} />A</button>
        <button className="drum-pad" id="S" onClick={printButton} disabled={pow}><audio className="clip" src={bank[1]['S'].url} />S</button>
        <button className="drum-pad" id="D" onClick={printButton} disabled={pow}><audio className="clip" src={bank[1]['D'].url} />D</button>
        <button className="drum-pad" id="Z" onClick={printButton} disabled={pow}><audio className="clip" src={bank[1]['Z'].url} />Z</button>
        <button className="drum-pad" id="X" onClick={printButton} disabled={pow}><audio className="clip" src={bank[1]['X'].url} />X</button>
        <button className="drum-pad" id="C" onClick={printButton} disabled={pow}><audio className="clip" src={bank[1]['C'].url} />C</button>
      </div>
      <div id="display">
        <p>{name}</p>
        <div id="btn">
          <button id="turn-off" onClick={power}>Power</button>
          <button id="switch" onClick={changeBank} disabled={pow}>Switch</button>
        </div>
      </div>
    </div>
  );
}

export default App;
