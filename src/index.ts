import { Request, Response, NextFunction } from 'express';

type Callback = (req: Request, res: Response) => any;
type Middleware = (req: Request, res: Response, next: NextFunction) => any;

class CloudFunction {
  /** Method to create express-like callback function to execute on `/path` */
  onReq?(callback: Callback): CloudFunction;
  /** Method to add express-like middleware to request on `/path` */
  mid?(...middleware: Middleware[]): CloudFunction;
  static middleware?: Middleware[];
  static callback?: Callback;
}

const checkSlash = (path: string): string => {
  if (path.split('').shift() !== '/') return '/' + path;
  return path;
};

class Functions {
  [key: string]: CloudFunction | any;

  /** Defines a `/path` for function to be accessed at */
  path(path: string): CloudFunction {
    path = checkSlash(path);
    this[path] = {};
    this[path].middleware = [];
    this[path].onReq = (callback: Callback) => {
      this[path].callback = callback;
      return this[path];
    };
    this[path].mid = (...middleware: Middleware[]) => {
      this[path].middleware = middleware || [];
      return this[path];
    };
    return this[path];
  }
}

export = new Functions();
