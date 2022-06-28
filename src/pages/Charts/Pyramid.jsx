import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PyramidSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationLegend, AccumulationSelection}
from'@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { PyramidData  } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div>
      <div className='m-3 md:m-10 mt-24 p-10 dark:bg-secondary-dark-bg rounded-3xl'>
        <Header category='Chart' title='Food Chart'/>
      </div> 

      <AccumulationChartComponent background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
      <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />

        <AccumulationSeriesCollectionDirective background={currentMode === 'Dark' ? '#33373E' : '#fff'} width="45%" height="80%">
          <AccumulationSeriesDirective dataSource={PyramidData} xName="x" yName="y" type="Pyramid" dataLabel={{
                  visible: true,
                  position: 'Inside',
                  name: 'text',
                }} >

          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
      
    </div>
  )
}

export default Pyramid