#!/bin/bash

# build the server container
docker build -f server/Dockerfile -t mehdi/chat_rooms_server server/

# create the network
docker network create chat_rooms-net

# build the client container
docker build -f client/Dockerfile -t mehdi/chat_rooms_client client/

# start the server container
docker run -d --name chat_rooms_server --net chat_rooms-net -p 55555:55555 mehdi/chat_rooms_server

# start the client container
docker run -d --name chat_rooms_client --net chat_rooms-net -p 5000:5000 -p 3000:3000 mehdi/chat_rooms_client
