import { flush, isFlushEnqueued } from "./page-data"

let isPendingStatus = false

export function isWebpackStatusPending(): boolean {
  return isPendingStatus
}

export function markWebpackStatusAsPending(): void {
  isPendingStatus = true
}

export async function markWebpackStatusAsDone(): Promise<void> {
  isPendingStatus = false

  if (isFlushEnqueued()) {
    await flush()
  }
}
