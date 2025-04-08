import { Client } from "basic-ftp";
import { Config } from "./config";

const config = Config.load();

export async function uploadScreenShotViaFTP(fileName: string) {
    console.log("[FTP] Upload started...")

    const client = new Client()
    try {
        await client.access({
            host: config.host,
            user: config.username,
            password: config.password,
            secure: true
        })
        await client.uploadFrom(config.localPath + fileName, config.remotePath + fileName)
    }
    catch(err) {
        console.log(err)
    }
    client.close()
    console.log("[FTP] Upload finished.")
}