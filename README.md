# nobot

Mini app that emulates chat window with bot and BotAPI server of NambaOne.
May come handy for testing your own made bots cause testing with real device and real server requires "white" IP address server to host your bot.

# usage

requires webpack installed globally

- clone repo
- run `npm install && npm run build` to install all dependencies and build client side bundle
- change your bot's api endpoint from `https://api.namba1.co` to `http://127.0.0.1:3000/api` so app could serve as a bot api server
- set in `./settings.json` the variable `bot_host` so the server could send events to your bot
- run your bot
- run `npm run serve` this will start local webserver at `http://127.0.0.1:3000`, open it in your favorite browser

You'll see chat window. From there you can send events such as `user/follow`, `user/unfollow` and mainly `message/new` by sending message. Every event is then handled by the server and sent to your bot's endpoint and as your bot responds everything would be sent back to your browser. If your bot sends message by using `chat/:chat_id/write` all it's content will appear as bot's message in your chat window. If your bot responds with `media/image` content type, image will be downloaded from actual namba1 servers and shown in your chat window as regular image

All other information about request sent by your bot will be logged in default browser console log, this information includes:

- method
- uri
- headers
- get params
- post params

# screenshot
here is the screenshot of using this app with [simple echo bot](https://github.com/erjanmx/django-namba-one-bot)

![Imgur](https://i.imgur.com/T1DHLaG.png)

# contribute

contributing is highly appreciated
