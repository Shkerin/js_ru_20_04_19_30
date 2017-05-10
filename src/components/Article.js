import React, {Component} from 'react';
import CommentList from "./CommentList";
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {
    static propTypes = {
        articles: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }),
        //form toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    componentWillMount() {
        console.log('---', 'mounting');
    }

    componentDidMount() {
        console.log('----', 'mounted');
    }

    render() {
        const {article, toggleOpen} = this.props;
        return (
            <section>
                <h2 onClick={toggleOpen}>
                    {article.title}</h2>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        return this.props.isOpen &&
            <div>
                {this.props.article.text}
                {this.getComment()}
            </div>
    }

    getComment() {
        return <div><CommentList comments={this.props.article.comments}/></div>
    }
}

export default toggleOpen(Article)