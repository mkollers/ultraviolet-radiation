export class HttpErrorResponse {
    constructor(
        // Machine code, typically in camel case
        public error: string,
        // Human readable message
        public description: string
    ) { }
}