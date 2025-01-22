import React from 'react';
import Image from 'next/image';
import '@/app/styles/Card.css';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  const getTagClass = (tag: string) => {
    switch(tag) {
      case 'TypeScript':
        return 'tag-typescript';
      case 'React':
        return 'tag-react';
      case 'Node':
        return 'tag-node';
      case 'CSS':
        return 'tag-CSS';
      default:
        return 'tag-default';
    }
  };

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="card-container">
      <div className="card-image">
        <Image
          className="image"
          src={img}
          width={350}
          height={200}
          alt={title}
        />
      </div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-description">{desc}</div>
        <div className="tags-container">
          {tags.map((el) => (
            <div className={`tag ${getTagClass(el)}`} key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
