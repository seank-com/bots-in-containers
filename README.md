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

```bash
$ docker run -it --rm -v /Users/seank/Development/botbuilder-samples/:/root/botbuilder-samples bot-tools /bin/bash
```

```bash
$ az login
$ az account set -s e4da59ca-11b0-454e-a89a-cd711dea9094
```

See Application Settings for Web App Bot in Azure Portal for MicrosoftAppId and MicrosoftAppPassword. Be sure to save the <BOT SECRET> you will need it

```bash
$ msbot init --name "IoTLabBot" --endpoint http://localhost:3978/api/messages
Do you have an appId for endpoint? [no] yes
What is your appId for http://localhost:3978/api/messages? [none] <MicrosoftAppId>
What is your appPassword for http://localhost:3978/api/messages? <MicrosoftAppPassword>
=== Your bot file contains service keys and we strongly recommend you encrypt them to keep them safe. ===
Would you like to encrypt your keys with a secret? [no]
created IoTLabBot.bot

$ ludown parse toluis --in Resources/homeautomation.lu -o CognitiveModels --out homeautomation.luis -n "Home Automation" -d "Home Automation LUIS application - Bot Builder Samples" --verbose
$ ludown parse toluis --in Resources/weather.lu -o CognitiveModels --out weather.luis -n Weather -d "Weather LUIS application - Bot Builder Samples" --verbose
$ luis import application --in CognitiveModels/homeautomation.luis --authoringKey <LUIS-AUTHORING-KEY> --region <LUIS-AUTHORING-REGION> --msbot | msbot connect luis --stdin --secret <BOT SECRET>
$ luis import application --in CognitiveModels/weather.luis --authoringKey <LUIS-AUTHORING-KEY> --region <LUIS-AUTHORING-REGION> --msbot | msbot connect luis --stdin --secret <BOT SECRET>
$ msbot get "Home Automation" --secret <BOT SECRET> | luis train version --wait --stdin
$ msbot get "Weather" --secret <BOT SECRET> | luis train version --wait --stdin
$ msbot get "Home Automation" --secret <BOT SECRET> | luis publish version --wait --stdin
$ msbot get "Weather" --secret <BOT SECRET> | luis publish version --wait --stdin
$ ludown parse toqna --in resources/sample-qna.lu -o cognitiveModels --out dispatch.qna --verbose
$ qnamaker create kb --in cognitiveModels/dispatch.qna --subscriptionKey <QNA-MAKER-SUBSCRIPTION-KEY> --msbot | msbot connect qna --stdin --secret <BOT SECRET>
$ msbot get "sample-qna" --secret <BOT SECRET> | qnamaker publish kb --stdin
$ dispatch create -b IoTLabBot.bot --secret <BOT SECRET> | msbot connect dispatch --stdin --secret <BOT SECRET>
$ msbot secret -n
```



Both [nodejs](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md) and [docker](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) have opinions about best practices when building docker containers. [8 Protips to Start Killing It When Dockerizing Node.js](https://nodesource.com/blog/8-protips-to-start-killing-it-when-dockerizing-node-js/) also has some helpful information. Bret Fisher has provided a [nice example](https://github.com/BretFisher/node-docker-good-defaults) to follow as well.

**Tip**: _You can look at the dockerfiles of the images you are pulling. For example when looking at the entry for [node on DockerHub](https://hub.docker.com/_/node/) to the right of each tag is a link to the [Dockerfile](https://github.com/nodejs/docker-node/blob/2ecc9e8579f519ae3d267b5b497b8c04d6c7040d/10/alpine/Dockerfile) that built that image_

A lot of tooling has gone into helping build bots especially around LUIS. A great place to start is this [blog post](https://aka.ms/luis-notes).

You can use the following command to build out a sample app

```bash
$ npx -p yo -p generator-botbuilder -c 'yo botbuilder'
```

https://github.com/Microsoft/BotBuilder-Samples/tree/master/samples/csharp_dotnetcore/14.nlp-with-dispatch

https://docs.microsoft.com/en-us/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0

https://github.com/Microsoft/botbuilder-tools

- [Conversational AI and Authentication](https://channel9.msdn.com/Shows/AI-Show/Conversational-AI-and-Authentication)

- [How to specify Memory & CPU limit in version 3](https://github.com/docker/compose/issues/4513)
- [Bot Builder SDK v4 (Preview)](https://github.com/microsoft/botbuilder-js)
- [Getting Started Wiki](https://github.com/Microsoft/botbuilder-js/wiki#getting-started)
- [Create a bot with the Bot Builder SDK v4](https://docs.microsoft.com/en-us/azure/bot-service/javascript/bot-builder-javascript-quickstart?view=azure-bot-service-4.0)

- [Docker Secrets](https://stackoverflow.com/questions/42139605/how-do-you-manage-secret-values-with-docker-compose-v3-1)
- [BotBuilder v4](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-create-templates?view=azure-bot-service-4.0)