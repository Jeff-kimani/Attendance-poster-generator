// import { Calendar, MapPin, Clock, Phone } from 'lucide-react';
// import bg from '../assets/bg.jpg';
// import logo from '../assets/logo.png';
// import payment from '../assets/payment.jpg';

// const Design4 = ({ attendeeData, eventData }) => {
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
//         {/* Top Section - Logo Only */}
//         <div className="flex justify-between items-start mb-1.5 sm:mb-2 md:mb-3">
//           <div className="text-left">
//             <img src={logo} alt="Logo" className="h-7 sm:h-10 md:h-14 w-auto" />
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 flex justify-between items-center text-left">
//           {/* Left Column for Text */}
//           <div className="flex flex-col justify-center w-[70%] pr-3">
//             {/* Guest Intro */}
//             <div className="mb-2 sm:mb-3 md:mb-4 relative bottom-[3px]">
//               <h3 className="text-base sm:text-lg md:text-xl font-bold text-black" style={{fontFamily: '"Playfair Display", serif'}}>
//                 Dear {attendeeData.name},
//               </h3>
//               <p className="text-xs sm:text-sm md:text-base text-gray-800 italic">
//                 {attendeeData.title}
//               </p>
//             </div>

//             {/* Invitation */}
//             <div className="mb-1 sm:mb-2 relative bottom-[3px]">
//               <p className="text-[10px] sm:text-xs md:text-sm text-gray-700">
//                 ...we cordially invite you to our...
//               </p>
//               <h1 className="text-xl sm:text-3xl md:text-4xl font-black leading-none -mb-0.5 sm:-mb-1" style={{color: '#9B2A26'}}>
//                 Annual Networking
//               </h1>
//               <h1 className="text-xl sm:text-3xl md:text-4xl font-black leading-none" style={{color: '#9B2A26'}}>
//                 Dinner
//               </h1>
//             </div>

//             <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg self-start mb-1 sm:mb-2">
//               <p className="font-bold text-[6px] sm:text-[8px] md:text-xs">Innovate. Connect. Grow</p>
//             </div>

//             {/* Personal Message & RSVP */}
//             <div className="relative top-[14px]">
//               <p className="text-[7px] sm:text-[10px] md:text-xs text-gray-800 italic max-w-md mb-1">
//                 It would be our pleasure to host you for an evening of strategic conversations and meaningful connections.
//               </p>
//               <div className="flex items-center gap-1 sm:gap-2">
//                 <Phone size={10} className="sm:w-3 sm:h-3 text-gray-800" strokeWidth={2.5} />
//                 <span className="text-gray-800 font-bold text-[7px] sm:text-[10px]">RSVP: 0790638575</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Column for Payment */}
//           <div className="w-[30%] h-full relative">
//             <div className="absolute bottom-0 w-full pb-4 sm:pb-6">
//               <div className="bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-1 sm:p-1.5 border border-white/20 text-center text-white">
//                 <h4 className="font-bold text-[6px] sm:text-[9px] md:text-[10px] text-yellow-400">VIP Contribution</h4>
//                 <p className="font-bold text-[10px] sm:text-xs md:text-sm mb-0.5">Ksh 2500 Only</p>
//                 <img src={payment} alt="Payment Details" className="w-full rounded-md" />
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
//             <span className="opacity-40 hidden sm:inline">•</span>
//             <span className="inline-flex items-center gap-0.5 sm:gap-1 whitespace-nowrap">
//               <MapPin size={10} className="sm:w-3 sm:h-3" strokeWidth={2} />
//               <span className="hidden sm:inline">{eventData.venue}</span>
//               <span className="sm:hidden">{eventData.venue.split(',')[0]}</span>
//             </span>
//             <span className="opacity-40 hidden sm:inline">•</span>
//             <span className="inline-flex items-center gap-0.5 sm:gap-1 whitespace-nowrap">
//               <Clock size={10} className="sm:w-3 sm:h-3" strokeWidth={2} />
//               <span className="hidden sm:inline">{eventData.time}</span>
//               <span className="sm:hidden">
//                 {eventData.time.split(' - ')[0].replace(' PM', '')}–{eventData.time.split(' - ')[1].replace(' PM', '')} PM
//               </span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Design4;




// components/Design3.jsx — Slightly Reduced Text Sizes (All Elements)

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
        justifyContent: 'center',
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
        <div className="flex justify-between items-start mb-1.5 sm:mb-2 md:mb-3">
          <div className="text-left">
            {/* Logo slightly smaller */}
            <img src={logo} alt="Logo" className="h-7 sm:h-10 md:h-14 w-auto mb-1 sm:mb-1 md:mb-1.5" />
            {/* 👇 PRESENTS — reduced */}
            <p className="text-gray-800 uppercase tracking-widest text-[7px] sm:text-[9px] md:text-[11px] font-semibold">P R E S E N T S</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center gap-1.5 sm:gap-2.5 md:gap-3.5">
        <div className="mb-2 sm:mb-3 md:mb-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl text-black leading-none -mb-1 sm:-mb-2" style={{fontFamily: 'Dancing Script, cursive', fontWeight: '600'}}>Annual</h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-none -mb-0.5 sm:-mb-1" style={{color: '#9B2A26'}}>Networking</h2>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-none mb-1 sm:mb-2 md:mb-3" style={{color: '#9B2A26'}}>Dinner</h2>
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full shadow-lg">
            <p className="font-bold text-[7px] sm:text-[9px] md:text-sm">Innovate. Connect. Grow</p>
          </div>
        </div>

          {/* Photo + Attendee Info */}
          <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 mb-1.5 sm:mb-2.5 md:mb-3.5">
            <div className="w-14 h-14 sm:w-22 sm:h-22 md:w-30 md:h-30 rounded-full border border-yellow-500 overflow-hidden bg-yellow-100 shadow-xl flex-shrink-0">
              {attendeeData.photo ? (
                <img src={attendeeData.photo} alt="Attendee" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-yellow-600">
                  <Upload size={16} className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  {/* 👇 "Upload" text — reduced */}
                  <p className="text-[6px] sm:text-[8px] md:text-[10px] mt-0.5 sm:mt-0.5 font-semibold">Upload</p>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-1 sm:p-1.5 md:p-2.5 border border-white/20">
                {/* 👇 "I will be attending" block — reduced */}
                <h3 className="text-[10px] sm:text-base md:text-lg font-bold text-white mb-0.5 sm:mb-0.5 drop-shadow-md">I will be attending</h3>
                <h4 className="text-[10px] sm:text-base md:text-lg font-bold text-yellow-400 mb-0.5 sm:mb-0.5 drop-shadow-md truncate">{attendeeData.name}</h4>
                <p className="text-[7px] sm:text-[13px] md:text-[15px] text-gray-200 italic drop-shadow-md truncate">{attendeeData.title}</p>
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
          <div className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-[10px] md:text-xs font-semibold" style={{color: '#9B2A26'}}>
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