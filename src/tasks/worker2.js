console.log("XXX: Inside the worker");
Error.stackTraceLimit = 50;
globalThis.onerror = console.error;

let pendingMessages = [];
let handleMessage = async data => {
    // We start off by buffering up all messages until we finish initializing.
    console.log("XXX: Buffering message", data);
    pendingMessages.push(data);
};

globalThis.onmessage = async ev => {
    console.log("Worker", ev.data);

    if (ev.data.type == "init") {
        const { memory, module } = ev.data;
        const { default: init, __worker_handle_message } = await import("$IMPORT_META_URL");
        await init(module, memory);
        console.log("initialized!");

        // Now that we're initialized, we can switch over to the "real" handler
        // function and handle any buffered messages
        handleMessage = __worker_handle_message;
        for (const msg of pendingMessages.splice(0, pendingMessages.length)) {
            await handleMessage(msg);
        }
    } else {
        // Handle the message like normal.
        await handleMessage(ev.data);
    }
};

