import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './SimpleMediaCard.css';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

class SimpleMediaCard extends React.Component {
    constructor(props) {
        super(props);
        this.classes = props.classes;
        this.state = {
            count: this.props.max,
            id: this.props.cardID,
            luckyNum: '?',
            desc0: this.props.desc,
            desc1: '开始',
            desc2: '重置',
            status: 0,
            cardClass:'card-id'
        }
        this.timer = null;
        // this.start = this.start.bind(this);
        // this.reset = this.reset.bind(this);
        this.prepare = this.prepare.bind(this);
    }

    prepare() {
        this.setState({
            'fesc0': 0,
            'cardClass': 'card-id status-2'
        })
    }

    start() {
        if(!this.timer){
            this.timer = setInterval(
                ()=>{
                    let max = this.props.max;
                    let luckyNum = parseInt(Math.ceil(Math.random() * max), 10);
                    this.setState({
                        luckyNum
                    });
                },
                250
            )
            setTimeout(
                ()=>{
                    window.clearInterval(this.timer);
                    this.timer = null;
                },
                3000
            )
        }
    }
    reset() {
        if(this.state.luckyNum !== '?'){
            window.clearInterval(this.timer);
            this.timer = null;
            let luckyNum = '?';
            let cardClass;
            if (this.props.type === 1) {
                cardClass = 'card-id status-2';
            }
            if (this.props.type === 2) {
                cardClass = 'card-id status-1';
            }
            this.setState({
                luckyNum,
                cardClass
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.start) {
            this.start();
            this.props.callback();
        }
        if (nextProps.reset) {
            this.reset();
            this.props.callback();
        }
    }

    render() {
        let state = this.state;
        let props = this.props;
        let desc = props.desc;
        let type = props.type;
        let id = state.id;
        let cardClass = this.state.cardClass;
        let luckyNum = state.luckyNum;
        if (type === 1 && luckyNum !== '?') {
            cardClass = 'card-id status-1';
        }
        if (type === 2 && luckyNum !== '?') {
            cardClass = 'card-id status-2';
        }
        return (
        <div className='simple-card'>
        <Card className={this.classes.card}>
            <CardMedia className={cardClass}>
                <div>{desc}</div>
            </CardMedia>
            <CardContent className='content-container'>
            <Typography className='no-character'>
                No.
            </Typography>
            <Typography className='number'>
                {this.state.luckyNum}
            </Typography>
            </CardContent>
            {/* <CardActions className='card-button-container'>
            <Button onClick={this.start} className='begin-button'>
                {this.state.desc1}
            </Button>
            <Button dense color="default" onClick={this.reset} className='reset-button'>
                {this.state.desc2}
            </Button>
            </CardActions> */}
        </Card>
        </div>
    );
}
}

export default withStyles(styles)(SimpleMediaCard);