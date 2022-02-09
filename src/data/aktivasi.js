'use strict'
const date = require('date-and-time');
const jwt = require('jsonwebtoken');

const invalid_req = {status: 401, response: {status: "no", msg: "invalid request"}};

const submit = async (kode_sekolah, kode_aktivasi, kode_req) => {
    const timestamp = date.format(new Date(),'YYYYMMDDHHmmss');
    if (kode_req !== "sakumu_aktivasi") {
        return invalid_req;
    }else{
        if (kode_sekolah !== "sma_muhipo" || kode_aktivasi !== "sma001") {
            const err_msg = "aktivasi gagal, kode sekolah & kode aktivasi tidak sesuai";
            return {status: 401, response: {status: "no", msg: err_msg}};
        }else{
            const jwt_token = jwt.sign({id: "muhipo1001"}, "secrettYudyJjbHBsla"+timestamp);
            const msg = "aktivasi berhasil, silakan login!"
            const data = {
                key: "tYudyJjbHBsla",
                token: jwt_token,
                lastsync: timestamp
            }
            return {status: 200, response: {status: "ok", msg, data, timestamp}}
        }
    }
}

module.exports = {
    submit,
}