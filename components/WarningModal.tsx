'use client';

import { Warning } from '@/lib/story-data';

interface WarningModalProps {
  warning: Warning;
  onClose: () => void;
}

export default function WarningModal({ warning, onClose }: WarningModalProps) {
  const severityColors = {
    low: 'bg-yellow-50 border-yellow-300',
    medium: 'bg-orange-50 border-orange-300',
    high: 'bg-red-50 border-red-300'
  };

  const severityTextColors = {
    low: 'text-yellow-800',
    medium: 'text-orange-800',
    high: 'text-red-800'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-2xl shadow-2xl max-w-md w-full border-2 ${severityColors[warning.severity]}`}>
        <div className="p-6">
          <h2 className={`text-2xl font-bold mb-4 ${severityTextColors[warning.severity]}`}>
            {warning.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {warning.description}
          </p>
          <button
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            理解しました
          </button>
        </div>
      </div>
    </div>
  );
}
