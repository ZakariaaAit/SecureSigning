# vs-console-logger

Simple logger package to log msg with severity and time.
<br/>

## Usage

<br/>
# plain logger without method names

```
import { Logger } from "vs-logger"
const logger = Logger.getInstance("info");
const log = logger.getLogger();
log.info(`some msg`); //[2022-8-20 T14:42:1:740 UTC+02:00] INFO: some msg

```

<br/>
# Logger with method names

```
import { Logger } from "vs-logger"
const logger = Logger.getInstance("info");
const log = logger.getLogger("methodName");
logger.info(`some msg`); //[2022-8-20 T14:42:1:740 UTC+02:00] INFO: methodName: some msg

```

<br/>
# Control log level with env variable

```
// set env variable
process.env.VS_LOGGER_LEVEL = "debug";

// Use logger
import { Logger } from "vs-logger"
const logger = Logger.getInstance();
const log = logger.getLogger("methodName");
logger.debug(`some msg`); //[2022-8-20 T14:42:1:740 UTC+02:00] DEBUG: methodName: some msg

```

## License

MIT (see [LICENSE](https://github.com/vaibhav-sarwade-404/vs-logger/blob/main/LICENSE))

<br/>

## Note

This is experimental package and not actively maintained. Please don't raise issues or feature requests. Only use for development and POC's.
