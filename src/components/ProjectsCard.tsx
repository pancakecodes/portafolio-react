import React from "react";
import { Col } from "react-bootstrap";

interface ProjectsCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ title, description, image }) => {
  return (
    <Col xs={12} md={6} xl={4}>
      <div className="proj-card">
        <div className="proj-imgbx">
          <img src={image} alt={title} />
          <div className="proj-overlay">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectsCard;
