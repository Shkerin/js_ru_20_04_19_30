import React, {Component} from 'react';
import CommentList from "./CommentList";

export default class Article extends Component {
    state = {
        isOpen: false
    };

    render() {
        const {article} = this.props;
        return (
            <section>
                <h2 onClick={this.toggleOpen}>{article.title}</h2>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        return this.state.isOpen &&
            <div>
                {this.props.article.text}
                {this.getComment()}
            </div>;
    }

    getComment() {
        return <div><CommentList comments={this.props.article.comments}/></div>
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}