# nailedit_web
nailedit_api 데모시연용 웹

## How to run in local
1. Clone Repository
```
git clone https://github.com/Nail-Auto-Tagging/nailedit_web
cd nailedit_web
```

2. Install packages
```
npm install
```

3. Run local server
```
npm run start
```

4. Access the internet
* Open your browser & input 'localhost:3000'

## How to deploy in S3
1. Build
```
npm run build
```

2. Deploy
```
aws s3 sync ./build s3://{{bucket_name}} --profile {{aws_credential_alias_in_local}}
```