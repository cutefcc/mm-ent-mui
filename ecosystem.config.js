module.exports = {
    "apps": {
        "interpreter": './node_modules/.bin/ts-node',
        "name": "mm-ent-mui",
        "script": "./app.ts",
        "watch": true,
        "instances": "max",
        "exec_mode": "cluster",
        "log_date_format": "YYYY-MM-DD HH:mm Z",
        "merge_logs": true,
        "type": "PM2",//PM2 err
        "process_id": 0,
        "out_file": "./pm2Log/mm-ent-mui.stdout.log",
        "error_file": "./pm2Log/mm-ent-mui.stderror.log",
        "app_name": "one-echo",
        "message": "echo\n",
        "env": {
            "PORT": 8085,
            "NODE_ENV": "development"
        },
        "env_production": {
            // "PORT": 8083,
            "NODE_ENV": "production",
        }
    }
}