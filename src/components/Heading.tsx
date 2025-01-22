import React from 'react';
import '@/app/styles/Heading.css';

interface PropsType {
    title: string;
}

const Headings: React.FC<PropsType> = ({ title }) => {
  return (
    <div className="heading-container">
        <p className="heading-title">{title}</p>
    </div>
  );
}

export default Headings;
