import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, Zoom, Crosshair, DateTime, Logarithmic } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';


const Financial = () => {


  return (
    <div>
      <div className='m-3 md:m-10 mt-24 p-10 dark:bg-secondary-dark-bg rounded-3xl'>
        <Header category='Chart' title='Financial Chart'/>
      </div> 

      <ChartComponent  primaryXAxis={FinancialPrimaryXAxis} primaryYAxis={FinancialPrimaryYAxis} xName="x" yName="y" low="low" high="high" type='hilo'>
        <Inject services={[ HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom ]}/>

        <SeriesCollectionDirective>
          {financialChartData.map((item, index) => <SeriesDirective key={index} {...item}/>)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Financial