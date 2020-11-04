import React from 'react'
import {Title} from './index'
import { FaHtml5, FaAws, FaReact, FaCss3Alt  } from 'react-icons/fa';


const About = () => {
  return (
    <div>
        <Title 
        backImage="AboutBack"
        title="About" 
        subTitle="ー 自己紹介 ー" 
        firstUrl="/"
        firstBread="HOME"
        secondUrl="#"
        secondBread="ABOUT"
        thirdUrl="#"
        thirdBread=""
        />
        <div className="AboutContainer">
            <section className="IntroduceBox">
                <div className="ProfileImgBox">
                    <div className="ProfileImgBox__img"/>
                    <div className="ProfileImgBox__text">
                        <h1>高橋滉太</h1>
                        <h4>
                          生年月日: 1995/09/19
                        </h4>
                        <p>
                          東海学園大学教育学部をを卒業後、講師として愛知県の小学校に1年間勤務。小学校第二学年の担任として、尽力してきました。<br/>
                          何か新しいことにチャレンジしたいと思い、プログラミングの学習を開始。そこで本格的にWebエンジニアとして働きたいと感じ、テックキャンプ への入学を決意。<br/>
                          フロントエンドエンジニアとしてサービスを開発に携わりたい考え、現在はフロントの技術を中心に学習・転職活動中。
                        </p>
                    </div>
                </div>
                <div className="SkillBox">
                    <h2 className="SkillBox__title">
                        <FaHtml5 />
                        <FaReact/>
                        Skills
                        <FaAws/>
                        <FaCss3Alt />
                    </h2>
                    <div className="SkillsWrap">
                        <div className="SkillList__gridTable">
                            <div className="SkillList__gridTable--head">マークアップ</div>
                            <ul >
                                <li classNme="SkillList__gridTable--data">HTML5</li>
                                <li classNme="SkillList__gridTable--data">CSS3</li>
                            </ul>
                        </div>
                        <div className="SkillList__gridTable">
                            <div className="SkillList__gridTable--head">フロントエンド</div>
                            <ul>
                                <li classNme="SkillList__gridTable--data">JavaScript(ES6)</li>
                                <li classNme="SkillList__gridTable--data">React</li>
                                <li classNme="SkillList__gridTable--data">Redux</li>
                                <li classNme="SkillList__gridTable--data">Material-UI</li>
                                <li classNme="SkillList__gridTable--data">Haml</li>
                                <li classNme="SkillList__gridTable--data">Sass</li>
                            </ul>
                        </div>
                        <div className="SkillList__gridTable">
                            <div className="SkillList__gridTable--head">サーバーサイド<br/>MVCフレームワーク</div>
                            <ul>
                                <li classNme="SkillList__gridTable--data">Ruby</li>
                                <li classNme="SkillList__gridTable--data">Ruby on Rails</li>
                            </ul>
                        </div>
                    </div>
                    <div className="SkillsWrap">
                        <div className="SkillList__gridTable">
                            <div className="SkillList__gridTable--head">AWS</div>
                            <ul>
                                <li classNme="SkillList__gridTable--data">EC2</li>
                                <li classNme="SkillList__gridTable--data">S3</li>
                                <li classNme="SkillList__gridTable--data">RDS(MySQL, postgreSQL)</li>
                                <li classNme="SkillList__gridTable--data">RDS(postgreSQL)</li>
                                <li classNme="SkillList__gridTable--data">IAM</li>
                            </ul>
                        </div>
                        <div className="SkillList__gridTable">
                            <div className="SkillList__gridTable--head">Firebase</div>
                            <ul>
                                <li classNme="SkillList__gridTable--data">Hosting</li>
                                <li classNme="SkillList__gridTable--data">Cloud Firestore</li>
                                <li classNme="SkillList__gridTable--data">Cloud Functions</li>
                            </ul>
                        </div>
                        <div className="SkillList__gridTable">
                            <div className="SkillList__gridTable--head">その他</div>
                            <ul>
                                <li classNme="SkillList__gridTable--data">git</li>
                                <li classNme="SkillList__gridTable--data">npm</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
export default About