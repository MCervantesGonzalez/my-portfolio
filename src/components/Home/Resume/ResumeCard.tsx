import React from "react";
import { ResumeProps } from "@/lib/resume-data";
import { CYBER_RED, CYBER_CYAN } from "@/lib/theme";

function ResumeCard({ resume }: ResumeProps) {
  const { icon: Icon } = resume;

  return (
    <div className="relative mb-6 flex items-start gap-4 sm:gap-6 bg-[#0d121c]/80 border border-gray-800 rounded-sm p-4 sm:p-6 transition-colors duration-300 hover:border-cyan-300/50">
      {/* Marcador de esquina */}
      <div
        className="absolute -top-px -left-px w-3.5 h-3.5 border-l-2 border-t-2"
        style={{ borderColor: CYBER_RED }}
      />
      <div
        className="absolute -bottom-px -right-px w-3.5 h-3.5 border-r-2 border-b-2"
        style={{ borderColor: CYBER_RED }}
      />

      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm border flex items-center justify-center shrink-0"
        style={{
          borderColor: `${CYBER_CYAN}40`,
          backgroundColor: `${CYBER_CYAN}0d`,
        }}
      >
        <Icon
          className="w-6 h-6"
          style={{ color: CYBER_CYAN }}
          strokeWidth={1.5}
        />
      </div>

      <div className="flex-1 min-w-0">
        {resume.date && (
          <span
            className="inline-block mb-2 px-3 py-1 rounded-sm border font-mono text-[10px] sm:text-xs tracking-widest uppercase"
            style={{ borderColor: `${CYBER_CYAN}40`, color: CYBER_CYAN }}
          >
            {resume.date}
          </span>
        )}
        <h3 className="text-gray-100 text-base sm:text-xl font-semibold">
          {resume.role}
        </h3>
        {resume.description && (
          <p className="text-gray-400 text-sm sm:text-base pt-2 leading-relaxed">
            {resume.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default ResumeCard;
