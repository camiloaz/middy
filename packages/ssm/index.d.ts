import { SSM } from 'aws-sdk'
import middy from '../core'

interface ISSMOptions {
  cache?: boolean;
  paths?: { [key: string]: string; };
  names?: { [key: string]: string; };
  awsSdkOptions?: Partial<SSM.Types.ClientConfiguration>;
  setToContext?: boolean;
  getParamNameFromPath?: (path: string, name: string, prefix: string) => string;
}

declare function ssm(opts?: ISSMOptions): middy.IMiddyMiddlewareObject;