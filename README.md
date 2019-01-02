# bots-in-containers

Building &amp; Debugging Bots in Containers

## Building

#### From VS Code

1. Select ```Run Build Task``` from the menu or press <kbd>SHIFT</kbd>+<kbd>CMD</kbd>+<kbd>B</kbd>
2. Select ```Docker Build```

#### From the bot folder run

```bash
$ docker build -t mybot .
```

## Running

1. From VS Code press <kbd>F5</kbd>
   ...or...
   From project root run
   ```bash
   $ docker-compose up
   ```

2. After starting the container run ```ngrok``` and copy the subdomain of ngrok.io and update the ```endpoint``` entry in ```botainer.bot```
   ```bash
   $ ngrok http 3978
   ngrok by @inconshreveable                                                                                   (Ctrl+C to quit)

   Session Status                online
   Session Expires               7 hours, 59 minutes
   Version                       2.2.8
   Region                        United States (us)
   Web Interface                 http://127.0.0.1:4040
   Forwarding                    http://b5052c20.ngrok.io -> localhost:3978
   Forwarding                    https://b5052c20.ngrok.io -> localhost:3978

   Connections                   ttl     opn     rt1     rt5     p50     p90
                                 0       0       0.00    0.00    0.00    0.00
   ```

3. Launch the [Bot Framework Emulator](https://github.com/Microsoft/BotFramework-Emulator/wiki) and open the ```botainer.bot``` file

## Development Notes

Both [nodejs](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md) and [docker](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) have opinions about best practices when building docker containers. [8 Protips to Start Killing It When Dockerizing Node.js](https://nodesource.com/blog/8-protips-to-start-killing-it-when-dockerizing-node-js/) also has some helpful information. Bret Fisher has provided a [nice example](https://github.com/BretFisher/node-docker-good-defaults) to follow as well.

**Tip**: _You can look at the dockerfiles of the images you are pulling. For example when looking at the entry for [node on DockerHub](https://hub.docker.com/_/node/) to the right of each tag is a link to the [Dockerfile](https://github.com/nodejs/docker-node/blob/2ecc9e8579f519ae3d267b5b497b8c04d6c7040d/10/alpine/Dockerfile) that built that image_

A lot of tooling has gone into helping build bots especially around LUIS. A great place to start is this [blog post](https://aka.ms/luis-notes).

**Current Investigation:**
[Bot Builder Tools - Dispatch](https://github.com/Microsoft/botbuilder-tools/tree/master/packages/Dispatch) => [Prerequisites for .NET Core on Linux](https://docs.microsoft.com/en-us/dotnet/core/linux-prerequisites?tabs=netcore2x) =>
[Node container](https://hub.docker.com/_/node)

- [Conversational AI and Authentication](https://channel9.msdn.com/Shows/AI-Show/Conversational-AI-and-Authentication)

- [How to specify Memory & CPU limit in version 3](https://github.com/docker/compose/issues/4513)
- [Bot Builder SDK v4 (Preview)](https://github.com/microsoft/botbuilder-js)
- [Getting Started Wiki](https://github.com/Microsoft/botbuilder-js/wiki#getting-started)
- [Create a bot with the Bot Builder SDK v4](https://docs.microsoft.com/en-us/azure/bot-service/javascript/bot-builder-javascript-quickstart?view=azure-bot-service-4.0)

- [Docker Secrets](https://stackoverflow.com/questions/42139605/how-do-you-manage-secret-values-with-docker-compose-v3-1)
- [BotBuilder v4](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-create-templates?view=azure-bot-service-4.0)