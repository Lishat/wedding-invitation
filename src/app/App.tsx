import { useState } from 'react';
import weddingInvitation from '../assets/dcb86bf857be4ca2a62a2dafac37fcd8a27fe01d.png';
import receptionInvitation from '../assets/008dc74d0774a9b29f2cff3ee7020b1f00585e13.png';
import { Heart } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'wedding' | 'reception'>('wedding');

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-blue-50 flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Header */}
      <div className="text-center mb-8 animate-fadeIn">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-pulse" />
          <h1 className="text-4xl sm:text-5xl font-serif text-gray-800">
            Manali & Subhadeep
          </h1>
          <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-pulse" />
        </div>
        <p className="text-lg text-gray-600">You are cordially invited to celebrate our special day</p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-8 bg-white rounded-full shadow-lg p-2">
        <button
          onClick={() => setCurrentView('wedding')}
          className={`px-8 py-3 rounded-full transition-all duration-300 ${
            currentView === 'wedding'
              ? 'bg-gradient-to-r from-teal-400 to-teal-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Wedding Invitation
        </button>
        <button
          onClick={() => setCurrentView('reception')}
          className={`px-8 py-3 rounded-full transition-all duration-300 ${
            currentView === 'reception'
              ? 'bg-gradient-to-r from-rose-400 to-rose-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Reception Invitation
        </button>
      </div>

      {/* Invitation Display */}
      <div className="max-w-4xl w-full">
        <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
          {currentView === 'wedding' ? (
            <div className="animate-fadeIn">
              <img 
                src={weddingInvitation} 
                alt="Wedding Invitation - Manali & Subhadeep - Wednesday, April 29, 2026 at 12:31PM at GMK Banquets & Lawns, Ravet, Pimpri-Chinchwad, Pune" 
                className="w-full h-auto"
              />
            </div>
          ) : (
            <div className="animate-fadeIn">
              <img 
                src={receptionInvitation} 
                alt="Reception Invitation - Manali Darge & Subhadeep Dash - May 2nd, 7:30 PM at 3rd floor, Haryana Bhavan, Paradise Circle, Beside HDFC Bank, Secunderabad" 
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
        
        {/* Event Details */}
        <div className="mt-8 text-center space-y-4">
          {currentView === 'wedding' ? (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-serif text-gray-800 mb-2">Wedding Ceremony</h2>
              <p className="text-gray-600">Wednesday, April 29, 2026</p>
              <p className="text-gray-600">12:31 PM</p>
              <p className="text-gray-600 mt-2">GMK Banquets & Lawns</p>
              <p className="text-gray-600">Ravet, Pimpri-Chinchwad, Pune</p>
            </div>
          ) : (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-serif text-gray-800 mb-2">Reception</h2>
              <p className="text-gray-600">May 2nd, 2026</p>
              <p className="text-gray-600">7:30 PM</p>
              <p className="text-gray-600 mt-2">3rd floor, Haryana Bhavan</p>
              <p className="text-gray-600">Paradise Circle, Beside HDFC Bank</p>
              <p className="text-gray-600">Secunderabad</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>We look forward to celebrating with you</p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
