import { getSession } from "next-auth/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>  {
    const session = await getSession({ req });
    if (session) {
        res.statusCode = 200;
    
        const result = await fetch(process.env.NEXTAUTH_URL + "/api/example", {
            headers: {
                authorization: "AUTH_TOKEN"
            }
        });

        res.json(await result.json());
    } else {
        res.status(401);
    }
    res.end();
};