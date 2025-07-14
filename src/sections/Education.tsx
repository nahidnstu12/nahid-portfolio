import { education } from "@/data/personalData";
import { Section } from "@/components/ui";

export const Education = () => {
  return (
    <Section id="education" className="bg-gray-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Education
        </h2>
        
        <div className="max-w-2xl mx-auto">
          {education.map((edu) => (
            <div key={edu.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-700/50">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-emerald-400 font-semibold text-lg">{edu.institution}</p>
                <p className="text-gray-300">{edu.location}</p>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="text-center md:text-left">
                  <p className="text-gray-200 font-medium">Duration</p>
                  <p className="text-gray-300">{edu.duration}</p>
                </div>
                
                <div className="text-center md:text-right mt-4 md:mt-0">
                  <p className="text-gray-200 font-medium">CGPA</p>
                  <p className="text-emerald-400 font-semibold text-lg">{edu.cgpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}; 