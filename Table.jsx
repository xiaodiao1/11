import { Divider, Radio, Table } from 'antd';
import {
  DownOutlined,
  UpOutlined,
  EditOutlined
} from '@ant-design/icons';
import { useState } from 'react';

const Table1 = () => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  const data = 
  [
    {
        "deviceCommandId": 25,
        "deviceId": 7,
        "name": "测试设备指令",
        "description": "",
        "type": 0,
        "sequence": 1
    },
    {
        "deviceCommandId": 27,
        "deviceId": 12,
        "name": "------ANT1--TX",
        "type": 1,
        "sequence": 2
    },
    {
        "deviceCommandId": 28,
        "deviceId": 12,
        "name": "11B-1M-CH13(2471)",
        "type": 1,
        "sequence": 3
    },
    {
        "deviceCommandId": 29,
        "deviceId": 12,
        "name": "11B-11M-CH13(2472)",
        "type": 1,
        "sequence": 4
    }
  ]
  data.map((d,i)=>{
    d["key"]=i;
    console.log(d);
  })
  const [selectionType, setSelectionType] = useState('checkbox');
  const [d,changedata]=useState(data)
  // const [a,b]=useState(data)
  function up(_,target,index){
    // console.log(text);
    // console.log(record);
    console.log(index);
    console.log(data);
    console.log(d);
    if(index==0) return;
    else{
      let data1=[...d];
      var temp=data1[index]
      data1[index]=data1[index-1]
      data1[index-1]=temp
      console.log(data1);
      changedata(data1)
    }
    
    // const initArr = [...data];
    // if (targetItem.sequence === 1) return;
    // const targetSequence = targetItem.sequence - 1;
    // initArr[targetSequence].sequence = targetSequence;
    // initArr[targetSequence - 1].sequence = targetSequence + 1;
    // [initArr[targetSequence], initArr[targetSequence - 1]] = [
    //   initArr[targetSequence - 1],
    //   initArr[targetSequence],
    // ];
    // changedata(initArr);
  }
  function down(_,target,index){
    // console.log(text);
    // console.log(record);
    console.log(index);
    console.log(data);
    console.log(d);
    if(index==3) return;
    else{
      let data1=[...d];
      var temp=data1[index]
      data1[index]=data1[index+1]
      data1[index+1]=temp
      console.log(data1);
      // [data1[index],data1[index]]=[data1[index-1],data1[index]]
      // console.log(data1);
      // return data1
      changedata(data1)
    }
  }
console.log(d);

const columns = [
  {
    title: '执行序号',
    dataIndex: 'sequence',
  },
  {
    title: '命令名称',
    dataIndex: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: '设备名称',
    dataIndex: 'deviceId',
  },
  {
    title: '设备命令',
    dataIndex: 'deviceCommandId',
  },
   {
    title: '类型',
    dataIndex: 'type',
  },
  {
    title: '说明',
    dataIndex: 'description',
  },
  {
    title: '操作',
    // dataIndex: '',
    render:(text,record,index) =>
    <span>
      <span >
        <a onClick={()=>up(text,record,index)}>
          <UpOutlined />
        </a>
      </span>
      {/* <a onClick={xia} key={data.sequence}>{"^ "}</a> */}
      &nbsp;&nbsp;
      <a onClick={()=>down(text,record,index)}> <DownOutlined /></a>
      &nbsp;&nbsp;
      <a href=""><EditOutlined /></a>
    </span>,
  }
];
  console.log(d);
  // b(data)
  return (
    
    <div>
      {/* <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group> */}

      {/* <Divider /> */}

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={d}
      />
    </div>
  );
};
export default Table1;