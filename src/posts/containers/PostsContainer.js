import { connect } from 'react-redux'
import Posts from '../components/Posts'
import { actions } from '../actions'
import { getFilteredPosts } from '../selectors'

export const mapStateToProps = (state) => (
  {
    items: getFilteredPosts(state),
    filters: { ...state.posts.filters }
  }
)

export const mapDispatchToProps = (dispatch) => ({
  toggleFieldFilter: (field, choice) => {
    dispatch(actions.toggleFieldFilter(field, choice))
  },
  changeSearchFilter: (search) => {
    dispatch(actions.changeSearchFilter(search))
  },
})

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts)

export default PostsContainer
