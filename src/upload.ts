import Client from "ssh2-sftp-client";
import { Config } from "./config";

const config = Config.load();

export function uploadScreenShot(fileName: string) {
    let sftp = new Client()

    const connect = sftp.connect({
        host: config.host,
        username: config.username,
        password: config.password,
    }).then(() => {
        console.log("Connected")
        return sftp.put(config.localPath + fileName, config.remotePath + fileName)
    })
    .then(() => {
        console.log(`Uploaded ${config.url + fileName}`)
        return sftp.end()
    })
    .catch((err) => {
        console.log("[!!] Upload failed, please check your credentials and try again.", err.message);
        // notifier.notify({title: "Screenshot watcher", message: `Upload failed, please check your credentials and try again.`});
        process.exit()
    });

    
}