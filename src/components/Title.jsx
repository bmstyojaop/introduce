import React from 'react'
import { Link } from 'react-router-dom';

const Title = (props) => {
  return(
      <section className="Title" >
          <div className={props.backImage}></div>
          <div className="Title__color first"></div>
          <div className="Title__color second"></div>
          <div className="Title__color third"></div>
          <div className="Texts">
              <div className="Text__title">{props.title}</div>
              <div className="Text__subTitle">{props.subTitle}</div>
              <ul className="Breadcrumbs">
                  <Link to={props.firstUrl}>
                      <li>{props.firstBread}</li>
                  </Link>
                  <li>　&gt;　</li>
                  <Link to={props.secondUrl}>
                      <li>{props.secondBread}</li>
                  </Link>
                  <Link to={props.thirdUrl}>
                      <li>{props.thirdBread}</li>
                  </Link>
              </ul>
          </div>
      </section>
    )
}

export default Title