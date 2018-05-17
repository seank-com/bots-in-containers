# bots-in-containers

Building &amp; Debugging Bots in Containers

## Building the Dockerfile

Both [nodejs](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md) and [docker](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) have opinions about best practices when building docker containers.

**Tip**: _You can look at the dockerfiles of the images you are pulling. For example when looking at the entry for [node on DockerHub](https://hub.docker.com/_/node/) to the right of each tag is a link to the [Dockerfile](https://github.com/nodejs/docker-node/blob/2ecc9e8579f519ae3d267b5b497b8c04d6c7040d/10/alpine/Dockerfile) that built that image_

## Building the Bot Container image

run the following command from the bot folder

```bash
$ docker build -t mybot .
```

## Notes

- [Bot Builder SDK v4 (Preview)](https://github.com/microsoft/botbuilder-js)
- [Getting Started Wiki](https://github.com/Microsoft/botbuilder-js/wiki#getting-started)
- [Docker Secrets](https://stackoverflow.com/questions/42139605/how-do-you-manage-secret-values-with-docker-compose-v3-1)
- [VS Code Debugging Recipes]()
- [Debugging TypeScript in VSCode (recipe)](https://github.com/Microsoft/vscode-recipes/tree/master/Docker-TypeScript)