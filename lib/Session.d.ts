import { Cache, Node, EVENT, SESSION_STATUS } from '.';
export declare class Session {
    private _id;
    private _data;
    private _isBrowser;
    private _cache;
    private _status;
    private _config;
    private _listeners;
    private _dir;
    private _node;
    private _dispatch;
    constructor(config: any, dispatch?: any);
    save(): Promise<void>;
    load(): Promise<void>;
    init(): Promise<void>;
    get dir(): any;
    get listeners(): any;
    get dispatch(): any;
    get config(): any;
    get id(): string;
    get node(): Node;
    get status(): SESSION_STATUS;
    get cache(): Cache;
    get data(): any;
    get isBrowser(): boolean;
    listen(onEvent: any): void;
    onEvent(type: EVENT, data: any): void;
    setStatus(s: SESSION_STATUS): void;
    get isReady(): boolean;
    toJSON(): {
        id: string;
        cid: string;
    };
    start(ipfs?: any): Promise<void>;
}
