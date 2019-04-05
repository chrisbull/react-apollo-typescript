import React, { Component, Fragment } from 'react'
import { graphql, compose } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { gql } from 'apollo-boost'

class DetailPage extends Component<any> {
  render() {
    if (this.props.postQuery.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</div>
        </div>
      )
    }

    const { post } = this.props.postQuery

    let action = this._renderAction(post)

    return (
      <Fragment>
        <h1 className='f3 black-80 fw4 lh-solid'>{post.title}</h1>
        <p className='black-80 fw3'>{post.content}</p>
        {action}
      </Fragment>
    )
  }

  _renderAction = ({ id, published }) => {
    if (!published) {
      return (
        <Fragment>
          <a className='f6 dim br1 ba ph3 pv2 mb2 dib black pointer' onClick={() => this.publishPost(id)}>
            Publish
          </a>{' '}
          <a className='f6 dim br1 ba ph3 pv2 mb2 dib black pointer' onClick={() => this.deletePost(id)}>
            Delete
          </a>
        </Fragment>
      )
    }
    return (
      <a className='f6 dim br1 ba ph3 pv2 mb2 dib black pointer' onClick={() => this.deletePost(id)}>
        Delete
      </a>
    )
  }

  deletePost = async id => {
    await this.props.deletePost({
      variables: { id },
    })
    this.props.history.replace('/')
  }

  publishPost = async id => {
    await this.props.publishPost({
      variables: { id },
    })
    this.props.history.replace('/')
  }
}

const POST_QUERY = gql`
  query postQuery($id: ID!) {
    post(id: $id) {
      id
      title
      content
      published
      author {
        name
      }
    }
  }
`

const PUBLISH_MUTATION = gql`
  mutation publishPost($id: ID!) {
    publish(id: $id) {
      id
      published
    }
  }
`

const DELETE_MUTATION = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

export default compose(
  graphql(POST_QUERY, {
    name: 'postQuery',
    options: (props: any) => ({
      variables: {
        id: props.match.params.id,
      },
    }),
  }),
  graphql(PUBLISH_MUTATION, {
    name: 'publishPost',
  }),
  graphql(DELETE_MUTATION, {
    name: 'deletePost',
  }),
  withRouter,
)(DetailPage)
