import React from 'react'
import {Title} from './index'
import { FaExternalLinkAlt } from 'react-icons/fa';

const Guerrilla = () => {
  return(
    <div>
      <Title 
        backImage="GuerrillaBack"
        title="Guerrila Radio" 
        subTitle="ー 音楽機材投稿アプリ ー" 
        firstUrl="/"
        firstBread="HOME"
        secondUrl="/Warks"
        secondBread="WORKS"
        thirdUrl="/Guerrilla"
        thirdBread="　&gt;　Guerrilla Radio"
      />
      <main>
          <section className="ImgContainer">
              <div className="ImageWrap">
                  <div className="WorkImg guerrillaRadio" />
              </div>
          </section>
          <section className="WorkDetails">
              <section className="WorkDetails__part">
                  <h3 className="WorkDetails__part--title">
                      概要
                  </h3>
                  <p className="WorkDetails__part--text">
                      音楽機材投稿アプリ
                  </p>
              </section>
              <section className="WorkDetails__part">
                  <h3 className="WorkDetails__part--title">
                      用途・目的
                  </h3>
                  <p className="WorkDetails__part--text">
                      音楽好きによる音楽好きのための音楽機材投稿アプリです。<br/>
                      ただただ楽器を眺めたい、楽器を自慢したいというときがバンドマンにはありますよね。しかしTwitterやinstagramでは、わざわざ検索をしないといけない。それに検索ワードを考えないと、特定の楽器しか表示されていかない。<br/>
                      そこで！！こんなアプリを開発しました！楽器屋さんをイメージした木目調の背景画像の前に並ぶ音楽機材だけの世界。店内を見回すような感覚になってもらうために基本のスクロールは横方向にしてみました。<br/>
                      まだまだ改良中のアプリです。是非一度触っていただいて、フィードバックをいただけると嬉しい限りです。
                  </p>
              </section>
              <section className="WorkDetails__part">
                  <h3 className="WorkDetails__part--title">
                      使用技術
                  </h3>
                  <p className="WorkDetails__part--text">
                      HTML　/　haml　/　CSS　/ Sass <br/>
                      JavaScript(ES6)　/　jQuery <br/>
                      Ruby　/　Ruby on Rails <br/>
                      postgreSQL　/　heroku
                  </p>
              </section>
              <section className="WorkDetails__part">
                <h2 className="WorkDetails__part--title" >
                    リンク
                </h2>
                <a href="https://guerrillaradio.herokuapp.com/" className="WorkDetails__part--link">
                  Guerrilla Radio　
                  <FaExternalLinkAlt />
                </a>
              </section>
          </section>

      </main>


    </div>
  )
}

export default Guerrilla;