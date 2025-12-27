import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Placeholder - replace with your actual resume PDF path
    // You should put your resume.pdf in the public folder or import it
    const resumeUrl = "src/assets/resume.pdf";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl h-[85vh] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <h3 className="text-xl font-semibold text-white">Resume</h3>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content - PDF Preview */}
                <div className="flex-1 bg-gray-900 relative overflow-hidden">
                    <iframe
                        src={resumeUrl}
                        className="w-full h-full"
                        title="Resume Preview"
                    />

                    {/* Fallback if PDF fails to load or for empty state visual */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -z-10 text-gray-500">
                        <p>Unable to load preview</p>
                    </div>
                </div>

                {/* Footer / Actions */}
                <div className="p-4 border-t border-white/10 bg-[#0a0a0a] rounded-b-2xl flex justify-between items-center sm:justify-end gap-3">
                    <span className="text-sm text-gray-400 hidden sm:block mr-auto">
                        File format: PDF
                    </span>

                    {/* <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10"
                    >
                        <ExternalLink size={18} />
                        <span className="hidden sm:inline">Open in New Tab</span>
                    </a>

                    <a
                        href={resumeUrl}
                        download="Rushabh_Wagh_Resume.pdf"
                        className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/20"
                    >
                        <Download size={18} />
                        <span>Download Resume</span>
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;
