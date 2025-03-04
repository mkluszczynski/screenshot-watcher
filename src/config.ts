import * as fs from 'fs';
import * as path from 'path';

export class Config {


    constructor(
        public host: string = "your-host.com",
        public username: string = "",
        public password: string = "",
        public localPath: string = "/home/[username]/Pictures/screenshots/",
        public remotePath: string = "/server/path/to/screenshots/",
        public url: string = "http://url.your-host.com/"
    ){}

    public toJson(): string {
        return JSON.stringify(this);
    }

    static load() {
        try{
            const configFile = this.getConfigFile();
            return Config.fromJson(configFile);
        }
        catch(e: any){
            Config.createConfigFile();
            console.log("[!] Config file created. Please fill in the details.");
            process.exit()
        }
    }


    private static getConfigFile(){
        const configPath = path.join(process.cwd(), 'screenshot-watcher-config.json');
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }

    private static fromJson(json: any): Config {
        const config = new Config();
        config.host = json.host;
        config.username = json.username;
        config.password = json.password;
        config.localPath = json.localPath;
        config.remotePath = json.remotePath;
        config.url = json.url;
        return config;
    }

    private static createConfigFile(){
        const configData = new Config()
        const configPath = path.join(process.cwd(), 'screenshot-watcher-config.json');

        fs.writeFileSync(configPath, JSON.stringify(configData, null, 2));
    }
}