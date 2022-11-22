declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_ALGOLIA_API_KEY: string;
            NEXT_PUBLIC_ALGOLIA_APP_ID: string;
            NEXT_PUBLIC_ALGOLIA_INDEX: string;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}