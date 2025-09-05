// src/styles/fonts.ts
export const fontStacks = {
    sans: `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
    mono: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    serif: `"Georgia", "Times New Roman", Times, serif`,
} as const;

export const fontFamily = {
    heading: fontStacks.sans,
    body: fontStacks.sans,
    code: fontStacks.mono,
} as const;
