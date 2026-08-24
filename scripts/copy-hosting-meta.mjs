import { cpSync, existsSync, mkdirSync } from "node:fs";

if (!existsSync("dist/server/index.js")) {
  throw new Error("Expected vinext server entrypoint: dist/server/index.js");
}
mkdirSync("dist/.openai", { recursive: true });
cpSync(".openai/hosting.json", "dist/.openai/hosting.json");
