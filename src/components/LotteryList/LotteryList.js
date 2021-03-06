import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import Button from 'material-ui/Button';
import SimpleMediaCard from '../LotteryItem/SimpleMediaCard'
import 'typeface-roboto';
import './LotteryList.css';
import logo from '../../img/logo.jpg';

export default class CenterMode extends React.Component {

  constructor(props) {
    super(props)
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.index = 1;
    this.state={
      list:[1,2,3,4,5,6,7,8,9,10],
      max: this.props.max,
      start: this.props.start,
      reset: this.props.reset
    }
    console.log('Hi');
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.callback = this.callback.bind(this);
  }
  next() {
    let start = false;
    let reset = true;
    this.setState({
      start,
      reset
    });
  }
  previous() {
    let start = true;
    let reset = false;
    this.setState({
      start,
      reset
    });
  }

  callback() {
    let start = false;
    let reset = false;
    this.setState({
      start,
      reset
    });
  }

  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: false,
      centerPadding: '0px',
      slidesToShow: 5,
      slidesToScroll: 5,
      speed: 750,
      adaptiveHeight: true
    };
    let state = this.state;
    let props = this.props;
    return (
      <div className='list-container'>
        <div className='card'>
          <SimpleMediaCard 
            ref='card' cardID={1} desc={state.list[0]} type={1} max={props.max}
            start={this.state.start}
            reset={this.state.reset}
            callback={this.callback}
            />
          </div>
        {/* <Slider ref={c => this.slider = c } {...settings}>
          <div className='card'><SimpleMediaCard ref='c1' cardID={1} desc={state.list[0]} type={1} max={props.max}/></div>
          <div className='card'><SimpleMediaCard ref='c2' cardID={2} desc={state.list[1]} type={1} max={props.max}/></div>
          <div className='card'><SimpleMediaCard ref='c3' cardID={3} desc={state.list[2]} type={1} max={props.max}/></div>
          <div className='card'><SimpleMediaCard ref='c4' cardID={4} desc={state.list[3]} type={1} max={props.max}/></div>
          <div className='card'><SimpleMediaCard ref='c5' cardID={5} desc={state.list[4]} type={1} max={props.max}/></div>
          <div className='card'><SimpleMediaCard ref='c6' cardID={6} desc={state.list[5]} type={2} max={props.max}/></div>
          <div className='card'><SimpleMediaCard ref='c7' cardID={7} desc={state.list[6]} type={2} max={props.max}/></div>
          <div className='card'><SimpleMediaCard ref='c8' cardID={8} desc={state.list[7]} type={2} max={props.max}/></div>
          <div className='card'><SimpleMediaCard ref='c9' cardID={9} desc={state.list[8]} type={2} max={props.max}/></div>
          <div className='card'><SimpleMediaCard ref='c10' cardID={10} desc={state.list[9]} type={2} max={props.max}/></div>
        </Slider> */}
        <div className='button-container'>
          <Button className='left-button' raised color='primary' onClick={this.previous}>开始</Button>
          <Button className='right-button' raised color='accent' onClick={this.next}>重置</Button>
        </div>
        <div className='logo-container'>
          <div className='logo'>
            <img src={logo}/>
          </div>
        </div>
      </div>
    );
  }
}
