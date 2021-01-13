---
title: Overview
date: 2019-03-17T13:02:30-04:00
section_header: Overview
---

# Overiew
  <p>
      Slate Kit is a <strong><a class="url-ch" href="http://www.kotlinlang.org">Kotlin</a></strong> based tool-kit containing **architecture components and utilities**. It is comprised of several projects and modular components that collectively provide pre-built architecture that can be used to build applications for both Server and Android, optimizing for code/component reuse. There are also various interfaces to abstract over Cloud infrastrature such as files/queues to decouple / "unbundle" from Cloud Providers ( although AWS implementations are available by default ).
  </p>
{{% break %}}

# Goals
<p>
  The Slate Kit framework was designed for and extracted from a sizable and sophisticated production Android Application with a Server backend. Slate Kit is a **Kotlin first** framework architected with the explicit goals below in mind:
</p>
<table class="table table-bordered table-striped">
    <tr><td><strong>Simple</strong></td><td>Designed with simplicity in mind, modular and very light-weight.</td></tr>
    <tr><td><strong>Kotlin</strong></td><td>100% Kotlin, emphasis on functional, immutable code (pragmatically, without pure FP)</td></tr>
    <tr><td><strong>Shared</strong></td><td>Full-Stack, resonably light-weight and suitable for most needs on both Android and Server.</td></tr>
    <tr><td><strong>Platforms</strong></td><td>Long-term goals of making this support Kotlin Multi-Platform/Native</td></tr>
    <tr><td><strong>Costs</strong></td><td>Reducing costs with rapid development, full-stack / sharable code for both Server and Android.</td></tr>
    <tr><td><strong>Portability</strong></td><td>Reasonable abstractions of Cloud components for portability between cloud providers</td></tr>
</table>
{{% section-end mod="start/overview" %}}

# Uses
<p>
  Slate Kit can be used to quickly build well structured and scalable architecture and applications for different target groups.
</p>
<table class="table table-bordered table-striped">
    <tr><td><strong>Startups</strong></td><td> Start with a strong base architecture to quickly build high-quality MVPs (Minimum Viable Products) that can scale</td></tr>
    <tr><td><strong>SMB</strong></td><td>For small to medium sized businesses, build backend applications with pre-built application/service templates/components</td></tr>
    <tr><td><strong>Mobile</strong></td><td> Set up the back-end for your mobile apps. Use Kotlin code for both Android and the Server</td></tr>
    <tr><td><strong>Personal</strong></td><td>Learn Kotlin, functional programming, for self-improvement or side projects</td></tr>
    <tr><td><strong>Enterprise</strong></td><td>There are several components in Slate Kit that can currently be used in the Enterprise, such as the App, Utilities, CLI. However, Slate Kit is simpler and thus less comprehensive in some areas than enterprise offerings such as Spring.io, Vertx.io, Micronaut.io, all of which are very solid solutions and recommendations for the enterprise.</td></tr>
</table>
{{% section-end mod="start/overview" %}}


# Tech
<p>
  Slate Kit is built for the <strong>JVM</strong> using <strong>100% Kotlin</strong>. There are thin abstractions over some infrastructure services such as Files, queues, docs. Currently, only AWS implementations are available for the infrastructure abstractions. However, in the future, support for Google and Azure cloud services may be implemented. Other services are using directly.
</p>
<table class="table table-bordered table-striped">
    <tr>
        <td><strong>Infrastructure</strong></td>
        <td><strong>Usage</strong></td>
        <td>Provider</td>
    </tr>
    <tr>
        <td><strong>Files</strong></td>
        <td><strong>Abstracted</strong></td>
        <td>AWS S3 ( see {{% sk-link-arch page="files" name="files" %}} )</td>
    </tr>
    <tr>
        <td><strong>Queues</strong></td>
        <td><strong>Abstracted</strong></td>
        <td>AWS SQS ( see {{% sk-link-arch page="queues" name="queues" %}} )</td>
    </tr>
    <tr>
        <td><strong>Documents</strong></td>
        <td><strong>Abstracted</strong></td>
        <td>AWS Dynamo ( see {{% sk-link-arch page="docs" name="docs" %}} )</td>
    </tr>
    <tr>
        <td><strong>Entities</strong></td>
        <td><strong>Abstracted</strong></td>
        <td>Support for MySql ( see {{% sk-link-arch page="data" name="data" %}} docs )PostGres & Mongo coming soon</td>
    </tr>
    <tr>
        <td><strong>Http Server</strong></td>
        <td><strong>Direct Usage</strong></td>
        <td>Ktor ( from JetBrains ) - used as the API server</td>
    </tr>
    <tr>
        <td><strong>Http Client </strong></td>
        <td><strong>Partially Abstracted</strong></td>
        <td>OkHttp </td>
    </tr>
    <tr>
        <td><strong>Metrics</strong></td>
        <td><strong>Partially Abstracted</strong></td>
        <td>Micrometer.io ( see {{% sk-link-arch page="tracking" name="tracking" %}} )</td>
    </tr>
    <tr>
        <td><strong>Logs</strong></td>
        <td><strong>Abstracted</strong></td>
        <td>Logback ( see {{% sk-link-util page="logger" name="logger" %}} )</td>
    </tr>
    <tr>
        <td><strong>SMS</strong></td>
        <td><strong>Abstracted</strong></td>
        <td>Twilio ( see {{% sk-link-arch page="sms" name="sms" %}} )</td>
    </tr>
    <tr>
        <td><strong>Email</strong></td>
        <td><strong>Abstracted</strong></td>
        <td>SendGrid ( see {{% sk-link-arch page="email" name="email" %}} )</td>
    </tr>
    <tr>
        <td><strong>Alerts</strong></td>
        <td><strong>Abstracted</strong></td>
        <td>Slack Web Hooks ( see {{% sk-link-arch page="alerts" name="alerts" %}} )</td>
    </tr>
    <tr>
        <td><strong>Dates</strong></td>
        <td><strong>Aliased</strong></td>
        <td>ThreeTen BP is used for Full-Stack / Android alignment</td>
    </tr>
</table>
{{% section-end mod="start/overview" %}}


# Components
These are the main architecture components available in Slate Kit.
{{% sk-modules %}}
{{% section-end mod="start/overview" %}}


## Philosophy
{{% sk-philosophy %}}
{{% section-end mod="start/overview" %}}


## Releases
{{% sk-release-cycle %}} 
{{% section-end mod="start/overview" %}}

## Performance
Performance details of the various modules will be coming soon and available/documented within each applicable module such as Jobs, APIs, Queues, etc. Generally speaking, most modules are thin layers over existing items and are expected to not impact performance and or be fairly negligable such as the thin abstractions over Cloud Queues/Files such as AWS S3/SQS.
<table class="table table-bordered table-striped">
    <tr>
        <td><strong>Type</strong></td>
        <td><strong>Security</strong></td>
        <td><strong>Note(s)</strong></td>
    </tr>
    <tr>
        <td>{{% sk-link-arch page="queues" name="Files" %}}</td>
        <td>AWS S3</td>
        <td>Also refer to AWS S3 docs</td>
    </tr>
    <tr>
        <td>{{% sk-link-arch page="queues" name="Queues" %}}</td>
        <td>AWS SQS</td>
        <td>Also refer to AWS SQS docs</td>
    </tr>
    <tr>
        <td>{{% sk-link-arch page="apis" name="APIs" %}}</td>
        <td>Web/Http APIs</td>
        <td>Built on top of Ktor. See module for upcoming docs on performance</td>
    </tr>
    <tr>
        <td>{{% sk-link-arch page="jobs" name="Jobs" %}}</td>
        <td>Background jobs</td>
        <td>Built using Kotlin Coroutines and Channels. See module for upcoming docs on performance</td>
    </tr>
</table>
{{% section-end mod="start/overview" %}}

## Security
Security details of the various modules will be coming soon and available/documented within each applicable module such as App, CLI, Jobs, APIs, Queues, etc. Generally speaking, most modules security revolve around protecting sensitive configuration settings, data during transmission and authentication / authorization for runnable services such as the App, CLI, APIs.
<table class="table table-bordered table-striped">
    <tr>
        <td><strong>Type</strong></td>
        <td><strong>Security</strong></td>
        <td><strong>Note(s)</strong></td>
    </tr>
    <tr>
        <td>{{% sk-link-util page="conf" name="Conf" %}}</td>
        <td>Config settings</td>
        <td>Settings can be encrypted or loaded from env vars</td>
    </tr>
    <tr>
        <td>{{% sk-link-arch page="files" name="Files" %}}</td>
        <td>AWS S3</td>
        <td>Also refer to AWS S3 docs</td>
    </tr>
    <tr>
        <td>{{% sk-link-arch page="queues" name="Queues" %}}</td>
        <td>AWS SQS</td>
        <td>Also refer to AWS SQS docs</td>
    </tr>
    <tr>
        <td>{{% sk-link-arch page="app" name="App" %}}</td>
        <td>Runnable App</td>
        <td>See module docs for more info</td>
    </tr>
    <tr>
        <td>{{% sk-link-arch page="apis" name="APIs" %}}</td>
        <td>Web/Http APIs</td>
        <td>See module docs for more info</td>
    </tr>
    <tr>
        <td>{{% sk-link-arch page="cli" name="CLI" %}}</td>
        <td>CLI</td>
        <td>See module docs for more info</td>
    </tr>
    <tr>
        <td>{{% sk-link-arch page="data" name="Data" %}}</td>
        <td>Sql</td>
        <td>See module docs for more info</td>
    </tr>
</table>
{{% section-end mod="start/overview" %}}

