import { watch } from "fs";
import { Config } from "./config";
import clipboard from "clipboardy";
import { uploadScreenShotViaFTP } from "./upload-ftp";
import { uploadScreenShotViaSFTP } from "./upload-sftp";

console.log("[Screenshot Watcher][1.1.0]");

const config = Config.load();

const watcher = watch(config.localPath, (event, filename) => {
  console.log(`Detected new image in ${filename}`);
  if(!filename) return;

  if(config.ftp) uploadScreenShotViaFTP(filename)
  else uploadScreenShotViaSFTP(filename)

  clipboard.writeSync(config.url + filename);
  
});

console.log("Watching for changes in", config.localPath);

