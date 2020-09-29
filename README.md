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
          "type": "test",
          "text": "ok bokujyou",
          "channel": "websocket",
          "user": "user"
        }' \
    http://localhost:3000/api/messages
```

## Get codebuild project and codedeploy application

```
$ export AWS_ACCESS_KEY_ID=<>
$ export AWS_SECRET_ACCESS_KEY=<>
$ export AWS_REGION=<>

# or 

$ export AWS_PROFILE=<>

# request

$ curl -X POST \
    -H "Content-Type: application/json" \
    -d '{
          "type": "codebuild",
          "text": "test",     
          "channel": "websocket",
          "user": "user"
        }' \
    http://localhost:3000/api/messages

$ curl -X POST \
    -H "Content-Type: application/json" \
    -d '{
          "type": "codedeploy-list-app",
          "text": "test",     
          "channel": "websocket",
          "user": "user"
        }' \
    http://localhost:3000/api/messages
```
