import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/no-profile.png';
import Kota from '../assets/img/kota.png';


const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'Chat__row' : 'Chat__reverse';
  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Kota} />
        ) : (
          <Avatar alt="icon" src={NoProfile} />
        )}
      </ListItemAvatar>
      <div className="Chat__bubble">{props.text}</div>
    </ListItem>
  )
}

export default Chat