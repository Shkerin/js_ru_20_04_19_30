// HT1 Создать список комментариев для статьи,
// который можно открывать/закрывать по клику на соответствующую ссылку
// (текст ссылкы должен меняться)

import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    state = {
        isOpen: false
    };

    render() {
        const linkText = this.state.isOpen ? 'hide comments' : 'show comments';

        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{linkText}</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {comments} = this.props;
        if (!comments || !comments.length) return <p>No comments yet</p>;
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        )
    }

    toggleOpen = ev => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}