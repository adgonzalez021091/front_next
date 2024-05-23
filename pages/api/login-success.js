export default async (req, res) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (token) {
        res.setHeader('Set-Cookie', `jwt_token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`);
        localStorage.setItem('jwt_token', token);
        res.redirect('/protected');
    } else {
        res.status(400).json({ error: 'Token not found' });
    }
};