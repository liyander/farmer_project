import React from 'react';

const GovernmentSchemes = () => {
  const schemes = [
    {
      title: 'Scheme 1',
      description: 'Description of Scheme 1',
      applicationProcedure: 'Procedure for applying to Scheme 1',
    },
    {
      title: 'Scheme 2',
      description: 'Description of Scheme 2',
      applicationProcedure: 'Procedure for applying to Scheme 2',
    },
    // Add more schemes as needed
  ];

  return (
    <div>
      <h1>Government Schemes</h1>
      <ul>
        {schemes.map((scheme, index) => (
          <li key={index}>
            <h2>{scheme.title}</h2>
            <p>{scheme.description}</p>
            <p><strong>Application Procedure:</strong> {scheme.applicationProcedure}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GovernmentSchemes;