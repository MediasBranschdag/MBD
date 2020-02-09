import React, { FC, useEffect, useState } from 'react';
import MBDDateContext from './mbd-date-context';
import MBDDate, {getNextExhibitDate} from '../model/MBDDate';

const MBDDateProvider: FC = (props) => {
  const [mbdDate, setMbdDate] = useState(
      new MBDDate()
  );

  useEffect(() => {
    getNextExhibitDate().then(mbdDate => {
      setMbdDate(mbdDate);
    })
  }, []);
  
  return (
        <MBDDateContext.Provider value={mbdDate}>
            {props.children}
        </MBDDateContext.Provider>
  );
}

export default MBDDateProvider;
