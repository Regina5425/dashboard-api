import { Request, Response, NextFunction } from 'express';
import { IMiddleware } from './middleware.interface';
import { verify } from 'jsonwebtoken';

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			verify(req.headers.authorization.split(' ')[1], this.secret, (err, payload) => {
				if (err) {
					next();
				} else if (payload) {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					//@ts-ignore
					req.user = payload.email;
					next();
				}
			});
		} else {
			next();
		}
	}
}
