/**
 * @File   : hello.ts
 * @Author : Elijah Cobb (elijah@elijahcobb.com)
 * @Link   : github.com/elijahjcobb
 * @Date   : 4/5/2022, 1:42:17 PM
 */

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	res.status(200).json({ name: 'John Doe' })
}
