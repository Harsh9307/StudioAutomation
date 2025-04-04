# StudioAutomation

## Automating script generation and query resolving using AI for companies on basis of their SDKs

## API Endpoints

| Endpoint | Method | Description | Input Parameters | Protected |
|----------|--------|-------------|------------------|-----------|
| `/api/v1/app` | POST | Create Application | `{ appName: string, appCategory: string, authenticationType: string, appDescription: string, connectionLevelParamFields:[Object{paramName:string,paramType:Text/Boolean/Number,mandatory:Boolean,sensitive:Boolean,varialbleName:string,description:string}] }` | Yes |
| `/api/v1/app` | GET | Get All Apps | None | Yes |
| `/api/v1/app/:appName` | GET | Get Specific App | `appName: string` (as URL param) | Yes |
| `/api/v1/app/appCategories` | GET | Get App Categories | None | Yes |
| `/api/v1/app/authenticationType` | GET | Get Authentication Type | None | Yes |
| `/api/v1/app/appNames` | GET | Get App Names | None | Yes |
| `/api/v1/app/appNames/:appName` | GET | Get Connection Level Params of Specific App | `appName: string` (as URL param) | Yes |
| `/api/v1/llm/generate` | POST | Generate Script for Application | `{ link: string, query: string, model:string }` | Yes |
| `/api/v1/llm/query` | POST | Query Internal SDK Docs | `{ currentCode:string, applicationName:string, language:string,appActionName:string }` | Yes |
| `/api/v1/functions` | POST | Insert All SDK Docs | `{ sdkDocs: array }` | Yes |
| `/api/v1/functions/search` | POST | Vector Search for SDK Functions | `{ query: string }` | Yes |
| `/api/v1/autocomplete/query` | POST | Get Auto-Completion Suggestions | `{ currentCode:string,applicationName:string,language:string,appActionName:string}` | Yes |
| `/api/v1/analysis/update` | POST | Update Model Rating | `{ modelName: string, like:boolean}` | Yes |
| `/api/v1/analysis/getallanalysis` | GET | Get All Models with Ratings | None | Yes |
| `/api/v1/analysis/getanalysis` | POST | Get Details of Specific Model | `{ modelName: string }` | Yes|
| `/api/v1/auth/login` | POST | User Login | `{ username: string, password: string }` | No |
| `/api/v1/auth/register` | POST | Register New User | `{ firstName: string,lastName:string,email: string, password: string,confirmPassword :string}` | No |

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/studio-automation.git
   cd studio-automation
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the project:
   ```sh
   npm start
   ```

## Contributors

- [Ronit Ahuja](https://github.com/ronitahuja/)
- [Harsh Diwase](https://github.com/Harsh9307/)
