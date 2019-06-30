import { IPCBaseMessage } from './base.ipc'

// List of tables
export const IPC_CHANNEL_LIST_OF_TABLES: string = "channel_list_of_tables";

export interface IIPCListOfTablesRequestMessage { }

export interface IIPCListOfTablesResponseMessage {
    valid: boolean;
    error?: string;
    tables?: string[]
}

export class IPCListOfTablesResponseMessage extends IPCBaseMessage<IIPCListOfTablesResponseMessage> { }

export class IPCListOfTablesRequestMessage extends IPCBaseMessage<IIPCListOfTablesRequestMessage> { }


// Table info
export const IPC_CHANNEL_TABLE_INFO: string = "channel_table_info";

export interface IIPCTableInfoRequestMessage {
    table: string;
}

export interface IIPCTableInfoColumn {
    name: string;
    default: string;
    nullable: boolean;
    type: string;
    length: number;
    key: string;
    extra: string;
}

export interface IIPCTableInfoResponseMessage {
    valid: boolean;
    error?: string;
    columns?: IIPCTableInfoColumn[]
}

export class IPCTableInfoResponseMessage extends IPCBaseMessage<IIPCTableInfoResponseMessage> { }

export class IPCTableInfoRequestMessage extends IPCBaseMessage<IIPCTableInfoRequestMessage> { }
