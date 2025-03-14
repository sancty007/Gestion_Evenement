import { Request, Response } from "express";

export const getStatus = async (_req: Request, res: Response) => {
  res.json({ status: "OK" });
};
