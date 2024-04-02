import React from 'react';
import waltikkaImg from './images/waltikka.png'; 

const Projects = () => {
    // Example project data
    const projects = [
      {
        id: 1,
        image: waltikkaImg,
        imagealt: 'waltikkaImg',
        name: 'Project Waltikka',
        description: 'Our project focused on developing a user-friendly website to visualize real-time data collected from air quality sensors. Through interactive graphs, hotel Waltikka can monitor air quality and temperature.',
        links: [
          { name: 'Github', url: '#' },
          { name: 'Website', url: '#' },
        ]
      }
      // You can add more projects here
    ];
  
    return (
      <div className="container mt-5">
        <div className="card shadow">
          <div className="row" style={{ padding: '1.5rem' }}>
            <h2 className="mb-4">Projects</h2>
            {projects.map((project) => (
              <div className="col-lg-12 mb-4" key={project.id}>
                <div className="card h-100 shadow">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <img
                        src={project.image}
                        alt={project.imagealt}
                        className="card-img"
                        style={{ width: '100%',height: 'auto' }} 
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h2 className="card-title">{project.name}</h2>
                        <p className="card-text">{project.description}</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <ul className="list-group list-group-flush">
                        {project.links.map((link, index) => (
                          <li className="list-group-item" key={index}>
                            <a href={link.url}>{link.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Projects;
