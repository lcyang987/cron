import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

const SingleTable = ({ rowkey, className, scroll, rowSelection, columns, table, loading, size, bordered, showHeader }) => (
  <React.Fragment>
    {
      table && table.size ?
        <Table
          rowKey={rowkey || 'id'}
          className={className ? className : scroll ? 'tablexscroll' : undefined}
          scroll={scroll || undefined}
          rowSelection={rowSelection ? rowSelection : undefined}
          columns={columns}
          dataSource={table.toJS()}
          loading={loading}
          size={size}
          defaultExpandAllRows={true}
          pagination={false}
          showHeader={showHeader}
          bordered={bordered}
        /> :
        <div><Table columns={columns} size="middle" locale={{ emptyText: (table && !table.size) && !loading ? '数据为空' : '正在加载' }} /></div>
    }
  </React.Fragment>
);

SingleTable.propTypes = {
  columns: PropTypes.array.isRequired,
  table: ImmutablePropTypes.list.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SingleTable;
