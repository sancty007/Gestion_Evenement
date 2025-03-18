import { Request, Response } from "express";

export const getStatus = async (req: Request, res: Response): Promise<void> => {
  res.json({ status: "OK" });
};
export const sayHello = async (req: Request, res: Response): Promise<void> => {
  res.json({ status: "hello word " });
};
