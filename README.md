# Shake to unlock

This sketch lets you simulate the unlocking of all devices connected to the same server by shaking one of them. The change in lock state is represented by a change in background color. 

## Based on

* [motion-stream](https://github.com/ClintH/interactivity/tree/master/websockets/motion-streamDevice) (device motion detection)

* [websockets skeleton](https://github.com/ClintH/interactivity/tree/master/websockets/skeleton) (connection through websockets)

## Setup 

In the directory you've got this sample:

`$ npm install`

This will install the necessary packages from npm.

## Running

Once set up, you can boot up your server with

`$ npm start`

It will continue running. To stop it again, press CTRL+C (PC) or CMD+C (Mac).

## Uses

* [reconnecting-websocket](https://github.com/pladaria/reconnecting-websocket) wrapper (v3.2.2)
