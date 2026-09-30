import type { Request, Response, NextFunction } from "express";

export const invalidRoute = (
  req: Request,
  res: Response,
) => {
  return res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
};

export const unhandledError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);

  return res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
