import React from 'react';
import Slider from 'react-slick';
import Button from 'material-ui/Button';
import SimpleMediaCard from '../LotteryItem/SimpleMediaCard'
import 'typeface-roboto';
import './LotteryList.scss';

export default class CenterMode extends React.Component {

  constructor(props) {
    super(props)
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.index = 1;
    this.state={
      list:[1,2,3,4,5,6,7,8,9,10],
      max: this.props.max
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    let me = this;
    let promise = new Promise((resolve,reject)=>{
      resolve();
    });
    promise.then(()=>{
      me.slider.slickNext();
    });
  }
  previous() {
    let me = this;
    let promise = new Promise((resolve,reject)=>{
      resolve();
    });
    promise.then(()=>{
      me.slider.slickPrev();
    });
  }

  render() {
    const settings = {
      className: 'center',
      centerMode: false,
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
        <Slider ref={c => this.slider = c } {...settings}>
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
        </Slider>
        <div className='button-container'>
          <Button className='left-button' raised color='primary' onClick={this.previous}>Previous</Button>
          <Button className='right-button' raised color='accent' onClick={this.next}>Next</Button>
        </div>
      </div>
    );
  }
}
