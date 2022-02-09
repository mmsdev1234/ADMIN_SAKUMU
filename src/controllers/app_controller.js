'use strict';
const data_aktivasi = require('../data/aktivasi');

//GET
const get_login = async (req, res) => {
    res.render('./pages/login', {
        title: 'Login',
        layout: 'login_layout'
    });
}

//POST
const post_login = async (req, res) => {

}

//API
const post_aktivasi = async (req, res) => {
    try {
        var kode_sekolah = req.header('kd_sekolah');
        var kode_aktivasi = req.header('kd_aktivasi');
        var kode_req = req.body.kd;
        const result = await data_aktivasi.submit(kode_sekolah, kode_aktivasi, kode_req);
        return res.status(result.status).json(result.response);
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    get_login,
    post_login,
    post_aktivasi
}