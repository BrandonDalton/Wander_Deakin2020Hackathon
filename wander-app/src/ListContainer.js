
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ListContainer = props => (
  <List component="nav" aria-label="secondary mailbox folders">
    {props.items.map((item, index) =>
      <ListItem button>
        <ListItemText key={item + index} primary={item} />
      </ListItem>
    )}
  </List>
);

export default ListContainer;