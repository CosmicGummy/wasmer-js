export * from "./WasmerSDK";
import { InitOutput, WasmerInitInput } from "./WasmerSDK";
/**
 * Initialize the underlying WebAssembly module, defaulting to an embedded
 * copy of the `*.wasm` file.
 */
export declare const init: (initValue: WasmerInitInput | undefined) => Promise<InitOutput>;
