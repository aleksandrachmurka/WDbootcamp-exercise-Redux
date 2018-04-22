import {ADD_COMMENT} from './actions.js';
import {REMOVE_COMMENT} from './actions.js';
import {EDIT_COMMENT} from './actions.js';
import {THUMB_UP_COMMENT} from './actions.js';
import {THUMB_DOWN_COMMENT} from './actions.js';

export function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text
                votes: 0
            }
            , ...state.comments];

        case REMOVE_COMMENT:
            return [{
                comments: state.comments.filter(comment => comment.id !== action.id)
            }
            , ...state.comments];

        case EDIT_COMMENT:
            return [{
                comments: state.comments.find(comment => comment.id === action.id);
                comments.text = action.text;
            }
            , ...state.comments];

        case THUMB_UP_COMMENT:
            return [{
                comments: state.comments.find(comment => comment.id === action.id);
                comments.votes += 1;
            }
            , ...state.comments];

        case THUMB_DOWN_COMMENT:
            return [{
                comments: state.comments.find(comment => comment.id === action.id);
                comments.votes += 1;
            }
            , ...state.comments];

        default:
            return state;
    }
}