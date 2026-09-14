import SectionHeader from '../components/SectionHeader';
import { resumeData } from '../data/resume';
import { Download, GraduationCap, Wrench, Briefcase } from 'lucide-react';

export default function ResumeView() {
  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#2a2f3d] pb-6">
        <SectionHeader 
          tag="Curriculum Vitae"
          title="Resume"
          subtitle="Education, technical competencies, and professional background."
          meta="FORMAT: PDF_SYNCED"
        />
        <a 
          href="/Resume.pdf" 
          download 
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-bold bg-[var(--color-brand-orange)] text-black hover:bg-orange-400 transition-all shadow-md shadow-[var(--color-brand-orange)]/15 shrink-0 self-start sm:self-auto mb-6"
        >
          <Download size={14} />
          <span>Download PDF</span>
        </a>
      </div>

      {/* Education */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
          <GraduationCap size={15} className="text-[var(--color-brand-orange)]" />
          <span>Education</span>
        </div>
        <div className="p-6 rounded-2xl border border-[#2a2f3d] bg-[#181b22] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-engine-grid">
          <div>
            <h4 className="text-base md:text-lg font-bold text-white font-[var(--font-display)]">
              {resumeData.education.degree}
            </h4>
            <p className="text-xs md:text-sm text-gray-400 font-mono mt-0.5">
              {resumeData.education.school}
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-[var(--color-brand-orange)] px-3.5 py-1.5 rounded bg-[var(--color-brand-orange)]/10 border border-[var(--color-brand-orange)]/30 self-start md:self-auto">
            {resumeData.education.graduation}
          </span>
        </div>
      </section>

      {/* Technical Competencies Matrix */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
          <Wrench size={15} className="text-[var(--color-brand-orange)]" />
          <span>Technical Toolkit</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {resumeData.skills.map((group) => (
            <div key={group.category} className="p-6 rounded-2xl border border-[#2a2f3d] bg-[#181b22] space-y-3">
              <h5 className="text-xs font-mono font-bold text-[var(--color-brand-orange)] uppercase tracking-wider border-b border-white/5 pb-2">
                {group.category}
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-2.5 py-1 rounded bg-black/40 border border-white/10 text-xs font-mono text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work History */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
          <Briefcase size={15} className="text-[var(--color-brand-orange)]" />
          <span>Work History</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resumeData.experience.map((job) => (
            <div key={job.role} className="p-6 rounded-2xl border border-[#2a2f3d] bg-[#181b22] space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h5 className="text-sm font-bold text-white font-[var(--font-display)]">{job.role}</h5>
                  <p className="text-xs font-mono text-gray-400">{job.company}</p>
                </div>
                <span className="text-xs font-mono text-[var(--color-brand-orange)]">{job.period}</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-sans pt-1">
                {job.details}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}