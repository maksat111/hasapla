import { React, useState, useSyncExternalStore } from 'react';
import './App.css';
import { Modal, Select, Table } from 'antd';

function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setOpen(false);
    setDataSource([...dataSource, { name: selected.label, kuwwat: selected.wt, key: selected.wt }]);
    setSelected(null)
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true)
  }

  const handleSelect = (e) => {
    const filtered = options.filter(item => item.value == e);
    setSelected(filtered[0]);
  }

  const options = [
    {
      label: 'Sowadyjy',
      value: 'Sowadyjy',
      wt: '400'
    },
    {
      label: 'Kompyuter',
      value: 'Kompyuter',
      wt: '550'
    },
    {
      label: 'Kir yuwujy masyn',
      value: 'Kir yuwujy masyn',
      wt: '700'
    },
    {
      label: 'Telewizor',
      value: 'Telewizor',
      wt: '200'
    },
    {
      label: 'Çyra(lampa)',
      value: 'Çyra(lampa)',
      wt: '150'
    },
    {
      label: 'Tok plita',
      value: 'Tok plita',
      wt: '2500'
    },
    {
      label: 'Tok peç',
      value: 'Tok peç',
      wt: '1000'
    },
    {
      label: 'Kondisaner',
      value: 'Kondisaner',
      wt: '600'
    },
    {
      label: 'Ütük',
      value: 'Ütük',
      wt: '1000'
    },
    {
      label: 'Boiler',
      value: 'Boiler',
      wt: '700'
    },
  ]

  const columns = [
    {
      title: 'Hojalyk tehnikasynyn ady',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Sarp edyan kuwwaty',
      dataIndex: 'kuwwat',
      key: 'kuwwat',
    },
  ]

  return (
    <div className="App">
      <Modal
        title="Tehnikany saylan"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText={'Отмена'}
        okText={'Да'}
        okType={'primary'}
        style={{
          top: '200px'
        }}
      >
        <Select
          value={selected}
          showSearch
          allowClear
          style={{
            width: '100%',
          }}
          placeholder="Выберите категорию"
          onChange={(e) => handleSelect(e)}
          options={options}
        />
      </Modal>
      <h2 className='title'>Geçiriji simi hasaplamak</h2>
      <div className='header'>
        <div className='add_button' onClick={handleClick}>Öý hojalyk tehnikasyny goşmak</div>
      </div>
      <Table columns={columns} dataSource={dataSource} style={{ width: '80vw', margin: 'auto' }} pagination={false} />
      <div className='bottom'>
        <div className='add_button'>Hasaplamak</div>
      </div>
    </div>
  );
}

export default App;
