import React, {Component} from "react";
import Article from "./Article";
import PropTypes from "prop-types";
import accordion from "../decorators/accordion";

class ArticleList extends Component {
    render() {
        const {isOpenArticleId, toggleArticle} = this.props;
        const elements = this.props.articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={isOpenArticleId}
                         toggleOpen={toggleArticle(article.id)}/>
            </li>);
        return (
            <ul>
                {elements}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    //from accordion decorator
    isOpenArticleId: PropTypes.bool,
    toggleArticle: PropTypes.func
};

export default accordion(ArticleList);