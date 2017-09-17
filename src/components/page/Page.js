import React from 'react';
import LotteryList from '../LotteryList/LotteryList';
import ButtonAppBar from '../ButtonAppBar/ButtonAppBar';
import AlertDialog from '../AlertDialog/AlertDialog';
import './Page.scss';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'max': 100
    };
    this.handleChangeMax = this.handleChangeMax.bind(this);
  }

  handleChangeMax(max) {
    this.setState({
      'max':max
    });
  }

  render() {
    return (
      <div>
        <ButtonAppBar className='app-bar' handler={this.handleChangeMax}/>
        <LotteryList max={this.state.max}/>
      </div>
    );
  }
}
