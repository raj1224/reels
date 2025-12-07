import {Connection} from 'mongoose';

declare global{
    var mongoose:{
        conn: Connection | null;
        promise: Promis<Connection> | null;
    };
}

export {};