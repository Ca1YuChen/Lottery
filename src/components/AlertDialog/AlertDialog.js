import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import './AlertDialog.scss';

export default class AlertDialog extends React.Component {
  state = {
    open: false,
    max: 100
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleRequestShow= () => {
    this.setState({ open: true });
  };

  handleInput= () => {
      this.props.handler(this.state.max);
      this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    // this.props.handler(event.target.value);
  };

  render() {
    return (
      <div className='setting-dialog'>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>{"你可以在这里设置抽奖的最大编号"}</DialogTitle>
          <DialogContent>
          <TextField
            ref='text'
            id="max-number"
            label="最大编号"
            placeholder="100"
            autoComplete="current-password"
            margin="normal"
            onChange={this.handleChange('max')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleInput} color="primary">
              确定
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              取消
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}