export * from "../pkg/wasmer_js";
import { InitInput, InitOutput } from "../pkg/wasmer_js";
export type WasmerInitInput = {
    module?: InitInput | Promise<InitInput>;
    memory?: WebAssembly.Memory;
    registryUrl?: string;
    token?: string;
};
/**
 * Initialize the underlying WebAssembly module.
 */
export declare const init: (initValue: WasmerInitInput | undefined) => Promise<InitOutput>;
/**
 * Set a deafult working Worker Url. Which in this case will be
 * an unpkg url that is set up at the SDK build time.
 */
export declare const setDefaultWorkerUrl: () => void;
