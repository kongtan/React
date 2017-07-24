import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            time: 0
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ time: this.state.time + 1 })
            if (this.state.time == 11) {
                clearInterval(this.timer)
            }
        }, 1000)
    }
    render() {
        const time = this.state.time;
        return (
            <div>
                {
                    this.state.time < 11 ?
                        <Text text='我是文案' time={time} />
                        :
                        null
                }
            </div>
        )
    }
}
class Text extends Component {
    componentWillMount(){
        console.log('即将挂载');
    }
    componentDidMount(){
        console.log('挂载完成');
    }
    componentWillUnmount(){
        console.log('即将移除组件');
    }
    componentWillUpdate(){
        console.log('即将刷新组件状态');
    }
    componentDidUpdate(){
        console.log('完成刷新组件状态');
    }
    render() {
        const props = this.props;
        return (
            <div>
                <p>{props.text}</p>
                <p>{props.time}</p>
            </div>
        )
    }
}

ReactDOM.render(<Header />, document.getElementById('root'));

