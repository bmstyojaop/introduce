import React from 'react'
import { Link } from 'react-router-dom';


const WorksLink = (props) => {
    return(
        <Link to={props.link}>
            <article className="articleWrap">
                <div className={props.imgTitle}>
                </div>
                <div className="SiteImage__intro">
                    <h2 className="SiteImage__intro--title">{props.worksTitle}</h2>
                    <p className="SiteImage__intro--element">{props.worksText}</p>
                </div>
            </article>
        </Link>
    )
}

export default WorksLink