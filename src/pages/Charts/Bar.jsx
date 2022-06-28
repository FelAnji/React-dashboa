import React from 'react';
import { ChartComponent, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, SeriesCollectionDirective, BarSeries, ColumnSeries } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';



const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div>
      <div className='m-3 md:m-10 mt-24 p-10 dark:bg-secondary-dark-bg rounded-3xl'>
        <Header category='Area' title='Bar Chart'/>
      </div> 

      <ChartComponent primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} background={currentMode === 'Dark' ? '#33373E' : '#fff'}>

      <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category, ColumnSeries ]}/>

      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />) }
      </SeriesCollectionDirective>

      </ChartComponent>
    </div>
    
  )
}

export default Bar