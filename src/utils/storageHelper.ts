import "client-only";

export function getLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof window !== "undefined") {
    const stickyValue = localStorage.getItem(key);

    return stickyValue !== null && stickyValue !== "undefined"
      ? JSON.parse(stickyValue)
      : defaultValue;
  } else {
    return defaultValue;
  }
}

export function setLocalStorage(key: string, value: string): void {
  localStorage.setItem(key, JSON.stringify(value));
}
