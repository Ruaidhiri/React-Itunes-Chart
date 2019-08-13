import React from 'react';

const SongListItem = (props) => {
  return (
    <div>
      <h1>{props.index}</h1>
      <p>{props.song.title.label}</p>
      <img src={props.image} alt="The cover photo"/>
    </div>
  )
}

export default SongListItem;
