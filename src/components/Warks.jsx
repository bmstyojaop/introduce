import React from 'react'
import { Link } from 'react-router-dom';


const Warks = () => {
    return(
      <div>
          <section className="Title" >
              <div className="BackImage"></div>
              <div className="Title__color first"></div>
              <div className="Title__color second"></div>
              <div className="Title__color third"></div>
              <div className="Texts">
                  <div className="Text__title">Works</div>
                  <div className="Text__subTitle">ー 制作物 ー</div>
                  <ul className="Breadcrumbs">
                    <Link to="/">
                        <li>HOME</li>
                    </Link>
                    <li>　&gt;　</li>
                    <li>WORKS</li>
                  </ul>
              </div>
          </section>
          <section className="WorksContainer">
              <article className="articleWrap">
                  <div classNeme="SiteImage portfolio">
                  </div>
                  <div className="SiteImage__intro">
                      <h2 className="SiteImage__intro--title"></h2>
                      <p className="SiteImage__intro--element">Web制作 | デザイン | アニメーション</p>
                  </div>
              </article>

              <article className="SiteImage guerrillaRadio">

                  <div className="SiteImage__intro">
                      <h2 className="SiteImage__intro--title">Guerrilla Radio</h2>
                      <p className="SiteImage__intro--element">Webアプリ開発 | SNS | 音楽機材投稿</p>
                  </div>
              </article>
          </section>



      </div>
    )
}

export default Warks;