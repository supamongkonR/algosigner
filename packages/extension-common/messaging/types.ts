export const JSONRPC_VERSION: string = "2.0";

export enum JsonRpcMethod {
    Heartbeat = "heartbeat",
    Authorization = "authorization",
    AuthorizationAllow = "authorization-allow",
    AuthorizationDeny = "authorization-deny",
    SignTransaction = "sign-transaction"
}

export type JsonRpcParams = Array<string | number | undefined>;

export type JsonRpcBody = {
    readonly jsonrpc: string;
    readonly method: JsonRpcMethod;
    readonly params: JsonRpcParams;
    readonly id: string;
}

export enum MessageSource {
    Extension = "extension",
    DApp = "dapp",
    Router = "router"
}
export type MessageBody = {
    readonly source: MessageSource,
    readonly body: JsonRpcBody
}

export type JsonRpcResponse = string;