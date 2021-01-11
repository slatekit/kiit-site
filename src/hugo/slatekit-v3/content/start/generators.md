---
title: Generators
date: 2019-03-17T13:02:30-04:00
section_header: Generators
---


# Overview
Slate Kit comes with a command line tool to serve as a project generator.
This is available on Mac using <strong>HomeBrew</strong>
This project generator is a pacakged java based application, and works like a minimal version of **nodejs yeoman** or **python cookie-cutter**

{{< highlight bash >}}
    
    slatekit new app -name="Sample1" -packageName="mycompany.apps"
    
{{< /highlight >}}

{{% break %}}



# Mac OS
You can easily install the Slate Kit CLI using HomeBrew on Mac OS.
{{% sk-link-cli %}}

{{< highlight bash >}}
     
    brew tap slatekit/slatekit
    brew install slatekit
    
{{< /highlight >}}
<div class="alert alert-danger" role="alert">
    You may experience some issues with the install, consider the following<br/>
    <strong>1:</strong> Ensure System Preferences -> security -> privacy -> full disk access -> iterm2 ( of what ever terminal you use )<br/>
    <strong>2:</strong> <a href="https://discourse.brew.sh/t/brew-install-very-slow-pauses-for-long-period-while-executing-usr-bin-sandbox-exec-in-post-install/7423">The install may be very slow with MacOS Catalina</a>
</div>
{{% break %}}


# Settings
The settings for the generator are automatically created at <strong>~/.slatekit/tools/cli/conf/settings.conf</strong> when you try to create your first project.
The settings are listed below
<table class="table table-bordered table-striped">
    <tr>
        <td><strong>Name</strong></td>
        <td><strong>Type</strong></td>
        <td><strong>Desc</strong></td>
        <td><strong>Example</strong></td>
    </tr>
    <tr>
        <td><strong>slatekit.version</strong></td>
        <td>Variable</td>
        <td>Version of Slate Kit stable libraries to use</td>
        <td>1.34.0 </td>
    </tr>
    <tr>
        <td><strong>slatekit.version.beta</strong></td>
        <td>Variable</td>
        <td>Version of Slate Kit beta libraries to use</td>
        <td>0.64.0 </td>
    </tr>
    <tr>
        <td><strong>kotlin.version</strong></td>
        <td>Variable</td>
        <td>Version of Kotlin to use</td>
        <td>1.3.6</td>
    </tr>
    <tr>
        <td><strong>generation.source</strong></td>
        <td>Variable</td>
        <td>Represents the path to the templates used for project code generation. This is defaulted to the version of Slate Kit installed through HomeBrew</td>
        <td>/usr/local/Cellar/slatekit/1.34.0/templates</td>
    </tr>
</table>
<div class="alert alert-warning" role="alert">
    <strong>Tip:</strong> The tool does <strong>NOT</strong> currently support setting up custom templates, but this is a desired future feature.
</div>
{{% section-end mod="arch/generators" %}}

# Generators
These are all the types of project generators available by default from Slate Kit. These are the most common type of Applications or services corresponding to the architecture components available from Slate Kit.
{{% break %}}

## APP {#app}
Generates a new Slate Kit stand-alone application with support command line args, environments, configs, logging, help usage and more. Refer to the {{% sk-link-arch page="app" name="App" %}} component and example: {{% sk-link-example file="Example_App.kt" name="Example_App.kt" %}}.

{{< highlight bash >}}
     
    :> slatekit new app -name="MyApp1" -packageName="company1.apps"
    
    # Now build and run via gradle
    :> cd MyApp1
    :> gradle build
    :> gradle run
    
{{< /highlight >}}
{{% section-end mod="arch/generators" %}}


## API {#api}
Generates a new API project for hosting HTTP/Web APIs. APIs in Slate Kit are considered **Universal** in the sense that you write them once and they are available as both HTTP/Web APIs ( in the form of RPCs ) and also available on the CLI.
Also refer to the {{% sk-link-arch page="apis" name="APIs" %}} component.

{{< highlight bash >}}
      
    slatekit new api -name="MyAPI1" -packageName="company1.apis"
    
    # Now build and run via gradle
    :> cd MyAPI1
    :> gradle build
    :> gradle run
    
{{< /highlight >}}

<div class="alert alert-warning" role="alert">
    <strong>Tip:</strong> A postman script named <strong>slatekit-samples-postman.json</strong> is also created in the root folder of the generated project. You can import this into PostMan and easily test the API actions/endpoints
</div>
{{% section-end mod="arch/generators" %}}


## CLI {#cli}
Generates a CLI ( Command Line Interface ) application. The CLI in Slate Kit can host Slate Kit APIs.
Also refer to the {{% sk-link-arch page="cli" name="CLI" %}} component and example: {{% sk-link-example file="Example_CLI.kt" name="Example_CLI.kt" %}}.

{{< highlight bash >}}
      
    slatekit new cli -name="MyCLI1" -packageName="company1.apps"
    
    # Now build and run via gradle
    :> cd MyCLI1
    :> gradle build
    :> gradle run
    
{{< /highlight >}}
{{% section-end mod="arch/generators" %}}


## JOB {#job}
Generates a new background job that can be gracefully started, stopped, paused, resumed. They can also be run in "pages", or process items from queues.
Refer to the {{% sk-link-arch page="jobs" name="Jobs" %}} component and example: {{% sk-link-example file="Example_Jobs.kt" name="Example_Jobs.kt" %}}.

{{< highlight bash >}}
     
    slatekit new job -name="MyJob1" -packageName="company1.jobs"
    
{{< /highlight >}}

For the Job, you can run the different job types by passing **-job.name** to the arguments for gradle/java. E.g. 
{{< highlight bash >}}
    
    cd gen/MyJob1
    gradle build

    # To run the One Time Job sample
    gradle run --args='-job.name=onetime'

    # To run the Paged Job sample
    gradle run --args='-job.name=paging'

    # To run the Queue Job sample
    gradle run --args='-job.name=queued'

    # To run the Worker Sample
    gradle run --args='-job.name=worker'
    
{{< /highlight >}}

{{% section-end mod="arch/generators" %}}




