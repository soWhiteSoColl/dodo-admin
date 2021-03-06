import React from 'react'
import Popconfirm from 'antd/lib/popconfirm'
import Icon from 'antd/lib/icon'

export default class ConfirmDelete extends React.Component {
  render() {
    return (
      <Popconfirm title={'想好要删除了么?'} onConfirm={this.props.onConfirm} okText="想好了" cancelText="算了">
        <Icon className="action" type="delete" />
      </Popconfirm>
    )
  }
}
