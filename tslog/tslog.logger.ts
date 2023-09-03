import Logger from "../core/logger"
import { Logger as TSLog, ISettingsParam } from "tslog"

export default class TSLogLogger<T> implements Logger {
  private tslog: TSLog<T>

  constructor(options: ISettingsParam<T> = {}, tslog = new TSLog<T>(options)) {
    this.tslog = tslog
  }

  public log(value: unknown) {
    this.tslog.silly(value)
  }

  public warn(value: unknown) {
    this.tslog.warn(value)
  }

  public error(value: unknown) {
    this.tslog.error(value)
  }

  public info(value: unknown) {
    this.tslog.info(value)
  }
}
