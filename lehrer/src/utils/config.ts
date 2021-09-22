import { Config } from "../lib/Interfaces";
import { readFileSync as readFile } from "fs"

export function getConfig(): Config {
  return JSON.parse((readFile("src/config.json")).toString())
}