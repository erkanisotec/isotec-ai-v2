type LogLevel = 'info' | 'error' | 'warn' | 'debug';

class BrowserLogger {
  private isDev = process.env.NODE_ENV === 'development';

  private log(level: LogLevel, message: string, ...args: any[]) {
    if (this.isDev) {
      console[level](message, ...args);
    }
  }

  info(message: string, ...args: any[]) {
    this.log('info', message, ...args);
  }

  error(message: string, ...args: any[]) {
    this.log('error', message, ...args);
  }

  warn(message: string, ...args: any[]) {
    this.log('warn', message, ...args);
  }

  debug(message: string, ...args: any[]) {
    this.log('debug', message, ...args);
  }
}

const logger = new BrowserLogger();

export default logger;