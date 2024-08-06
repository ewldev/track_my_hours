'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { withAuth } from '../../components/withAuth';

function TrackHours() {
  const [displayDate, setDisplayDate] = useState('');
  const [weekOf, setWeekOf] = useState('');
  const [weekDays, setWeekDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    const now = new Date();
    const todayString = formatDate(now, true);
    setDisplayDate(`Today is ${todayString}`);
    
    // Adjust to start week on Monday
    const currentDay = now.getDay();
    const diff = currentDay === 0 ? -6 : 1 - currentDay; // if it's Sunday, we want to go back 6 days
    const monday = new Date(now.setDate(now.getDate() + diff));
    
    setWeekOf(`Week of ${shortMonths[monday.getMonth()]} ${monday.getDate()}`);
    
    const daysArray = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      const isToday = day.toDateString() === new Date().toDateString();
      daysArray.push({
        date: day,
        shortDay: shortDays[day.getDay()],
        formattedDate: formatDate(day),
        isToday: isToday
      });
    }
    setWeekDays(daysArray);
    
    // Set the selected day to today
    const today = daysArray.find(day => day.isToday);
    setSelectedDay(today || daysArray[0]);
  }, []);

  const formatDate = (date, isToday = false) => {
    return `${longDays[date.getDay()]}, ${shortMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setDisplayDate(day.isToday ? `Today is ${day.formattedDate}` : day.formattedDate);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#f14b0e] text-white p-4 flex justify-between items-center">
        <h1 id="hours" className="text-xl font-bold">Hours</h1>
      </div>

      <div className="flex-grow p-4" role="main">
        <h2 id="currentDate" className="text-[#181311] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
          {displayDate}
        </h2>

        <h3 id="weekOf" className="text-[#181311] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
          {weekOf}
        </h3>

        <div id="weekDays" className="space-y-2">
          {weekDays.map((day, index) => (
            <div 
              key={index} 
              className={`flex gap-4 items-center border-b-2 py-2 cursor-pointer ${
                day === selectedDay ? 'border-[#f14b0e]' : 'border-transparent'
              }`}
              onClick={() => handleDaySelect(day)}
            >
              <span>{day.shortDay}</span>
              <span>0:00</span>
            </div>
          ))}
        </div>

        <button 
          onClick={openModal}
          className="mt-6 bg-[#f14b0e] text-white font-bold py-2 px-4 rounded-xl hover:bg-[#d64100] transition duration-300 ease-in-out w-full"
        >
          Track My Hours
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-xl max-w-md w-full">
              <h2 id="selectedDate" className="text-[#181311] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
                New Task for <span id="dateSpan">{selectedDay.formattedDate}</span>
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Client name</label>
                  <div className="flex items-center border border-[#e6dedb] rounded-xl">
                    <input type="text" className="flex-grow p-2 rounded-l-xl" />
                    <div className="p-2">
                      <Image
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld2JveD0iMCAwIDI1NiAyNTYiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIyNCwxMjhhOCw4LDAsMCwxLTgsOEgxMzZ2ODBhOCw4LDAsMCwxLTE2LDBWMTM2SDQwYTgsOCwwLDAsMSwwLTE2aDgwVjQwYTgsOCwwLDAsMSwxNiwwdjgwaDgwQTgsOCwwLDAsMSwyMjQsMTI4WiI+PC9wYXRoPgogICAgICAgICAgICAgIDwvc3ZnPg=="
                        alt="Add"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Project name</label>
                  <div className="flex items-center border border-[#e6dedb] rounded-xl">
                    <input type="text" className="flex-grow p-2 rounded-l-xl" />
                    <div className="p-2">
                      <Image
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld2JveD0iMCAwIDI1NiAyNTYiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIyNCwxMjhhOCw4LDAsMCwxLTgsOEgxMzZ2ODBhOCw4LDAsMCwxLTE2LDBWMTM2SDQwYTgsOCwwLDAsMSwwLTE2aDgwVjQwYTgsOCwwLDAsMSwxNiwwdjgwaDgwQTgsOCwwLDAsMSwyMjQsMTI4WiI+PC9wYXRoPgogICAgICAgICAgICAgIDwvc3ZnPg=="
                        alt="Add"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Hourly rate</label>
                  <input type="number" className="w-full p-2 border border-[#e6dedb] rounded-xl" />
                </div>
              </div>

              <div className="flex justify-end mt-6 space-x-4">
                <button 
                  onClick={closeModal}
                  className="px-4 py-2 border border-[#f14b0e] text-[#f14b0e] rounded-xl hover:bg-[#f14b0e] hover:text-white transition duration-300"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-[#f14b0e] text-white rounded-xl hover:bg-[#d64100] transition duration-300">
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default withAuth(TrackHours);