import { NextFunction, Request, Response } from "express";

export const loggingMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
};
