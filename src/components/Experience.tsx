import { useState } from 'react';

function Experience() {
  const [showExperience, setShowExperience] = useState(true);

  // Toggle between experience and education
  const toggleContent = (content: 'experience' | 'education') => {
    setShowExperience(content === 'experience');
  };

  return (
    <section id="experience" className="pt-24">
    <div className="container mx-auto py-10 min-h-[0] max-w-6xl">
      {/* Button Group as a Seamless Toggle */}
      <div className="flex w-full mx-auto mb-6 bg-gray-900 text-white rounded-md p-1">
        <button
          onClick={() => toggleContent('experience')}
          className={`h-9 flex-1 flex justify-center items-center rounded-md transition-all duration-300 ${
            showExperience ? 'bg-white text-black' : 'bg-transparent text-white'
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => toggleContent('education')}
          className={`h-9 flex-1 flex justify-center items-center rounded-md transition-all duration-300 ${
            !showExperience ? 'bg-white text-black' : 'bg-transparent text-white'
          }`}
        >
          Education
        </button>
      </div>

      {/* Content Area */}
      <div className="border-2 border-gray-600 rounded-lg p-12 text-base">
        {showExperience ? (
          <section className=' text-black'>
            <div className="mb-8 ">
            <h3 className="text-xl font-bold">Cybersecurity Engineer</h3>
            <div className="flex justify-between items-center">
            <span className="text-left">Government Technology Agency</span>
            <span className="text-right">Jan 2022 - Jan 2025</span>
            </div>
              <ul className="list-none mt-2">
                <li>● Developed and maintained backend services for government applications using Python 
                and Django REST Framework</li>
                <li>● Architected and deployed a multi-cloud application (AWS & Azure), leveraging Terraform for
                infrastructure automation, enhancing security and compliance</li>
                <li>● Built and optimized RESTful APIs, reducing response time through query optimization and
                caching</li>
                <li>● Automated infrastructure provisioning and configuration management with Terraform,
                cutting manual deployment time by 50%</li>
                <li>● Developed and fine-tuned an LLM-powered chatbot, reducing incident resolution time by
                60%</li>
                <li>● Integrated AWS Config with backend systems to enable real-time compliance monitoring</li>
                <li>● Implemented Elasticsearch for observability, improving debugging and system health
                analysis</li>
              </ul>
            </div>

            <div className="mb-8 ">
              <h3 className="text-xl font-bold ">Solutions Architect</h3>
              <div className="flex justify-between items-center">
            <span className="text-left">Amazon Web Services (AWS)</span>
            <span className="text-right">Apr 2021 - Dec 2021</span>
            </div>
              
              <ul className="list-none mt-2 ">
                <li>● Designed Proof of Concepts (PoCs) demonstrating scalable backend architectures using
                AWS to meet client requirements, successfully demonstrating potential solutions</li>
                <li>● Designed and presented technical solutions through architectural diagrams and
                demonstration, effectively communicating complex concepts to stakeholder</li>
                <li>● Advised end-users on AWS best practices (IAM security, API Gateway, Lambda, ECS, S3,
                  RDS), enhancing system reliability and scalability</li>
              </ul>
            </div>

            <div className="mb-8 ">
              <h3 className="text-xl font-bold ">Business & Technology Delivery Analyst</h3>
              <div className="flex justify-between items-center">
              <span className="text-left">Accenture</span>
              <span className="text-right">Mar 2020 - Apr 2021</span>
              </div>
              <ul className="list-none mt-2 ">
                <li>● Designed and implemented Java microservices, ensuring high scalability</li>
                <li>● Migrated legacy COBOL codebases into modular Java-based microservices, incorporating
                enhancements to optimize system performance and reduce inter-service dependencies</li>
                <li>● Conducted unit testing, debugging, and code reviews to maintain code quality and identify
                opportunities for optimization</li>
                <li>● Troubleshoot and resolved software defects and issues</li>
                <li>● Collaborated with cross-functional teams to analyze requirements and current software
                system</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold">Functional Analyst (Intern)</h3>
              <div className="flex justify-between items-center">
              <span className="text-left">Accenture</span>
              <span className="text-right">Mar 2020 - Apr 2021</span>
              </div>
              <ul className="list-none mt-2">
                <li>● Assisted in the design and implementation of backend application logic and configuration,
                collaborating with senior analysts to meet project requirements</li>
                <li>● Updated requirements based on mined data, ensuring alignment with user expectations,
                which reduced the need for post-deployment changes</li>
                <li>● Conducted defect analysis using data mining techniques to identify patterns and areas for
                additional testing, leading to the early detection of defects and reducing production issues</li>
                <li>● Expanded test cases using data analysis to improve coverage and ensure robust
                application performance</li>
              </ul>
            </div>
          </section>
        ) : (
          <section className=' text-black'>
            <div className="mb-8">
            <h3 className="text-xl font-bold">Graduate Diploma in Systems Analysis</h3>
              <div className="flex justify-between items-center">
              <span className="text-left">National University of Singapore</span>
              <span className="text-right">Feb 2019 - Feb 2020</span>
              </div>
            </div>

            <div className='mb-8'>
            <h3 className="text-xl font-bold">Bachelor of Science (Honours) in Business and Management</h3>
              <div className="flex justify-between items-center">
              <span className="text-left">University of London</span>
              <span className="text-right">Aug 2015 - Jun 2018</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
    </section>
  );
}

export default Experience;
