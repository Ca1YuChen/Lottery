import React from 'react';
import LotteryList from '../LotteryList/LotteryList';
import ButtonAppBar from '../ButtonAppBar/ButtonAppBar';
import AlertDialog from '../AlertDialog/AlertDialog';
import './Page.css';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'max': 100,
      'start':false,
      'reset':false
    };
    this.handleChangeMax = this.handleChangeMax.bind(this);
  }

  handleChangeMax(max) {
    this.setState({
      'max':max,
      'start':false,
      'reset':false
    });
  }

  render() {
    return (
      <div className='page'>
        <ButtonAppBar className='app-bar' handler={this.handleChangeMax}/>
        <LotteryList max={this.state.max} start={this.state.start} reset={this.state.reset}/>
      </div>
    );
  }
}
