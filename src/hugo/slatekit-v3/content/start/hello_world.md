---
title: Hello World
date: 2019-03-17T13:02:30-04:00
section_header: Hello World
---

# Overview
Slate Kit comes with a command line project generation tool which is available below. You can create a new app quickly using the commands below.
{{% sk-link-cli %}}

{{% break %}}


# Hello World
The Slate Kit application leverages several of the utilities to provide a pre-built standalone application with support for command line args, environments, confs, logging, help usage and more. This is just 1 type of project you can create.

{{< highlight bash >}}
    
    slatekit new app -name="Sample1" -packageName="mycompany.apps"
    
{{< /highlight >}}
<div class="alert alert-warning" role="alert">
    <strong>Tip:</strong> This shows using the slatekit cli on a Mac installed via HomeBrew
</div>
{{% break %}}


# Create
You can create several different project types using the generator.
{{< highlight bash >}}
    
    slatekit new app -name="MyApp1" -packageName="company1.apps"
    slatekit new api -name="MyAPI1" -packageName="company1.apis"
    slatekit new cli -name="MyCLI1" -packageName="company1.apps"
    slatekit new job -name="MyJob1" -packageName="company1.jobs"
    slatekit new env -name="MyApp2" -packageName="company1.apps"
    
{{< /highlight >}}
<div class="alert alert-warning" role="alert">
    <strong>Tip:</strong> See the <a href="/start/generators">Generators</a> page for more info on using the Slate Kit CLI tool for generating various project types.
</div>
{{% break %}}



