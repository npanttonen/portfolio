import React from 'react';

const EducationalBackground = () => {
  // Example educational background data
  const educations = [
    {
      id: 1,
      institution: 'Kartanon Kiinteistöpalvelut',
      degree: 'Ulkoalueiden hoito- ja kunnossapitotyö',
      year: ' 1.7.2019-2.8.2019'
    },
    {
      id: 2,
      institution: 'Kartanon Kiinteistöpalvelut',
      degree: 'Ulkoalueiden hoito- ja kunnossapitotyö',
      year: '6.7.2019-7.8.2020'
    },
    {
        id: 3,
        institution: 'Kartanon Kiinteistöpalvelut',
        degree: 'Ulkoalueiden hoito- ja kunnossapitotyö',
        year: '6.7.2019-7.8.2020'
      },
      {
        id: 4,
        institution: 'Kartanon Kiinteistöpalvelut',
        degree: 'Ulkoalueiden hoito- ja kunnossapitotyö',
        year: '15.5.2023-4.8.2023'
      },
    // You can add more educational background entries here
  ];

  return (
    <div className="educational-background container mt-5">
      <div className="card shadow">
        <div className="row" style={{ padding: '1.5rem' }}>
        <h2 className="mb-4">Work experience</h2>
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
