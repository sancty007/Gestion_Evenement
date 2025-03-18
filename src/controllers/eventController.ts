import { Request, Response } from "express";

export const getStatus = async (
  _req: Request,
  res: Response
): Promise<void> => {
  res.json({ status: "OK" });
};
