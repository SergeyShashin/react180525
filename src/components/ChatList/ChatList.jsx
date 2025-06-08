import './ChatList.scss';
import React, { Component } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export class ChatList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chatList">
        <List>
          <NavLink to="/chats/1/">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2025" />
            </ListItem>
          </NavLink>
          <NavLink to="/chats/2/">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2025" />
            </ListItem>
          </NavLink>
          <NavLink to="/chats/3/">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BeachAccessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2025" />
            </ListItem>
          </NavLink>
        </List>
      </div>
    )
  }
}