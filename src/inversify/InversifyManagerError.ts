const ErrorCode = {
  AlreadyHasSymbolKey: { code: 101, message: "AlreadyHasSymbolKey" },
} as const;

type ErrorObject = (typeof ErrorCode)[keyof typeof ErrorCode];

class InversifyManagerError extends Error {
  constructor({
    ErrorObject,
    ErrorParam,
  }: {
    ErrorObject: ErrorObject;
    ErrorParam?: Object;
  }) {
    super(ErrorObject.message);
  }
}
