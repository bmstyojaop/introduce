import React from 'react'
import {Title,WorksLink} from './index'
const Warks = () => {
    return(
        <div>
            <Title 
                backImage="BackImage"
                title="WORKS" 
                subTitle="ー 制作物 ー" 
                firstUrl="/"
                firstBread="HOME"
                secondUrl="/Warks"
                secondBread="WORKS"
                thirdUrl="#"
                thirdBread=""
            />
            <section className="WorksContainer">
                <WorksLink link="/Portfolio"imgTitle="SiteImage portfolio" worksTitle="ポートフォリオ" worksText="Web制作 | デザイン | アニメーション" />
                <WorksLink link="#" imgTitle="SiteImage guerrillaRadio" worksTitle="Guerrilla Radio" worksText="Webアプリ開発 | SNS | 音楽機材投稿" />
            </section>
        </div>
    )
}

export default Warks;