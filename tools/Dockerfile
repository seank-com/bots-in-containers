
FROM node:lts-stretch

WORKDIR /root

# https://github.com/microsoft/botframework-solutions/blob/master/docs/tutorials/csharp/virtualassistant.md

RUN apt-get update && apt-get install -y apt-transport-https
RUN wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.asc.gpg
RUN mv microsoft.asc.gpg /etc/apt/trusted.gpg.d/
RUN wget -q https://packages.microsoft.com/config/debian/9/prod.list
RUN mv prod.list /etc/apt/sources.list.d/microsoft-prod.list
RUN apt-get update && apt-get install -y dotnet-sdk-2.2
RUN dotnet tool install -g LUISGen
RUN npm install -g chatdown msbot ludown luis-apis qnamaker
RUN npm install -g --ignore-scripts botdispatch
WORKDIR /usr/local/lib/node_modules/botdispatch/node_modules/dotnet-2.1/
RUN node -e "/*PostInstall: Installs platform-specific .NET framework */try{require('./dist/app.js')}catch(e){}"
RUN npm install -g --ignore-scripts botskills
WORKDIR /usr/local/lib/node_modules/botskills/node_modules/dotnet-2.1/
RUN node -e "/*PostInstall: Installs platform-specific .NET framework */try{require('./dist/app.js')}catch(e){}"
WORKDIR /root
COPY azure-cli.list /etc/apt/sources.list.d/azure-cli.list
RUN apt-key --keyring /etc/apt/trusted.gpg.d/Microsoft.gpg adv --keyserver packages.microsoft.com --recv-keys BC528686B50D79E339D3721CEB3E94ADBE1229CF
RUN apt-get update && apt-get install -y azure-cli powershell
