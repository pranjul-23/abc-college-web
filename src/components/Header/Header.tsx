import React from 'react';
import './Header.css';

interface Props {
  title: string;
  downloadText: string
}

const Header:React.FC<Props> = (props) => {
  return (
    <div className="header">
      <h1 className="header-title">{props.title}</h1>
      <a className="download-collection" href="/postman/assignment.postman_collection.json" download>
        {props.downloadText}
      </a>
    </div>
  );
}

export default Header;
