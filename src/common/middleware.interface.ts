import { Response, Request, NextFunction, Router } from 'express';

export interface IMiddleware {
	execute: (req: Request, res: Response, next: NextFunction) => void;
}
