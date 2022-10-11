// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest, NextApiResponse} from "next";
import  {socials} from '../../components/Layout/LayoutSocials/socials'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method);
  if (req.method === 'GET') {
    res.status(200).json(socials);
  }
}
