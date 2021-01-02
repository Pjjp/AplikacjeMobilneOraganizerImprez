
import { Type } from '@angular/core';
import { Action } from '@ngrx/store';
import { Local } from './locals.model';

export namespace LocalsActions{
    export enum Type{
        BULK_READ_LOCALS = '[LOCALS] Bulk Read Locals',
        BULK_READ_LOCALS_SUCESS = '[LOCALS] Bulk Read Local Sucess',
        BULK_READ_LOCALS_ERROR = '[LOCALS] Bulk Read Locals Error',
    }


    export class BULK_READ_LOCALS implements Action {
        readonly type = Type.BULK_READ_LOCALS;

        constructor() {}
    }

    export class BULK_READ_LOCALS_SUCESS implements Action {
        readonly type = Type.BULK_READ_LOCALS_SUCESS;

        constructor(public payload: { locals: Local[]}) {}
    }

    export class BULK_READ_LOCALS_ERROR implements Action {
        readonly type = Type.BULK_READ_LOCALS_ERROR;

        constructor() {}
    }

    export type Actions =
    | BULK_READ_LOCALS
    | BULK_READ_LOCALS_SUCESS
    | BULK_READ_LOCALS_ERROR
}
