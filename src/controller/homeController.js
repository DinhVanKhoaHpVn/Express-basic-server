import pool from '../configs/connectDB';

let getHomePage = async (req, res) => {
    // console.log("Check request: ", req.body);
    const [rows, fields] = await pool.execute('SELECT * FROM `user`');
    // console.log("Check rows: ", rows);
    return res.render('index.ejs', { dataUser: rows });
}

let getUserDetailPage = async (req, res) => {
    // console.log("Check request: ", req.body);
    let id = req.params.id;
    let [rows, fields] = await pool.execute('SELECT * FROM user WHERE id = ?', [id])
    // return res.render('detailUser.ejs', { dataDetailUser: rows });
    return res.send(JSON.stringify(rows))
}

let postCreateNewUser = async (req, res) => {
    let { fistName, lastName, email, address } = req.body;
    // console.log("Check request: ", req.body);
    await pool.execute("INSERT INTO user(fistName, lastName, email, address) VALUES (?, ?, ?, ?)",
        [fistName, lastName, email, address]);
    return res.redirect('/home');
}

let postDeleteUser = async (req, res) => {
    // console.log("Check request: ", req.body);
    await pool.execute(`DELETE FROM user WHERE id = ${req.body.userId}`)
    return res.redirect('/home');
}

let getEditUserPage = async (req, res) => {
    // console.log("Check request: ", req.body);
    let id = req.params.id;
    let [rows, fields] = await pool.execute('SELECT * FROM user WHERE id = ?', [id])
    return res.render('update.ejs', { dataUser: rows[0] });
}

let postUpdateUser = async (req, res) => {
    // console.log("Check request: ", req.body);
    let { id, fistName, lastName, email, address } = req.body;
    await pool.execute('UPDATE user SET fistName = ?, lastName = ?, email = ?, address = ? WHERE id = ?',
        [fistName, lastName, email, address, id])
    return res.redirect('/home');
}

module.exports = {
    getHomePage,
    getUserDetailPage,
    postCreateNewUser,
    postDeleteUser,
    getEditUserPage,
    postUpdateUser
}