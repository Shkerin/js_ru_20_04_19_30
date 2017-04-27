import React, {Component} from 'react';

//должен был тоглиться список, а не каждый коммент
export default class Comment extends Component {
    state = {
        isOpen: false
    };

    render() {
        const {comment} = this.props;
        return (
            <blockquote>
                {this.getUser()}
                {this.getBody()}
            </blockquote>
        )
    }

    getUser() {
        const text = this.state.isOpen ? "open" : "close";
        return <h2 onClick={this.toggleOpen}>{this.props.comment.user} ({text})</h2>
    }

    getBody() {
        return this.state.isOpen &&
            <quotient>
                {this.props.comment.text}
            </quotient>;
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
