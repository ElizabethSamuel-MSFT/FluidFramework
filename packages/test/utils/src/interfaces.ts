/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { IComponentContext, IComponentRuntime } from "@microsoft/fluid-runtime-definitions";

declare module "@microsoft/fluid-component-core-interfaces" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface IComponent extends Readonly<Partial<IProvideTestFluidComponent>> { }
}

export interface IProvideTestFluidComponent {
    readonly ITestFluidComponent: ITestFluidComponent;
}

export interface ITestFluidComponent extends IProvideTestFluidComponent {
    readonly runtime: IComponentRuntime;
    readonly context: IComponentContext;
    getSharedObject<T = any>(id: string): Promise<T>;
}