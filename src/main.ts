import { watch } from "fs";
import { Config } from "./config";
import { uploadScreenShot } from "./upload";
import clipboard from "clipboardy";

const config = Config.load();

const watcher = watch(config.localPath, (event, filename) => {
  console.log(`Detected new image in ${filename}`);
  if(!filename) return;

  uploadScreenShot(filename);
  clipboard.writeSync(config.url + filename);
  // notifier.notify({title: "Screenshot watcher", message: `URL copied to clipboard: ${config.url + filename}`});
  
});

console.log("Watching for changes in", config.localPath);

