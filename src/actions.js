import uuid from 'uuid';

//     add comment

export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text: text
    }
}

//     edit comment

export const EDIT_COMMENT = 'EDIT_COMMENT';

export function editComment(commentId, editedText) {
    return {
        type: EDIT_COMMENT,
        id: commentId,
        text: editedText
    }
}

//     remove comment

export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export function removeComment(commentId) {
    return {
        type: REMOVE_COMMENT,
        id: commentId
    }
}


//     vote up comment

export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

export function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
    }
}


//     vote down comment

export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function thumbDownComment(commentId) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: commentId
    }
}