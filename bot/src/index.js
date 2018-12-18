var builder = require('botbuilder');
var restify = require('restify');

let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log(`${server.name} listening to ${server.url}`);
});

const adapter = new builder.BotFrameworkAdapter();

adapter.onTurnError = async (context, error) => {
    console.error(`\n [onTurnError]: ${error}`);
    await context.sendActivity(`Oops. Something went wrong!`);
};

server.post('/api/messages', (req, res) => {
    adapter.processActivity(req, res, async (ctx) => {
        console.log(`Incoming Activity ${ctx}`);
        
        if (ctx.activity.type === builder.ActivityTypes.Message) {
            await ctx.sendActivity(`You said "${ctx.activity.text}"`);
        } else {
            await ctx.sendActivity(`[${ ctx.activity.type } event detected]`);
        }
    });
});