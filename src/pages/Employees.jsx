import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Search, Page, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../context/ContextProvider';

const Employees = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl sm:m-10 sm:p-10'>
      <Header title='Employees' category='Page'/>
      <GridComponent dataSource={employeesData} allowPaging allowSorting toolbar={['Search']} width='auto'  background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>

        <Inject services={[ Page, Search, Toolbar ]}/>
      </GridComponent>
    </div>
  )
}

export default Employees