---
title: "Features"
date: 2019-03-17T14:30:52-04:00
section_header: Archtecture Components
layout : "overview"
---

# Overview
Slate Kit offers <strong>several features</strong> as modular <strong>Architecture components</strong>. These are designed as a collection of Kotlin libraries that help you to quickly build fully featured, testable, 
and scalable applications on the JVM. Several of the modules can be used for both **Server and Android**. Click any of the modules below for more info.

 <div class="alert alert-info" role="alert">
1. The <span class="badge badge-light">Server</span> badge indicates that the component is meant to be used only on the **Server**.<br/>
2. The <span class="badge badge-light">Android / Server</span> badge indicates that the component cab be used for both **Android** and **Server**.
</div>

<section id="services" class="integration">
  <div class="container">
      <div class="row text-center">
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="arch/results"><img src="assets/media/img/white/target.png" alt="" class="img-fluid"></a>
              <div><a href="arch/results"><h3>Results</h3></a></div>
              <p>Models <strong>successes and failures</strong> accurately with <strong>optional</strong> status codes. Works with exceptions, validations.
                 See {{% sk-link-arch page="results" name="Results" %}} 
              </p>
              <span class="badge badge-light">Android / Server</span>
            </div>
          </div>
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="arch/apis"><img src="assets/media/img/white/webapi.png" alt="" class="img-fluid"></a>
              <div><a href="arch/apis"><h3>APIs</h3></a></div>
              <p>A simple, intuitive, <strong>protocol independent</strong> approach to building APIs in Slate so they run as Web APIs or on the CLI. See {{% sk-link-arch page="apis" name="APIs" %}} 
              </p>
              <span class="badge badge-light">Server</span>
            </div>
          </div>
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="arch/app"><img src="assets/media/img/white/desktop.png" alt="" class="img-fluid"></a>
              <div><a href="arch/app"><h3>App</h3></a></div>
              <p>An general purpose <strong>App template</strong> with support for environments, logging, configs, diagnostics, help usage and more. See {{% sk-link-arch page="app" name="App" %}} 
              </p>
              <span class="badge badge-light">Server</span>
            </div>
          </div>
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="cli"><img src="assets/media/img/white/terminal.png" alt="" class="img-fluid"></a>
              <div><a href="arch/cli"><h3>CLI</h3></a></div>
              <p>Command line interface to handle actions in an interactive way. Has customization and formatting features. See {{% sk-link-arch page="cli" name="CLI" %}} </a>.
              </p>
              <span class="badge badge-light">Server</span>
            </div>
          </div>
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="arch/cache"><img src="assets/media/img/white/lightning.png" alt="" class="img-fluid"></a>
              <div><a href="arch/cache"><h3>Cache</h3></a></div>
              <p>Light-weight cache with an emphasis towards diagnostics, and a synchronous or async Channel based APIs. See {{% sk-link-arch page="cache" name="Cache" %}} 
              </p>
              <span class="badge badge-light">Android / Server</span>
            </div>
          </div>
          <!--
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="core/kotlin-cmd.html"><img src="assets/media/img/white/command2.png" alt="" class="img-fluid"></a>
              <div><a href="core/kotlin-cmd.html"><h3>Commands</h3></a></div>
              <p>A variation to the command pattern to support ad-hoc execution of code, 
                with support for metrics and time-stamps. 
                See <a class="url-ch" href="core/kotlin-cmd.html">example</a> 
              </p>
            </div>
          </div>
        -->
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="arch/context"><img src="assets/media/img/white/connected.png" alt="" class="img-fluid"></a>
              <div><a href="arch/context"><h3>Context</h3></a></div>
              <p>An application context to hold common dependencies like command line args, envs, configs, logger, encryptor, etc, 
                 See {{% sk-link-arch page="context" name="Context" %}} 
              </p>
              <span class="badge badge-light">Android / Server</span>
            </div>
          </div>
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="arch/data"><img src="assets/media/img/white/layers.png" alt="" class="img-fluid"></a>
              <div><a href="arch/data"><h3>Data</h3></a></div>
              <p>Light-weight, domain-driven entity framework with optional ORM. You can use the Entity Interfaces and code without the ORM. See {{% sk-link-arch page="data" name="Data" %}} 
              </p>
              <span class="badge badge-light">Android / Server</span>
            </div>
          </div>
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="arch/email"><img src="assets/media/img/white/email.png" alt="" class="img-fluid"></a>
              <div><a href="arch/email"><h3>Email</h3></a></div>
              <p>Send emails with optional templates, with a default implementation for SendGrid.
                 See {{% sk-link-arch page="email" name="Email" %}} for details on setup and usage</a>.
              </p>
              <span class="badge badge-light">Server</span>
            </div>
          </div>
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="arch/files"><img src="assets/media/img/white/folders.png" alt="" class="img-fluid"></a>
              <div><a href="arch/files"><h3>Files</h3></a></div>
              <p>A simplified interface and abstraction for persistent file storage. Default implementation available in <strong>AWS S3</strong> See {{% sk-link-arch page="files" name="Files" %}} 
              </p>
              <span class="badge badge-light">Server</span>
            </div>
          </div>
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="arch/generators"><img src="assets/media/img/white/prototype.png" alt="" class="img-fluid"></a>
              <div><a href="arch/generators"><h3>Generator</h3></a></div>
              <p>Command Line Project generator with extensible templates to quickly create new Slate Kit or custom apps. See {{% sk-link-arch page="generators" name="Generators" %}} 
              </p>
              <span class="badge badge-light">Android / Server</span>
            </div>
          </div>
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="arch/jobs"><img src="assets/media/img/white/gears.png" alt="" class="img-fluid"></a>
              <div><a href="arch/jobs"><h3>Jobs</h3></a></div>
              <p>Background Jobs/Task queue system for one-off, paged, and queued jobs with middleware support and diagnostics.
                See {{% sk-link-arch page="jobs" name="Jobs" %}} 
              </p>
              <span class="badge badge-light">Android / Server</span>
            </div>
          </div>
          <!--
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="core/kotlin-notifications.html"><img src="assets/media/img/white/speaker.png" alt="" class="img-fluid"></a>
              <div><a href="core/kotlin-notifications.html"><h3>Notifications</h3></a></div>
              <p>Mobile push notifications for Android and iOS. Abstracts alerts/data payloads for both platforms.
              </p>
            </div>
          </div>
        -->
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="arch/queues"><img src="assets/media/img/white/queue.png" alt="" class="img-fluid"></a>
              <div><a href="arch/queues"><h3>Queues</h3></a></div>
              <p>A simplified interface and abstraction for persistent queues. 
                Support for <strong>AWS SQS</strong> and in-memory queue. See {{% sk-link-arch page="queues" name="Queues" %}} 
              </p>
              <span class="badge badge-light">Android / Server</span>
            </div>
          </div>
          <!--
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="core/kotlin-server.html"><img src="assets/media/img/white/server.png" alt="" class="img-fluid"></a>
              <div><a href="core/kotlin-server.html"><h3>Server</h3></a></div>
              <p>A base Web Server to host your <a class="url-ch" href="core/kotlin-server.html">protocol independent APIs</a> 
                with built in support for many features. See <a class="url-ch" href="core/kotlin-server.html">concepts</a>, 
                <a class="url-ch" href="core/kotlin-server.html">example</a> and 
                <a class="url-ch" href="releases.html#release-downloads">sample apps</a>
              </p>
            </div>
          </div>
        -->
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="arch/sms"><img src="assets/media/img/white/mobile.png" alt="" class="img-fluid"></a>
              <div><a href="arch/sms"><h3>SMS</h3></a></div>
              <p>Send text messages to mobile phones, with support for templates, with a default implementation using Twilio.
                 See {{% sk-link-arch page="sms" name="SMS" %}} 
              </p>
              <span class="badge badge-light">Android / Server</span>
            </div>
          </div>
          <div class="col-md-4 wow fadeInUp">
            <div class="box text-center">
              <a href="arch/tracking"><img src="assets/media/img/white/diagnostic.png" style="width:60px;" alt="" class="img-fluid"></a>
              <div><a href="arch/tracking"><h3>Tracking</h3></a></div>
              <p>Support for diagnostics and tracking of runtime values and recording of events. This supplements typical metrics libraries. See {{% sk-link-arch page="tracking" name="Tracking" %}} 
              </p>
              <span class="badge badge-light">Android / Server</span>
            </div>
          </div>
      </div>
  </div>
</section>



