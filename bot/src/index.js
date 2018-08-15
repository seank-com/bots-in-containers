var builder = require('botbuilder');
var restify = require('restify');

let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log(`${server.name} listening to ${server.url}`);
});

const adapter = new builder.BotFrameworkAdapter();

const storage = new builder.MemoryStorage();
const botState = new builder.BotState(storage, (ctx) => 'botState');

adapter.use(botState);

server.post('/api/messages', (req, res) => {
    adapter.processActivity(req, res, async ctx => {
        console.log(`Incoming Activity of type "${ctx.activity.type}"`);
        
        if (ctx.activity.type === 'message') {

            const state = botState.get(ctx);

            if (!('startTime' in state)) {
                state.startTime = new Date().getTime();
            }

            state.upTime = new Date().getTime() - state.startTime;

            await ctx.sendActivity(`${state.upTime}: You said "${ctx.activity.text}"`);
        }
    });
});