import React from 'react'

const ProjectDetail = props => {
  const id = props.match.params.id
  return (
    <div className="container sectionn project-details">
      <div className="card z-path-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laboriosam ea commodi, dolores error eligendi ipsa laudantium sunt
            quidem soluta porro voluptatibus eaque unde, eum maiores, illum
            molestias neque recusandae.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Pakanyizi</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
