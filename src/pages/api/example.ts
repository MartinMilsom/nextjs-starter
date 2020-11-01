import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>  {
    if(req.headers && req.headers["authorization"] === "AUTH_TOKEN") {
        res.statusCode = 200;
        res.json({ data: "Hello, world" });
    } else {
        res.status(401);
    }
    res.end();
};
  