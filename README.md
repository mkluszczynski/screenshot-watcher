# 📷 👀 screenshot-watcher

## About

Application for automatic upload files to server via sftp.

## 🐧 Linux setup

1. Download binary package

2. Move executable to your home directory

```bash
mv ~/Downloads/screenshot-watcher-linux ~
```

3. Run app. This will generate `screenshot-watcher-config.json`

```bash
./screenshot-watcher-linux
```

4. Fill your configuration file

```bash
nano screenshot-watcher-config.json
```

```json
{
    "host": "rekiny.wroclaw.pl",
    "username": "",
    "password": "",
    "localPath": "/home/[username]/Pictures/flame/",
    "remotePath": "/services/zrzuty-ekranu/",
    "url": "http://zrzuty.rekiny.wroclaw.pl/"
}
```

> [!IMPORTANT]
> `localPath` Specify where your screenshot app is saving pictures.

5. Set executable as an autostart application.

This step is deferent depending on linux distribution that you are on.

Check this [tutorial](https://askubuntu.com/questions/48321/how-do-i-start-applications-automatically-on-login) to set up on ubuntu


## 🍎 MacOs setup

1. Download binary package

2. Move executable to your home directory

```bash
mv ~/Downloads/screenshot-watcher-mac ~
```

3. Set permissions and run app. This will generate `screenshot-watcher-config.json`

```bash
chmod 755 screenshot-watcher-mac && ./screenshot-watcher-mac
```

4. Mac will this application and will ask you to move it to trash. Click cancel and open your settings. Got to Privacy and security and allow screenshot-watcher-mac to execute and run it again.

5. Fill your configuration file

```bash
nano screenshot-watcher-config.json
```

```json
{
    "host": "rekiny.wroclaw.pl",
    "username": "",
    "password": "",
    "localPath": "/Users/[username]/Pictures/flame/",
    "remotePath": "/services/zrzuty-ekranu/",
    "url": "http://zrzuty.rekiny.wroclaw.pl/"
}
```

> [!IMPORTANT]
> `localPath` Specify where your screenshot app is saving pictures.

6. Set executable as an autostart application.

Follow this [tutorial](https://support.apple.com/guide/mac-help/open-items-automatically-when-you-log-in-mh15189/mac) to set screenshot-watcher to autostart on login.

## 🪟 Windows setup

1. Download binary package

2. Move executable to your home directory

3. Run app. This will generate `screenshot-watcher-config.json`

4. Fill your configuration file

```json
{
    "host": "rekiny.wroclaw.pl",
    "username": "",
    "password": "",
    "localPath": "/home/[username]/Pictures/flame/",
    "remotePath": "/services/zrzuty-ekranu/",
    "url": "http://zrzuty.rekiny.wroclaw.pl/"
}
```

> [!IMPORTANT]
> `localPath` Specify where your screenshot app is saving pictures.

5. Set executable as an autostart application.

This step is deferent depending on linux distribution that you are on.

Check this [tutorial](https://support.microsoft.com/en-us/windows/configure-startup-applications-in-windows-115a420a-0bff-4a6f-90e0-1934c844e473) to set up on windows



## Dev

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run main.ts
```

This project was created using `bun init` in bun v1.2.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
