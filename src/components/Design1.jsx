// import { Upload, Calendar, MapPin, Clock } from 'lucide-react';
// import bg from '../assets/bg.jpg';
// import logo from '../assets/logo.png';

// const Design1 = ({ attendeeData }) => {
//   return (
//     <div id="poster-preview" className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl" style={{aspectRatio: '1/1'}}>
//       {/* Background image with fade */}
//       <div 
//         className="absolute inset-0 opacity-30" 
//         style={{
//           backgroundImage: `url(${bg})`, 
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center'
//         }}
//       ></div>
      
//       {/* Gradient overlay for fade effect towards right */}
//       <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/20"></div>
      
//       {/* Binary pattern background */}
//       <div className="absolute inset-0 opacity-5 text-xs leading-tight p-2 overflow-hidden text-gray-400 font-mono">
//         {Array(100).fill('10110010 01101001 10010110 11001010 ').join('')}
//       </div>

//       {/* Content */}
//       <div className="relative h-full flex flex-col p-4 sm:p-8">
//         {/* Top sponsor bar with logo */}
//         <div className="bg-white border-2 border-gray-300 rounded-lg p-1 sm:p-2 mb-4 flex items-center justify-center gap-2 sm:gap-3">
//           <img src={logo} alt="Logo" className="h-12 sm:h-14 w-auto" />
//         </div>

//         {/* Top right badge - moved to avoid overlap */}
//         <div className="absolute top-2 right-2 text-white px-3 py-1 rounded-lg shadow-lg transform rotate-2" style={{background: 'linear-gradient(to bottom right, #9B2A26, #7a1f1c)'}}>
//           <div className="font-black text-xs leading-tight">Explosive Event!</div>
//         </div>

//         {/* Main content area */}
//         <div className="flex-1 flex items-center">
//           <div className="flex items-center gap-4 sm:gap-6 w-full flex-wrap">
//             {/* Photo with decorative elements */}
//             <div className="relative flex-shrink-0">
//               {/* Red bow decoration */}
//               <div className="absolute -top-6 -left-6 w-20 h-20 z-10">
//                 <div className="w-12 h-12 transform rotate-45 absolute top-4 left-4" style={{background: 'linear-gradient(to bottom right, #9B2A26, #7a1f1c)'}}></div>
//                 <div className="w-12 h-12 transform -rotate-45 absolute top-4 left-4" style={{background: 'linear-gradient(to bottom right, #c53030, #9B2A26)'}}></div>
//               </div>
              
//               {/* Photo circle */}
//               <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 border-yellow-500 overflow-hidden bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-xl relative z-0">
//                 {attendeeData.photo ? (
//                   <img src={attendeeData.photo} alt="Attendee" className="w-full h-full object-cover" />
//                 ) : (
//                   <div className="w-full h-full flex flex-col items-center justify-center text-yellow-600">
//                     <Upload size={32} />
//                     <p className="text-xs mt-1">Upload Photo</p>
//                   </div>
//                 )}
//               </div>

//               {/* Decorative swirl */}
//               <svg className="absolute -bottom-2 -right-4 w-16 h-16 text-yellow-500" viewBox="0 0 100 100" fill="none">
//                 <path d="M10,50 Q30,10 50,30 T90,50" stroke="currentColor" strokeWidth="4" fill="none"/>
//               </svg>
//             </div>

//             {/* Text content */}
//             <div className="flex-1 min-w-[220px]">
//               <h1 className="text-2xl sm:text-3xl font-bold leading-none mb-1" style={{color: '#c53030'}}>I will be</h1>
//               <h2 className="text-3xl sm:text-4xl font-black leading-none mb-2" style={{color: '#9B2A26'}}>attending</h2>
//               <p className="text-base sm:text-lg font-bold text-gray-800 mb-3">Annual Networking Dinner</p>
//             </div>
//           </div>
//         </div>

//         {/* Attendee info section */}
//         <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-3 mb-3 shadow-lg border-l-4" style={{borderLeftColor: '#9B2A26'}}>
//           <p className="text-lg font-black text-gray-900 mb-1">{attendeeData.name}</p>
//           <p className="text-sm font-semibold text-gray-700">{attendeeData.title}</p>
//         </div>

//         {/* Event details */}
//         <div className="grid grid-cols-3 gap-2 mb-3">
//           <div className="bg-white p-2 rounded-lg shadow border-l-4" style={{borderLeftColor: '#9B2A26'}}>
//             <div className="mb-1" style={{color: '#9B2A26'}}>
//               <Calendar size={16} strokeWidth={2} />
//             </div>
//             <p className="font-bold text-gray-900 text-xs">Saturday, 29th</p>
//             <p className="font-black text-sm" style={{color: '#9B2A26'}}>Nov 2025</p>
//           </div>
//           <div className="bg-white p-2 rounded-lg shadow border-l-4" style={{borderLeftColor: '#9B2A26'}}>
//             <div className="mb-1" style={{color: '#9B2A26'}}>
//               <MapPin size={16} strokeWidth={2} />
//             </div>
//             <p className="font-bold text-gray-900 text-xs">BRITAM TOWERS</p>
//             <p className="text-gray-700 text-xs">UpperHill</p>
//           </div>
//           <div className="bg-white p-2 rounded-lg shadow border-l-4" style={{borderLeftColor: '#9B2A26'}}>
//             <div className="mb-1" style={{color: '#9B2A26'}}>
//               <Clock size={16} strokeWidth={2} />
//             </div>
//             <p className="font-black text-xs" style={{color: '#9B2A26'}}>5:00 PM - 9:00 PM</p>
//             <p className="text-gray-700 text-xs">EAT</p>
//           </div>
//         </div>

//         {/* Hashtags section */}
//         <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-center py-2 rounded-lg">
//           <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-900 flex-wrap">
//             <span>#NetworkingDinner</span>
//             <span>#ELPTechHub</span>
//             <span>#Innovation</span>
//             <span>#Connect</span>
//             <span>#Grow</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Design1;












// NEW Design3.jsx 


// components/Design3.jsx — Tech Elegant Shift

import { Upload, Calendar, MapPin, Clock } from 'lucide-react';
import bg from '../assets/bg.jpg';
import logo from '../assets/logo.png';

const Design3 = ({ attendeeData, eventData }) => {
  return (
    <div
      id="poster-preview"
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl mx-auto"
      style={{
        aspectRatio: '1/1',
        maxWidth: '600px',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        padding: '0',
        boxSizing: 'border-box'
      }}
    >
      <div
        className="relative w-full h-full flex flex-col justify-between p-3 sm:p-4 md:p-5"
        style={{
          width: '95%',
          height: '95%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1rem',
          boxSizing: 'border-box',
          paddingBottom: '1.5rem'
        }}
      >
        {/* Top Section — Logo + PRESENTS */}
        <div className="flex justify-between items-start mt: 5 mb-1.5 sm:mb-2 md:mb-3">
          <div className="text-left">
            {/* Logo slightly smaller */}
            <img src={logo} alt="Logo" className="h-7 sm:h-10 md:h-14 w-auto mb-1 sm:mb-1 md:mb-1.5" />
            {/* 👇 PRESENTS — reduced */}
            <p className="text-slate-800 uppercase tracking-widest text-[7px] sm:text-[9px] md:text-[11px] font-semibold font-mono">P R E S E N T S</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center gap-1.5 sm:gap-2.5 md:gap-3.5">
          <div className="mb-2 sm:mb-3 md:mb-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl text-black leading-none -mb-1 sm:-mb-2" style={{fontFamily: 'Dancing Script, cursive', fontWeight: '600'}}>Computer </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-none -mb-0.5 sm:-mb-1" style={{color: '#4F46E5'}}>Science</h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-none mb-1 sm:mb-2 md:mb-3" style={{color: '#4F46E5'}}>Gala</h2>
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full shadow-lg">
              <p className="font-mono font-bold text-[7px] sm:text-[9px] md:text-sm">The Final Commit.</p>
            </div>
          </div>

          {/* Photo + Attendee Info */}
          <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 mb-1.5 sm:mb-2.5 md:mb-3.5">
            <div className="w-14 h-14 sm:w-22 sm:h-22 md:w-30 md:h-30 rounded-full border-2 border-cyan-500 overflow-hidden bg-slate-900 shadow-xl flex-shrink-0">
              {attendeeData.photo ? (
                <img src={attendeeData.photo} alt="Attendee" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-cyan-400">
                  <Upload size={16} className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  {/* 👇 "Upload" text — reduced */}
                  <p className="text-[6px] sm:text-[8px] md:text-[10px] mt-0.5 sm:mt-0.5 font-semibold font-mono">Upload</p>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="bg-slate-950/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-1 sm:p-1.5 md:p-2.5 border border-white/10">
                {/* 👇 "I will be attending" block — reduced */}
                <h3 className="text-[10px] sm:text-base md:text-lg font-bold text-slate-300 mb-0.5 sm:mb-0.5 drop-shadow-md">I will be attending</h3>
                <h4 className="text-[10px] sm:text-base md:text-lg font-bold text-cyan-400 mb-0.5 sm:mb-0.5 drop-shadow-md truncate font-mono">{attendeeData.name}</h4>
                <p className="text-[7px] sm:text-[13px] md:text-[15px] text-slate-400 italic drop-shadow-md truncate">{attendeeData.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom White Bar */}
        <div
          className="absolute bottom-0 left-0 right-0 flex justify-center items-center"
          style={{
            height: '1.5rem',
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '0 0.5rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            zIndex: 10
          }}
        >
          <div className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-[10px] md:text-xs font-semibold" style={{color: '#4F46E5'}}>
            <span className="inline-flex items-center gap-0.5 sm:gap-1 whitespace-nowrap">
              <Calendar size={10} className="sm:w-3 sm:h-3" strokeWidth={2} />
              <span>{eventData.date}</span>
            </span>
            <span className="opacity-40 hidden xs:inline">•</span>
            <span className="inline-flex items-center gap-0.5 sm:gap-1 whitespace-nowrap">
              <MapPin size={10} className="sm:w-3 sm:h-3" strokeWidth={2} />
              <span className="hidden sm:inline">{eventData.venue}</span>
              <span className="sm:hidden">{eventData.venue.split(',')[0]}</span>
            </span>
            <span className="opacity-40 hidden xs:inline">•</span>
            <span className="inline-flex items-center gap-0.5 sm:gap-1 whitespace-nowrap">
              <Clock size={10} className="sm:w-3 sm:h-3" strokeWidth={2} />
              <span className="hidden sm:inline">{eventData.time}</span>
              <span className="sm:hidden">
                {eventData.time.split(' - ')[0].replace(' PM', '')}
                –
                {eventData.time.split(' - ')[1].replace(' PM', '')} PM
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design3;















































// // ORIGINAL Design3.jsx

// // components/Design3.jsx — Slightly Reduced Text Sizes (All Elements)

// import { Upload, Calendar, MapPin, Clock } from 'lucide-react';
// import bg from '../assets/bg.jpg';
// import logo from '../assets/logo.png';

// const Design3 = ({ attendeeData, eventData }) => {
//   return (
//     <div
//       id="poster-preview"
//       className="relative w-full rounded-2xl overflow-hidden shadow-2xl mx-auto"
//       style={{
//         aspectRatio: '1/1',
//         maxWidth: '600px',
//         backgroundImage: `url(${bg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '0',
//         boxSizing: 'border-box'
//       }}
//     >
//       <div
//         className="relative w-full h-full flex flex-col justify-between p-3 sm:p-4 md:p-5"
//         style={{
//           width: '95%',
//           height: '95%',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//           padding: '1rem',
//           boxSizing: 'border-box',
//           paddingBottom: '1.5rem'
//         }}
//       >
//         {/* Top Section — Logo + PRESENTS */}
//         <div className="flex justify-between items-start mb-1.5 sm:mb-2 md:mb-3">
//           <div className="text-left">
//             {/* Logo slightly smaller */}
//             <img src={logo} alt="Logo" className="h-7 sm:h-10 md:h-14 w-auto mb-1 sm:mb-1 md:mb-1.5" />
//             {/* 👇 PRESENTS — reduced */}
//             <p className="text-gray-800 uppercase tracking-widest text-[7px] sm:text-[9px] md:text-[11px] font-semibold">P R E S E N T S</p>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col justify-center gap-1.5 sm:gap-2.5 md:gap-3.5">
//         <div className="mb-2 sm:mb-3 md:mb-4">
//           <h1 className="text-2xl sm:text-4xl md:text-5xl text-black leading-none -mb-1 sm:-mb-2" style={{fontFamily: 'Dancing Script, cursive', fontWeight: '600'}}>Senior</h1>
//           <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-none -mb-0.5 sm:-mb-1" style={{color: '#9B2A26'}}>Send Off</h2>
//           <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-none mb-1 sm:mb-2 md:mb-3" style={{color: '#9B2A26'}}>Dinner</h2>
//           <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full shadow-lg">
//             <p className="font-bold text-[7px] sm:text-[9px] md:text-sm">The Final Commit.</p>
//           </div>
//         </div>

//           {/* Photo + Attendee Info */}
//           <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 mb-1.5 sm:mb-2.5 md:mb-3.5">
//             <div className="w-14 h-14 sm:w-22 sm:h-22 md:w-30 md:h-30 rounded-full border border-yellow-500 overflow-hidden bg-yellow-100 shadow-xl flex-shrink-0">
//               {attendeeData.photo ? (
//                 <img src={attendeeData.photo} alt="Attendee" className="w-full h-full object-cover" />
//               ) : (
//                 <div className="w-full h-full flex flex-col items-center justify-center text-yellow-600">
//                   <Upload size={16} className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
//                   {/* 👇 "Upload" text — reduced */}
//                   <p className="text-[6px] sm:text-[8px] md:text-[10px] mt-0.5 sm:mt-0.5 font-semibold">Upload</p>
//                 </div>
//               )}
//             </div>
//             <div className="flex-1 min-w-0">
//               <div className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-1 sm:p-1.5 md:p-2.5 border border-white/20">
//                 {/* 👇 "I will be attending" block — reduced */}
//                 <h3 className="text-[10px] sm:text-base md:text-lg font-bold text-white mb-0.5 sm:mb-0.5 drop-shadow-md">I will be attending</h3>
//                 <h4 className="text-[10px] sm:text-base md:text-lg font-bold text-yellow-400 mb-0.5 sm:mb-0.5 drop-shadow-md truncate">{attendeeData.name}</h4>
//                 <p className="text-[7px] sm:text-[13px] md:text-[15px] text-gray-200 italic drop-shadow-md truncate">{attendeeData.title}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom White Bar */}
//         <div
//           className="absolute bottom-0 left-0 right-0 flex justify-center items-center"
//           style={{
//             height: '1.5rem',
//             backgroundColor: 'white',
//             borderRadius: '1rem',
//             padding: '0 0.5rem',
//             boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//             zIndex: 10
//           }}
//         >
//           <div className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-[10px] md:text-xs font-semibold" style={{color: '#9B2A26'}}>
//             <span className="inline-flex items-center gap-0.5 sm:gap-1 whitespace-nowrap">
//               <Calendar size={10} className="sm:w-3 sm:h-3" strokeWidth={2} />
//               <span>{eventData.date}</span>
//             </span>
//             <span className="opacity-40 hidden xs:inline">•</span>
//             <span className="inline-flex items-center gap-0.5 sm:gap-1 whitespace-nowrap">
//               <MapPin size={10} className="sm:w-3 sm:h-3" strokeWidth={2} />
//               <span className="hidden sm:inline">{eventData.venue}</span>
//               <span className="sm:hidden">{eventData.venue.split(',')[0]}</span>
//             </span>
//             <span className="opacity-40 hidden xs:inline">•</span>
//             <span className="inline-flex items-center gap-0.5 sm:gap-1 whitespace-nowrap">
//               <Clock size={10} className="sm:w-3 sm:h-3" strokeWidth={2} />
//               <span className="hidden sm:inline">{eventData.time}</span>
//               <span className="sm:hidden">
//                 {eventData.time.split(' - ')[0].replace(' PM', '')}
//                 –
//                 {eventData.time.split(' - ')[1].replace(' PM', '')} PM
//               </span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Design3;