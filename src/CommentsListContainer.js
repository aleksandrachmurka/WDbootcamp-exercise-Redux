import {connect} from 'react-redux';
import CommentsList from './CommentsList'

const mapStatetoProps = state => ({
	comments: state.comments
});

export default connect(mapStatetoProps)(CommentsList);