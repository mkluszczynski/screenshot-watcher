import * as fs from 'fs';
import * as path from 'path';

export class Config {


    constructor(
        public host: string = "rekiny.wroclaw.pl",
        public username: string = "",
        public password: string = "",
        public localPath: string = "/home/[username]/Pictures/flame/",
        public remotePath: string = "/services/zrzuty-ekranu/",
        public url: string = "http://zrzuty.rekiny.wroclaw.pl/"
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
        const configPath = path.join(process.cwd(), 'screenwatcher-config.json');
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
        const configPath = path.join(process.cwd(), 'screenwatcher-config.json');

        fs.writeFileSync(configPath, JSON.stringify(configData, null, 2));
    }
}