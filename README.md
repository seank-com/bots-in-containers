# bots-in-containers

Building &amp; Debugging Bots in Containers

## Building the Dockerfile

Both [nodejs](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md) and [docker](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) have opinions about best practices when building docker containers. [8 Protips to Start Killing It When Dockerizing Node.js](https://nodesource.com/blog/8-protips-to-start-killing-it-when-dockerizing-node-js/) also has some helpful information. Bret Fisher has provided a [nice example](https://github.com/BretFisher/node-docker-good-defaults) to follow as well.

**Tip**: _You can look at the dockerfiles of the images you are pulling. For example when looking at the entry for [node on DockerHub](https://hub.docker.com/_/node/) to the right of each tag is a link to the [Dockerfile](https://github.com/nodejs/docker-node/blob/2ecc9e8579f519ae3d267b5b497b8c04d6c7040d/10/alpine/Dockerfile) that built that image_

## Building the Bot Container image

run the following command from the bot folder

```bash
$ docker build -t mybot .
```

## Notes

- [How to specify Memory & CPU limit in version 3](https://github.com/docker/compose/issues/4513)
- [Bot Builder SDK v4 (Preview)](https://github.com/microsoft/botbuilder-js)
- [Getting Started Wiki](https://github.com/Microsoft/botbuilder-js/wiki#getting-started)
- [Create a bot with the Bot Builder SDK v4](https://docs.microsoft.com/en-us/azure/bot-service/javascript/bot-builder-javascript-quickstart?view=azure-bot-service-4.0)

- [Docker Secrets](https://stackoverflow.com/questions/42139605/how-do-you-manage-secret-values-with-docker-compose-v3-1)
- [BotBuilder v4](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-create-templates?view=azure-bot-service-4.0)