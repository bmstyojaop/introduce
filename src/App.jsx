import React, {useState, useCallback, useEffect} from 'react';
import './assets/styles/style.css'
import {db} from './firebase/index'
import {AnswersList, Chats, FormDialog} from './components/index'


const App = () => {
    const [answers, setAnswers] = useState([]);            // 回答コンポーネントに表示するデータ
    const [chats, setChats] = useState([]);                // チャットコンポーネントに表示するデータ
    const [currentId, setCurrentId] = useState('init');    // 現在の質問ID
    const [dataset, setDataset] = useState({});            // 質問と回答のデータセット
    const [open, setOpen] = useState(false);               // 問い合わせフォーム用モーダルの開閉を管理

    // 問い合わせフォーム用モーダルを開くCallback関数
    const handleOpen = useCallback(() => {
        setOpen(true)
    },[setOpen]);

    // 問い合わせフォーム用モーダルを閉じるCallback関数
    const handleClose = useCallback(() => {
        setOpen(false)
    },[setOpen]);

    // 新しいチャットを追加するCallback関数
    const addChats = useCallback((chat) => {
        setChats(prevChats => {
            return [...prevChats, chat]
        })
    },[setChats]);

    // 次の質問をチャットエリアに表示する関数
    const displayNextQuestion = (nextQuestionId, nextDataset) => {
        // 選択された回答と次の質問をチャットに追加
        addChats({
            text: nextDataset.question,
            type: 'question'
        });

        // 次の回答一覧をセット
        setAnswers(nextDataset.answers)

        // 現在の質問IDをセット
        setCurrentId(nextQuestionId)
    }

    // 回答が選択された時に呼ばれる関数
    const selectAnswer = useCallback((selectedAnswer, nextQuestionId) => {
        switch (true) {
            // お問い合わせが選択された場合
            case (nextQuestionId === 'contact'):
                handleOpen();
                break;

            // リンクが選択された時
            case /^https:*/.test(nextQuestionId):
                const a = document.createElement('a');
                a.href = nextQuestionId;
                a.target = '_blank';
                a.click();
                break;

            // 選択された回答をchatsに追加
            default:
                // 現在のチャット一覧を取得
                addChats({
                    text: selectedAnswer,
                    type: 'answer'
                })

                setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 750)
                break;
        }
    },[answers]);

    // 最初の質問をチャットエリアに表示する
    useEffect(() => {
        (async() => {
            const initDataset = {};

            // Fetch questions dataset from Firestore
            await db.collection('questions').get().then(snapshots => {
                snapshots.forEach(doc => {
                    initDataset[doc.id] = doc.data()
                })
            });

            // Firestoreから取得したデータセットを反映
            setDataset(initDataset);

            // 最初の質問を表示
            displayNextQuestion(currentId, initDataset[currentId])
        })();
    }, []);

    // 最新のチャットが見えるように、スクロール位置の頂点をスクロール領域の最下部に設定する
    useEffect(() => {
        const scrollArea = document.getElementById('scroll-area');
        if (scrollArea) {
            scrollArea.scrollTop = scrollArea.scrollHeight;
        }
    });

    return (
        <section className="c-section">
            <header className="HeaderBox">
                <div className="HeaderBox__right">
                    <img className="HeaderBox__right--logo"/>
                </div>
                <ul className="HeaderBox__links">
                    <li className="HeaderBox__links--element">about</li>
                    <li className="HeaderBox__links--element">works</li>
                    <li className="HeaderBox__links--element">contact</li>
                    <li className="HeaderBox__links--element">qiita</li>
                    <li className="HeaderBox__links--icon">🐥</li>
                    <li className="HeaderBox__links--icon">🐱</li>
                </ul>
            </header>
            <main>
                <section >
                    <div className="MainContainer">
                        <div className="MainContainer__action">
                            <h2 className="MainContainer__action--name">Kota Takahashi</h2>
                            <a href="#" className="MainContainer__action--works">WORKS</a>
                        </div>
                        <div className="c-box">
                            <Chats chats={chats} />
                            <AnswersList answers={answers} select={selectAnswer}/>
                            <FormDialog open={open} handleOpen={handleOpen} handleClose={handleClose}/>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    )
}

export default App;