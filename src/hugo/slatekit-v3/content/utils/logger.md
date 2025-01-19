
# Logger

<table class="table table-striped table-bordered">
  <tbody>
    <tr>
      <td><strong>desc</strong></td>
      <td>A simple logger with extensibility for using other 3rd party loggers</td>
    </tr>
    <tr>
      <td><strong>jar</strong></td>
      <td>kiit.common.jar</td>
    </tr>
    <tr>
      <td><strong>package</strong></td>
      <td>kiit.common.log</td>
    </tr>
    <tr>
      <td><strong>artifact</strong></td>
      <td><a href="https://github.com/orgs/slatekit/packages?q=dev.kiit.kiit-common">dev.kiit:kiit-common</a></td>
    </tr>
    <tr>
      <td><strong>sources</strong></td>
      <td><a href="https://github.com/slatekit/slatekit/tree/master/src/lib/kotlin/slatekit-common/src/main/kotlin/slatekit/common/log" class="url-ch">src/lib/kotlin/slatekit-common/src/main/kotlin/slatekit/common/log</a></td>
    </tr>
    <tr>
      <td><strong>example</strong></td>
      <td><a href="https://github.com/slatekit/slatekit/tree/master/src/lib/kotlin/slatekit-examples/src/main/kotlin/slatekit/examples/Example_Logger.kt" class="url-ch">src/lib/kotlin/slate-examples/src/main/kotlin/slatekit/examples/Example_Logger.kt</a></td>
    </tr>
    <tr>
      <td><strong>dependency</strong></td>
      <td>kiit-results</td>
    </tr>
  </tbody>
</table>
{{% break %}}

## Gradle
{{% sk-install name="kiit-common" %}}
{{% break %}}

## Import
{{< highlight kotlin >}}
  
// required 
import kiit.common.log.*


// optional 
import kiit.results.Try
import kiit.results.Success
  
{{< /highlight >}}
{{% break %}}

## Setup
{{< highlight kotlin >}}



  // NOTE: The logger is very simple and designed to be extended for customization
  // especially to use a more robust logging system such as :
  // 1. log4net
  // 2. loggly
  // 3. new relic
  override val logger:Logger? = LoggerConsole()


  // Setup a custom logger
  class MyCustomLogger : Logger(LogLevel.Warn)  {


    override val logger:Logger? = LoggerConsole()


    override fun performLog(entry: LogEntry)
    {
      println("custom logger : " + entry.level + " : " + entry.msg)
    }
  }


  


{{< /highlight >}}
{{% break %}}

## Usage
{{< highlight kotlin >}}


    // Sample exception
    val ex = IllegalArgumentException("Example exception")

    // CASE 1: Different ways to log with the static logger
    // 1. message only
    // 2. message + exception
    // 3. message + exception + tag
    val logger = LoggerConsole(LogLevel.Debug)
    logger.debug("debug with message only")
    logger.info("info with message and exception", ex)
    logger.warn("debug with message, exception, and tag", ex)
    logger.fatal("fatal message")

    // CASE: 2 Standard info, warn, error levels available
    // Same overloads ( msg, ex, tag ) are available.
    logger.debug("debug")
    logger.info("info")
    logger.warn("warn")
    logger.error("error")
    logger.fatal("fatal")


    // CASE 3: Log explicitly using log method.
    logger.log(LogLevel.Error, "error", ex)


    // CASE 4: You can extend a class with the LogSupportIn trait
    // to add logging methods to any class. The trait expects to have
    // a _log member variable available.
    debug("debug from trait")
    info ("info from trait")
    warn ("warn from trait")
    error("error from trait")
    fatal("fatal from trait")


    // CASE 5: Custom logger ( see setup above )
    // YOu just have to implement the log method.
    val log = MyCustomLogger()
    log.debug("debug from trait")
    log.info ("info from trait")
    log.warn ("warn from trait")
    log.error("error from trait")
    log.fatal("fatal from trait")
    

{{< /highlight >}}
{{% break %}}

