import React, {Component as BasicComponent} from "react";

export default (OriginalComponent) => class DecoratedComponent extends BasicComponent {
    state = {
        openArticleId: null
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state}
                                  isOpenArticleId={false} // TODO застрял на этом месте !!!
                                  toggleArticle={this.toggleArticle}/>
    }

    toggleArticle = id => ev => {
        this.setState({
            openArticleId: id
        })
    }
}