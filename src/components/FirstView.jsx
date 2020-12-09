import {AnswersList, Chats, FormDialog} from './index'
import React, {useState, useCallback, useEffect} from 'react';
import {db} from '../firebase/index'
import { Link } from 'react-router-dom'



const FirstView = () => {
    const [answers, setAnswers] = useState([]);            // 回答コンポーネントに表示するデータ
    const [chats, setChats] = useState([]);                // チャットコンポーネントに表示するデータ
    const [currentId, setCurrentId] = useState('init');    // 現在の質問ID
    const [dataset, setDataset] = useState({});            // 質問と回答のデータセット
    const [open, setOpen] = useState(false);               // 問い合わせフォーム用モーダルの開閉を管理

    const handleOpen = useCallback(() => {
        setOpen(true)
    },[setOpen]);

    const handleClose = useCallback(() => {
        setOpen(false)
    },[setOpen]);

    const addChats = useCallback((chat) => {
        setChats(prevChats => {
            return [...prevChats, chat]
        })
    },[setChats]);

    const displayNextQuestion = (nextQuestionId, nextDataset) => {
        addChats({
            text: nextDataset.question,
            type: 'question'
        });

        setAnswers(nextDataset.answers)

        setCurrentId(nextQuestionId)
    }

    const selectAnswer = useCallback((selectedAnswer, nextQuestionId) => {
        switch (true) {
            case (nextQuestionId === 'contact'):
                handleOpen();
                break;

            case /^https:*/.test(nextQuestionId):
                const a = document.createElement('a');
                a.href = nextQuestionId;
                a.target = '_blank';
                a.click();
                break;

            default:
                addChats({
                    text: selectedAnswer,
                    type: 'answer'
                })

                setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 500)
                break;
        }
    },[answers]);

    useEffect(() => {
        (async() => {
            const initDataset = {};

            await db.collection('questions').get().then(snapshots => {
                snapshots.forEach(doc => {
                    initDataset[doc.id] = doc.data()
                })
            });

            setDataset(initDataset);

            displayNextQuestion(currentId, initDataset[currentId])
        })();
    }, []);

    useEffect(() => {
        const scrollArea = document.getElementById('scroll-area');
        if (scrollArea) {
            scrollArea.scrollTop = scrollArea.scrollHeight;
        }
    });
    return(
        <div className="MainContainer">
            <div className="MainContainer__action">
                <h2 className="MainContainer__action--name">Kota Takahashi</h2>
                <div className="MainContainer__action--works">
                    <Link to="/Warks">
                        WORKS
                    </Link>
                </div>
            </div>
            <div className="ChatsBox">
                <Chats chats={chats} />
                <AnswersList answers={answers} select={selectAnswer}/>
                <FormDialog open={open} handleOpen={handleOpen} handleClose={handleClose}/>
            </div>
        </div>
    )
}

export default FirstView