
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}

export async function GET(req: NextApiRequest,
  res: NextApiResponse<ResponseData>) {
    
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    console.log(req.headers)
    if (token) {
        res.setHeader('Set-Cookie', `jwt_token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`);
        localStorage.setItem('jwt_token', token);
        res.redirect('/protected');
    } else {
      return Response.json({ error: 'No token found' })
    }
};

 
