import { workExperience } from "@/data/personalData";
import { Section } from "@/components/ui";
import { CheckCircleIcon } from "@/components/icons";

export const Experience = () => {
  return (
    <Section id="experience" className="bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-500/30"></div>
            
            {workExperience.map((job, index) => (
              <div key={job.id} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-800 shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-16 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-700/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.position}</h3>
                      <p className="text-emerald-400 font-semibold">{job.company}</p>
                      <p className="text-gray-300 text-sm">{job.type}</p>
                      <p className="text-gray-300 text-sm">{job.location}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <span className="text-gray-300 font-medium">{job.duration}</span>
                      {job.current && (
                        <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full border border-emerald-500/30">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {job.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Achievements */}
                  {job.achievements && job.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-200 mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircleIcon className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm font-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full border border-emerald-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}; 