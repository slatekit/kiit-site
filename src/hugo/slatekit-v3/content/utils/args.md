
# Args

<table class="table table-striped table-bordered">
  <tbody>
    <tr>
      <td><strong>desc</strong></td>
      <td>A lexical command line argument parser with optional support for allowing a route/method call in the beginning</td>
    </tr>
    <tr>
      <td><strong>date</strong></td>
      <td>{{% sk-version-date %}}</td>
    </tr>
    <tr>
      <td><strong>version</strong></td>
      <td>{{% sk-version-number %}}</td>
    </tr>
    <tr>
      <td><strong>jar</strong></td>
      <td>slatekit.common.jar</td>
    </tr>
    <tr>
      <td><strong>namespace</strong></td>
      <td>slatekit.common.args</td>
    </tr>
    <tr>
      <td><strong>artifact</strong></td>
      <td>com.slatekit:slatekit-common</td>
    </tr>
    <tr>
      <td><strong>source folder</strong></td>
      <td><a href="https://github.com/slatekit/slatekit/tree/master/src/lib/kotlin/slatekit-common/src/main/kotlin/slatekit/common/args" class="url-ch">src/lib/kotlin/slatekit-common/src/main/kotlin/slatekit/common/args</a></td>
    </tr>
    <tr>
      <td><strong>example</strong></td>
      <td><a href="https://github.com/slatekit/slatekit/tree/master/src/lib/kotlin/slatekit-examples/src/main/kotlin/slatekit/examples/Example_Args.kt" class="url-ch">src/lib/kotlin/slate-examples/src/main/kotlin/slatekit/examples/Example_Args.kt</a></td>
    </tr>
    <tr>
      <td><strong>depends on</strong></td>
      <td> slatekit-results</td>
    </tr>
  </tbody>
</table>
{{% break %}}

## Gradle
{{< highlight gradle >}}
    // other setup ...
    repositories {
        maven { url  "https://dl.bintray.com/codehelixinc/slatekit" }
    }

    dependencies {
        // other libraries

        // slatekit-common: Utilities for Android or Server
        compile 'com.slatekit:slatekit-common:0.9.35'
    }

{{< /highlight >}}
{{% break %}}

## Import
{{< highlight kotlin >}}


// required 
import slatekit.common.args.Args
import slatekit.common.args.ArgsSchema


// optional 
import slatekit.cmds.Command
import slatekit.cmds.CommandRequest
import slatekit.results.Success
import slatekit.results.Try
import slatekit.results.getOrElse




{{< /highlight >}}
{{% break %}}

## Setup
{{< highlight kotlin >}}


n/a


{{< /highlight >}}
{{% break %}}

## Usage
{{< highlight kotlin >}}


    // Example:
    // Given on the the command line:
    // -log.level=info -env=dev -text='hello world'
    showResults( Args.parse( "-log.level=info -env=dev -text='hello world'") )

    // CASE 1: Parse using an action prefixed to the arguments
    showResults( Args.parse( "service.action -log.level=info -env=dev -text='hello world'", hasAction = true) )


    // CASE 2: Custom prefix and sep e.g. "!" and separator ":"
    showResults( Args.parse( "!env=dev !text='hello word' !batch:10 ", prefix = "!", sep = ":") )


    // CASE 3a: Check for action/method call in the beginning
    val args = Args.parse( "manage.movies.createSample -title='Dark Knight' -date='2013-07-18'", hasAction = true )
    showResults( args )
    args.onSuccess { args ->
      args.getString("title")
      args.getLocalDate("date")
    }

    // CASE 3c: Check for only action name in the beginning.
    showResults( Args.parse( "method", prefix = "-", sep = "=", hasAction = true ) )


    // CASE 4: No args
    showResults( Args.parse( "service.method", prefix = "-", sep = "=", hasAction = true ) )


    // CASE 5a: Help request ( "?", "help")
    showResults( Args.parse( "?"         ) )


    // CASE 5b: Help request with method call ( "method.action" ? )
    showResults( Args.parse( "service.method help"   , hasAction = true ) )


    // CASE 6: Version request ( "ver", "version" )
    showResults( Args.parse( "version"  ) )


    // CASE 7: Exit request
    showResults( Args.parse( "exit"     ) )


    // CASE 8: Build up the schema
    val schema = ArgsSchema().text("env", "env").flag("log", "log").number("level", "level")
    print(schema)

    

{{< /highlight >}}
{{% break %}}


## Output

{{< highlight bat >}}
  RESULTS:
  action   :
  prefix   : '-'
  separator: ':'
  named    : 3
  	text : hello world
  	batch : 10
  	env : dev
  index    : 0


  RESULTS:
  action   :
  prefix   : '!'
  separator: '='
  named    : 3
  	text = hello word
  	batch = 10
  	env = dev
  index    : 0


  RESULTS:
  action   : area.service.method
  parts    : area service method
  prefix   : '-'
  separator: '='
  named    : 3
  	text = hello word
  	batch = 10
  	env = dev
  index    : 0


  RESULTS:
  action   : service.method
  parts    : service method
  prefix   : '-'
  separator: '='
  named    : 3
  	text = hello word
  	batch = 10
  	env = dev
  index    : 0


  RESULTS:
  action   : method
  parts    : method
  prefix   : '-'
  separator: '='
  named    : 0
  index    : 0
  empty


  RESULTS:
  action   : service.method
  parts    : service method
  prefix   : '-'
  separator: '='
  named    : 0
  index    : 0
  empty


  RESULTS:
  action   :
  prefix   : '-'
  separator: ':'
  named    : 0
  index    : 1
  	?
  help


  RESULTS:
  action   : service.method.help
  parts    : service method help
  prefix   : '-'
  separator: ':'
  named    : 0
  index    : 0
  empty


  RESULTS:
  action   :
  prefix   : '-'
  separator: ':'
  named    : 0
  index    : 1
  	version
  version


  RESULTS:
  action   :
  prefix   : '-'
  separator: ':'
  named    : 0
  index    : 1

{{< /highlight >}}
  