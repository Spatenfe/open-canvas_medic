import { CustomModelConfig, ModelConfigurationParams } from "./types.js";

const OPENAI_MODELS: ModelConfigurationParams[] = [
  {
    name: "local-vllm/Qwen/Qwen3-235B-A22B-GPTQ-Int4",
    label: "Qwen-3 (local)",
    config: {
      provider: "openai",
      temperatureRange: {
        min: 0,
        max: 1,
        default: 0.5,
        current: 0.5,
      },
      maxTokens: {
        min: 1,
        max: 32_768,
        default: 4_096,
        current: 4_096,
      },
    },
    isNew: true,
  },
];

export const LANGCHAIN_USER_ONLY_MODELS = [];

// Models which do NOT support the temperature parameter.
export const TEMPERATURE_EXCLUDED_MODELS = [];

// Models which do NOT stream back tool calls.
export const NON_STREAMING_TOOL_CALLING_MODELS = [];

// Models which do NOT stream back text.
export const NON_STREAMING_TEXT_MODELS = [];

// Models which preform CoT before generating a final response.
export const THINKING_MODELS = [];

export const ALL_MODELS: ModelConfigurationParams[] = [
  ...OPENAI_MODELS,
];

type OPENAI_MODEL_NAMES = (typeof OPENAI_MODELS)[number]["name"];
export type ALL_MODEL_NAMES =
  | OPENAI_MODEL_NAMES

export const DEFAULT_MODEL_NAME: ALL_MODEL_NAMES = OPENAI_MODELS[0].name;
export const DEFAULT_MODEL_CONFIG: CustomModelConfig = {
  ...OPENAI_MODELS[0].config,
  temperatureRange: { ...OPENAI_MODELS[0].config.temperatureRange },
  maxTokens: { ...OPENAI_MODELS[0].config.maxTokens },
};
