import React from 'react'

const MoveHistory = ({ history }) => {
  return (
    <div style={{margin: '10px',}}>
      <div style={{display: 'grid', width: '150px', textAlign: 'left', borderBottom: '1px solid black'}}>
        <div style={{gridColumnStart: '1'}}>Player</div>
        <div style={{gridColumnStart: '2'}}>Move</div>
        <div style={{gridColumnStart: '3'}}>Time</div>
      </div>
      {history.filter(move => move.move).map((move) => {
        const position = `${move.move[0]}, ${move.move[1]}`
        return (
          <div key={position} style={{display: 'grid', width: '150px', textAlign: 'left', backgroundColor: move.player === 'white' ? '#fff' : '#f0f0f0',}}>
            <div style={{gridColumnStart: '1'}}>{move.player}</div>
            <div style={{gridColumnStart: '2'}}>{position}</div>
            <div style={{gridColumnStart: '3'}}>{Math.round(move.time * 10)/10}</div>
          </div>
        )
      })}
    </div>
  )
}

export default MoveHistory
