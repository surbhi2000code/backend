const express = require('express')
const mysql= require('mysql')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'game'
});

db.connect(function(err){
    if (err) throw err;
    console.log("connected");
})

app.post('/page', (req, res) => {

    const { pageName, pageHeading, pageDescription, payment, status, due } = req.body;
    db.query(`INSERT INTO page (pageName, pageHeading, pageDescription, payment, status, due) VALUES (?,?,?,?,?,?)`,
        [pageName, pageHeading, pageDescription, payment, status, due],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/promo', (req, res) => {

    const { promoCode, promoDir, validity, promoStatus } = req.body;
    db.query(`INSERT INTO promo (promoCode, promoDir, validity, promoStatus) VALUES (?,?,?,?)`,
        [promoCode, promoDir, validity, promoStatus],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/orders', (req, res) => {

    const { userId, timePeriod, cardtype, amount } = req.body;
    db.query(`INSERT INTO orders (userId, timePeriod, cardtype, amount) VALUES (?,?,?,?)`,
        [userId, timePeriod, cardtype, amount],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/result', (req, res) => {

    const { record, result } = req.body;
    db.query(`INSERT INTO result (record, result) VALUES (?,?)`,
        [record, result],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/rules', (req, res) => {

    const { rules, status } = req.body;
    db.query(`INSERT INTO rules (rules, status) VALUES (?,?)`,
        [rules, status],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/takec', (req, res) => {

    const { takec, tstatus } = req.body;
    db.query(`INSERT INTO takec (takec, tstatus) VALUES (?,?)`,
        [takec, tstatus],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})
app.post('/period', (req, res) => {

    const { period, duration } = req.body;
    db.query(`INSERT INTO period (period, duration) VALUES (?,?)`,
        [period, duration],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/payment', (req, res) => {

    const { payment, paymentContent, paymentImage, status, dateTime } = req.body;
    db.query(`INSERT INTO payment (payment, paymentContent, paymentImage, status, dateTime) VALUES (?,?,?,?,?)`,
        [payment, paymentContent, paymentImage, status, dateTime],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})
app.post('/tickets', (req, res) => {

    const { userId, subject, memory } = req.body;
    db.query(`INSERT INTO tickets (userId, subject, memory) VALUES (?,?,?)`,
        [userId, subject, memory],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/wallet', (req, res) => {

    const { userId, store, close, token } = req.body;
    db.query(`INSERT INTO wallet (userId, store, close, token) VALUES (?,?,?,?)`,
        [userId, store, close, token],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})
app.post('/games', (req, res) => {

    const { A, Lower, O } = req.body;
    db.query(`INSERT INTO games (A, Lower, O) VALUES (?,?,?)`,
        [A, Lower, O],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})

app.post('/admin', (req, res) => {

    const { userName, password, status } = req.body;
    db.query(`INSERT INTO admin (userName, password, status) VALUES (?,?,?)`,
        [userName, password, status],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})


app.listen(5000, ()=>{
    console.log('server is run on 5000');
})