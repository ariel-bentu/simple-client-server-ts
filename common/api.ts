export type ServerAPI = {
    echo (arg: string):PromiseLike<string>;
    upper(arg: string):PromiseLike<string>;
    //newfunc(arg:string):string;
}