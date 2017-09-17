import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AlertDialog from '../AlertDialog/AlertDialog';
import './ButtonAppBar.scss';

const styles = theme => ({
  root: {
    marginTop: 0,
    width: '100%'
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.showDialog = this.showDialog.bind(this);
  }

  showDialog() {
    this.refs.dialog.handleRequestShow();
  }
  render() {
  return (
    <div className={this.classes.root}>
      <AppBar position="static" className='app-bar'>
        <Toolbar>
          <div>
            <img />
          </div>
          <Typography type="title" color="inherit" className={this.classes.flex}>
            Title
          </Typography>
          <Button color="contrast" onClick={this.showDialog}>设置</Button>
        </Toolbar>
      </AppBar>
      <AlertDialog ref='dialog' handler={this.props.handler}/>
    </div>
  );
}
}
export default withStyles(styles)(ButtonAppBar);