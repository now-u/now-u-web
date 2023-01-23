export function getRequiredEnvironmentVariable(variableName: string): string {
    const value = process.env[variableName]
    if (value === undefined) {
        throw new Error(`${variableName} environment variable not set`)
    }
    return value
}
