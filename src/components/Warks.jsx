import React from 'react'
import { Link } from 'react-router-dom';
// import WorksLink from './WorksLink';
import {Title,WorksLink} from './index'
const Warks = () => {
    return(
        <div>
            {/* <section className="Title" >
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
            </section> */}
            <Title 
                backImage="BackImage"
                title="Works" 
                subTitle="ー 制作物 ー" 
                firstUrl="/"
                firstBread="HOME"
                secondUrl="/Warks"
                secondBread="WORKS"
                thirdUrl="#"
                thirdBread=""
            />
            <section className="WorksContainer">
                <WorksLink link="/"imgTitle="SiteImage portfolio" worksTitle="ポートフォリオ" worksText="Web制作 | デザイン | アニメーション" />
                <WorksLink link="#" imgTitle="SiteImage guerrillaRadio" worksTitle="Guerrilla Radio" worksText="Webアプリ開発 | SNS | 音楽機材投稿" />
            </section>
        </div>
    )
}

export default Warks;