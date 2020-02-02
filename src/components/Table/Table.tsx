import React, { SyntheticEvent } from "react";
import { Table } from 'antd';
import { SortOrder } from "antd/lib/table";
import { Resizable, ResizableProps } from 'react-resizable';
import "./main.css";

interface handleResizeArgs {
  size: any
}

const ResizeableTitle = (props: ResizableProps) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

const rowSelection = {
  getCheckboxProps: (record: any) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

class Demo extends React.Component<{}, { columns: any }> {
  state = {
    columns: [
      {
        title: 'Date',
        dataIndex: 'date',
        width: 100,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
        sorter: (a: any, b: any) => a.amount - b.amount,
        sortDirections: ['descend', 'ascend'] as SortOrder[],
      },
      {
        title: 'Type',
        dataIndex: 'type',
        width: 100,
      },
    ],
  };

  components = {
    header: {
      cell: ResizeableTitle,
    },
  };

  data = [
    {
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'income',
    },
    {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'income',
    },
    {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'income',
    },
  ];

  handleResize = (index: number) => (e: SyntheticEvent, args: handleResizeArgs) => {
    this.setState(({ columns }) => {
      console.log("index: ", index, "args: ", args);
      
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: args.size.width,
      };
      return { columns: nextColumns };
    });
  };

  render() {
    const columns = this.state.columns.map((col, index) => {
      return ({
      ...col,
      onHeaderCell: (column: any) => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    })}
    );

    return <Table rowSelection={rowSelection} bordered components={this.components} columns={columns} dataSource={this.data} />;
  }
}

export default Demo;
