# typescript-aws-sample

## test

```
$ yarn build
$ yarn start
```

```
$ curl -X POST \
    -H "Content-Type: application/json" \
    -d '{
          "type": "message",
          "text": "test",
          "channel": "websocket",
          "user": "user"
        }' \
    http://localhost:3000/api/messages
```
