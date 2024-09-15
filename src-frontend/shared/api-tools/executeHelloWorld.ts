import { Command } from '@tauri-apps/api/shell';

export const executeHelloWorld = async () => (await Command.sidecar('bin/hello-world-backend').execute()).stdout;
