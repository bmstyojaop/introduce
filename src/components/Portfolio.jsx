import React from 'react'
import {Title} from './index'

const Portfolio = () => {
  return(
    <div>
      <Title 
        backImage="PortfolioBack"
        title="PORTFOLIO" 
        subTitle="ー ポートフォリオサイト ー" 
        firstUrl="/"
        firstBread="HOME"
        secondUrl="/Warks"
        secondBread="WORKS"
        thirdUrl="/Portfolio"
        thirdBread="　&gt;　PORTFOLIO"
      />
      <main>
          <section className="ImgContainer">
              <div className="ImageWrap">
                  <div className="WorkImg portfolio" />
              </div>
          </section>
          <section className="WorkDetails">
              <section className="WorkDetails__part">
                  <h3 className="WorkDetails__part--title">
                      概要
                  </h3>
                  <p className="WorkDetails__part--text">
                      高橋滉太のポートフォリオサイト
                  </p>
              </section>
              <section className="WorkDetails__part">
                  <h3 className="WorkDetails__part--title">
                      用途・目的
                  </h3>
                  <p className="WorkDetails__part--text">
                      ポートフォリオサイトとして作成しました。<br/>
                      チャットボットを組み込んでコンタクトを取りやすくしたり、アニメーションをつけて訪れた人が楽しめることにこだわったりました。<br/>
                      また、素速いページの読み込み、コードの保守性を高めるためにReactを採用しました。
                  </p>
              </section>
              <section className="WorkDetails__part">
                  <h3 className="WorkDetails__part--title">
                      使用技術
                  </h3>
                  <p className="WorkDetails__part--text">
                      HTML　/　CSS　/　JavaScript(JSX) <br/>
                      React　/　react-router-dom　/　Material-ui <br/>
                      Firebase Hosting　/　Firestore　/　Cloud Functions
                  </p>
              </section>
              <section className="WorkDetails__part">
                <h2 className="WorkDetails__part--title">
                    リンク
                </h2>
                <p>このサイトなので省略</p>
              </section>
          </section>

      </main>


    </div>
  )
}

export default Portfolio;