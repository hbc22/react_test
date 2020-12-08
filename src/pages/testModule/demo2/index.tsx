import React from 'react'
// var dragula = require('react-dragula');
import {dragula} from "react-dragula"

class SubCounter extends React.Component {
    constructor(props) {
        super(props);
       console.log('sonsonson', props)
    }
    componentWillReceiveProps() {
        console.log('9、子组件将要接收到新属性');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('111', newProps)
        console.log('222', newState)
        console.log('10、子组件是否需要更新');
        if (newProps.number < 5) return true;
        return false
    }

    componentWillUpdate() {
        console.log('11、子组件将要更新');
    }

    componentDidUpdate() {
        console.log('13、子组件更新完成');
    }

    componentWillUnmount() {
        console.log('14、子组件将卸载');
    }

    render() {
        console.log('12、子组件挂载中');
        return (
            <p>{this.props.number}</p>
        )
    }

}

class SubCounterA extends React.Component {
    static defaultProps = {
        //1、加载默认属性
        name: 'sls',
        age:23
    };
    constructor(props) {
        super(props);
        //2、加载默认状态
        this.state = {number: 1}
    }

    componentWillMount() {
        console.log('3、父组件挂载之前');
    }

    componentDidMount() {
        console.log('5、父组件挂载完成');
        // let container = document.getElementById('container');
        // var container = React.findDOMNode(this);
        // dragula([container]);
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('11', newProps)
        console.log('22', newState)
        console.log('6、父组件是否需要更新');
        if (newState.number<15) return true;
        return false
    }

    componentWillUpdate() {
        console.log('7、父组件将要更新');
    }

    componentDidUpdate() {
        console.log('8、父组件更新完成');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    };
    render() {
        console.log('4、render(父组件挂载)');
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
                {this.state.number<10?<SubCounter number={this.state.number}/>:null}


                <div style={{height: 400, width: 400, margin: 50}}>
                    <div id='container'>
                    <div>Swap me around</div>
                    <div>Swap her around</div>
                    <div>Swap him around</div>
                    <div>Swap them around</div>
                    <div>Swap us around</div>
                    <div>Swap things around</div>
                    <div>Swap everything around</div>
                    </div>
                </div>
            </div>
        )
    }
}


  export default SubCounterA;