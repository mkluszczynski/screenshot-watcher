# 📷 👀 screenshot-watcher

## About

Application for automatic upload files to server via sftp.

## Usage

Download compiled app and run it to create config file. <br>
Fill it with your credentials and run application again. <br>

Now based of your config, app will watch if in provided path new file appeared and if so upload it to remote server.

Additionally you can add this app to automatically run on startup of your system.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run main.ts
```

This project was created using `bun init` in bun v1.2.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
