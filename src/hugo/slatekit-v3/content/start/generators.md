---
title: Generators
date: 2019-03-17T13:02:30-04:00
section_header: Generators
---


# Overview
Slate Kit comes with a command line tool to serve as a project generator.
This is simply a Kotlin executable jar packaged as a Java Application via gradle that can be executed on the command line with bash/batch scripts. The application takes a template comprised of a instructions, along with files/folders that are copied to a new destinated folder representing the app/project to create. The files contain placeholder values that replaced the name of the app aamong other variables. This is a minimal version of **nodejs yeoman** or **python cookie-cutter**

{{< highlight bash >}}
    
    ./slatekit new app -name="Sample1" -package="mycompany.apps"
    
{{< /highlight >}}
{{% break %}}


# Setup
The Slate Kit project generator is a java app ( packaged as a Java application via gradle ) and is composed of containing 3 things:
<table class="table table-bordered table-striped">
    <tr>
        <td><strong>Item</strong></td>
        <td><strong>Type</strong></td>
        <td><strong>Example</strong></td>
        <td><strong>Desc</strong></td>
    </tr>
    <tr>
        <td><strong>1</strong></td>
        <td><strong>scripts</strong></td>
        <td><strong>slatekit and slatekit.bat</strong></td>
        <td>For running the commands</td>
    </tr>
    <tr>
        <td><strong>2</strong></td>
        <td><strong>Settings</strong></td>
        <td><strong>conf/env.conf</strong></td>
        <td>For various settings ( locations )</td>
    </tr>
    <tr>
        <td><strong>3</strong></td>
        <td><strong>Templates</strong></td>
        <td><strong>templates/slatekit/app</strong></td>
        <td>Templates for each project type</td>
    </tr>
</table>
{{% break %}}

## 1. Download
Download the generator by git cloning the tools git repo to your local machine.
E.g. sample folder could be **~/slatekit**.
{{% sk-link-cli %}}
<br/>

## 2. Config
Now you just have to configure 2 settings in the **/slatekit/conf/env.conf** file. Set the **generation.source** to the location of the templates folder in the repo. Set the **generation.output** to the location of the gen folder in the repo. 
{{% sk-tip-generic text="The usr:// scheme is an alias for the current user directory" %}}

{{< highlight props >}}
// Path to the templates
generation.source = usr://slatekit/templates

// Path to the generated projects
generation.output = usr://slatekit/gen
{{< /highlight >}}
{{% sk-tip-generic text="This step will not be needed in a future version" %}}

{{% break %}}


# Usage {#usage}
You can generate a new project by running slatekit with the appropriate commands. Sample structure is shown below
{{% break %}}

## 1: Create
To create a new project just cd to the Slate Kit folder and run the commands.
{{< highlight bash >}}
    # FORMAT: slatekit new {TYPE} -name={NAME} -package={PACKAGE}
    # @name = name of application / folder name
    # @package = the kotlin package name for the app
    
    :> ./slatekit new app -name="MyApp1" -package="mycompany.apps"
    
{{< /highlight >}}
{{% break %}}

## 2: Build
The new project will be created in the **SLATE_KIT_HOME/gen** folder.
You can then cd into that to build it.

{{< highlight bash >}}
    # ~/tools/slatekit
    :> cd gen/MyApp1
    :> gradle build
    
{{< /highlight >}}

{{% break %}}

## 3: Run
Once the project is built, you can simply run with gradle ( as a quick test ).

{{% sk-tip-generic text="For a real build, you will typically package the app and run it using Java" %}}

{{< highlight bash >}}
    :> gradle run
    
{{< /highlight >}}
{{% break %}}


# Future
These are variables/inputs that will be added in the future to further customize the project generation.
<table class="table table-bordered table-striped">
    <tr>
        <td><strong>Name</strong></td>
        <td><strong>Desc</strong></td>
        <td><strong>Example</strong></td>
    </tr>
    <tr>
        <td><strong>gen.output</strong></td>
        <td><strong>Output directory of generated project</strong></td>
        <td>~/myapps/app1 </td>
    </tr>
    <tr>
        <td><strong>sk.version</strong></td>
        <td><strong>Slate Kit Version</strong></td>
        <td>1.0.1 </td>
    </tr>
    <tr>
        <td><strong>kt.version</strong></td>
        <td><strong>Kotlin Version</strong></td>
        <td>1.3.6</td>
    </tr>
</table>

{{% section-end mod="arch/generators" %}}

# Generators
These are all the types of project generators available by default from Slate Kit. These are the most common type of Applications or services corresponding to the architecture components available from Slate Kit.
{{% break %}}

## APP {#app}
Generates a new Slate Kit stand-alone application with support command line args, environments, configs, logging, help usage and more. Refer to the {{% sk-link-arch page="app" name="App" %}} component and example: {{% sk-link-example file="Example_App.kt" name="Example_App.kt" %}}.

{{< highlight bash >}}
    
    ./slatekit new app -name="MyApp1" -package="company1.apps"
    
{{< /highlight >}}
{{% section-end mod="arch/generators" %}}


## API {#api}
Generates a new API project for hosting HTTP/Web APIs. APIs in Slate Kit are considered **Universal** in the sense that you write them once and they are available as both HTTP/Web APIs ( in the form of RPCs ) and also available on the CLI.
Also refer to the {{% sk-link-arch page="apis" name="APIs" %}} component.

{{< highlight bash >}}
    
    ./slatekit new api -name="MyAPI1" -package="company1.apis"
    
{{< /highlight >}}
{{% section-end mod="arch/generators" %}}


## CLI {#cli}
Generates a CLI ( Command Line Interface ) application. The CLI in Slate Kit can host Slate Kit APIs.
Also refer to the {{% sk-link-arch page="cli" name="CLI" %}} component and example: {{% sk-link-example file="Example_CLI.kt" name="Example_CLI.kt" %}}.

{{< highlight bash >}}
    
    ./slatekit new cli -name="MyCLI1" -package="company1.apps"
    
{{< /highlight >}}
{{% section-end mod="arch/generators" %}}


## JOB {#job}
Generates a new background job that can be gracefully started, stopped, paused, resumed. They can also be run in "pages", or process items from queues.
Refer to the {{% sk-link-arch page="job" name="Job" %}} component and example: {{% sk-link-example file="Example_Jobs.kt" name="Example_Jobs.kt" %}}.

{{< highlight bash >}}
    
    ./slatekit new job -name="MyJob1" -package="company1.jobs"
    
{{< /highlight >}}

For the Job, you can run the different job types by passing **-job.name** to the arguments for gradle/java. E.g. 
{{< highlight bash >}}
    
    cd gen/MyJob1
    gradle build

    # To run the One Time Job sample
    gradle run --args='-job.name=single'

    # To run the Paged Job sample
    gradle run --args='-job.name=paging'

    # To run the Queue Job sample
    gradle run --args='-job.name=queued'

    # To run the Worker Sample
    gradle run --args='-job.name=worker'
    
{{< /highlight >}}

{{% section-end mod="arch/generators" %}}

## LIB {#lib}
Generates an empty gradle library project with some Slate Kit library references.

{{< highlight bash >}}
    
    ./slatekit new lib -name="MyLib1" -package="company1.libs"
    
{{< /highlight >}}
{{% section-end mod="arch/generators" %}}

## SQL {#orm}
Generator for this type is coming soon. This will generate a new project containing data models, repositories and services to provide a DDD ( Domain Driven Design) approach to modeling and managing your data.

{{< highlight bash >}}
    
    ./slatekit new sql -name="MyApp1" -package="company1.apps"
    
{{< /highlight >}}
{{% section-end mod="arch/generators" %}}




