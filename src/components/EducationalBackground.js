import React from 'react';

const EducationalBackground = () => {
  // Example educational background data
  const educations = [
    {
      id: 1,
      institution: 'Häme university of applied studies',
      degree: 'Degree programme in business information technology',
      year: ' 2022 - 2025 (ongoing)'
    },
    {
      id: 2,
      institution: 'Tampere High School of Technology',
      degree: 'Mathematics and technology line',
      year: ' 2018 - 2021 '
    },
    // You can add more educational background entries here
  ];

  return (
    <div className="educational-background container mt-5">
      <div className="card shadow">
        <div className="row" style={{ padding: '1.5rem' }}>
        <h2 className="mb-4">Educational Background</h2>
          {educations.map((education) => (
            <div className="col-lg-4 mb-4" key={education.id}>
              <div className="card h-100 shadow">
                <div className="card-header">
                  <h5 className="card-title mb-0">{education.institution}</h5>
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2">
                    {education.degree}
                  </h6>
                </div>
                <div className="card-footer text-muted">
                  <small>{education.year}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationalBackground;
