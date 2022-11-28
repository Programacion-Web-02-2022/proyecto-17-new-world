import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns/'
import { localizer } from './helpers/CalendarLocalize';
import { getMessagesES } from './helpers/getMessages';



//creo un evento para que no me tire error
const events =[{
  title: 'cumpleaños',
  notes: 'comprar wl pastel',
  start: new Date(),
  end: addHours( new Date(),2 ),
}]


const CalendarPage = () => {
  return (
    <>
        <Calendar
          culture='es'
          localizer={localizer}
          events={ events }
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc( 100vh - 150px )' }}
          messages={ getMessagesES() }
        />
        
        
    </>
  )
}

export default CalendarPage;