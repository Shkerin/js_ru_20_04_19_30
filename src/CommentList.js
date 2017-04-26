// HT1 Создать список комментариев для статьи,
// который можно открывать/закрывать по клику на соответствующую ссылку
// (текст ссылкы должен меняться)

import React from 'react';
import Comment from './Comment';

export default function CommentList({comments}) {
    if (comments === undefined) {
        return <ul></ul>;
    }

    const elements = comments.map(
        comment => <li key={comment.id}><Comment comment={comment}/></li>
    );
    return (
        <ul>
            {elements}
        </ul>
    )
}