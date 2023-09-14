export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./inversify.config");
  }
  if (process.env.NEXT_RUNTIME === "edge") {
  }
}
