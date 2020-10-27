import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
admin.initializeApp(); //adminを初期化
const db = admin.firestore(); //admin.firestoreを定数に入れておく

//レスポンスを返すための関数
const sendResponse = (response: functions.Response, statusCode: number, body: any) => {
  response.send({
    statusCode,
    body: JSON.stringify(body)
  })
}

// APIの中身
export const addDataset = functions.https.onRequest(async(req: any, res: any) => {
　if (req.method != 'POST') {
  // リクエストがPOSTではない時の処理
  sendResponse(res, 405, {error: 'Invalid Request!'})
  } else {
    const dataset = req.body
    for (const key of Object.keys(dataset)) {
      const data = dataset[key]
      await db.collection('questions').doc(key).set(data)
    }
    sendResponse(res, 200, {message: 'Successfully added dataset!'})
  }
})