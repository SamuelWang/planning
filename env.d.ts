/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEV_HOST: string
  readonly VITE_DEV_PORT: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
