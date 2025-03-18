import { Request, Response } from "express";

export const getStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json({ status: "OK" });
  } catch (erro) {
    console.error("Error:", erro);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};
export const sayHello = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json({ status: "hello word " });
  } catch (erro) {
    console.error("Error:", erro);
  }
};
