// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/redux-logger/redux-logger.d.ts
declare module 'redux-logger' {

  type LoggerPredicate = (getState: () => any, action: any) => boolean;

  type StateToString = (state: any) => string;
  type ActionToString = (action: any) => string;
  type ErrorToString = (error: any, prevState: any) => string;

  interface ColorsObject {
    title?: boolean | ActionToString;
    prevState?: boolean | StateToString;
    action?: boolean | ActionToString;
    nextState?: boolean | StateToString;
    error?: boolean | ErrorToString;
  }

  interface LevelObject {
    prevState?: string | boolean | StateToString;
    action?: string | boolean | ActionToString;
    nextState?: string | boolean | StateToString;
    error?: string | boolean | ErrorToString;
  }

  interface ReduxLoggerOptions {
    level?: string | ActionToString | LevelObject;
    duration?: boolean;
    timestamp?: boolean;
    colors?: ColorsObject;
    logger?: any;
    logErrors?: boolean;
    collapsed?: boolean | LoggerPredicate;
    predicate?: LoggerPredicate;
    stateTransformer?: (state: any) => any;
    actionTransformer?: (action: any) => any;
    errorTransformer?: (error: any) => any;
  }

  // Trickery to get TypeScript to accept that our anonymous, non-default export is a function.
  // see https://github.com/Microsoft/TypeScript/issues/3612 for more
  namespace createLogger {}
  function createLogger(options?: ReduxLoggerOptions): Redux.Middleware;
  export = createLogger;
}