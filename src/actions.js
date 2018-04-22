import uuid from uuid;

//     tworzenie komentarza

export const ADD_COMMENT = 'ADD_COMMENT';

{
    type: ADD_COMMENT,
    text: 'My first comment !'
}

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

const boundAddComment = text => dispatch(addComment(text));

boundAddComment('new comment!');

//     edycja komentarza

export const EDIT_COMMENT = 'EDIT_COMMENT';

{
    type: EDIT_COMMENT,
    id: 20,
    text: 'edited comment text'
}

function editComment(id, text) {
	this.comments.find(id => comment.id === commentId);
	this.text = text;
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

const boundEditComment = (id, text) => dispatch(editComment(id, text));

boundEditComment(3, 'edited comment!');

//     usuwanie komentarza

export const REMOVE_COMMENT = 'REMOVE_COMMENT';

{
    type: REMOVE_COMMENT,
    id: 20
}

function removeComment(id) {
	this.comments.filter(id => commet.id !== commentId);
    return {
        type: REMOVE_COMMENT,
        id
    }
}

const boundRemoveComment = id => dispatch(removeComment(id));

boundRemoveComment(3);

//     ocenianie +1 komentarza

export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

{
    type: THUMB_UP_COMMENT,
    id: 20,
    thumbs_up: votes + 1
}

function thumbUpComment(id) {
	this.comments.find(id => comment.id === commentId);
	this.comment.thumbsUp = this.comment.votes + 1
    return {
        type: THUMB_UP_COMMENT,
        id,
        votes
    }
}

const thumbUpComment = id => dispatch(thumbUpComment(id));

thumbUpComment();

//     ocenianie -1 komentarza

export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
    type: THUMB_DOWN_COMMENT,
    id: 20,
    thumbs_up: votes - 1
}

function thumbDownComment(id) {
	this.comments.find(id => comment.id === commentId);
	this.comment.thumbsUp = this.comment.votes - 1
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        votes
    }
}

const thumbDownComment = id => dispatch(thumbDownComment(id));

thumbDownComment();