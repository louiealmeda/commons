export enum ServerErrorCodes {
  PORT_ALREADY_USED = 'PORT_ALREADY_USED',
  PORT_INVALID = 'PORT_INVALID',
  HOSTNAME_UNKNOWN = 'HOSTNAME_UNKNOWN',
  HOSTNAME_UNAVAILABLE = 'HOSTNAME_UNAVAILABLE',
  REQUEST_BODY_PARSE = 'REQUEST_BODY_PARSE',
  ROUTE_CREATION_ERROR = 'ROUTE_CREATION_ERROR',
  ROUTE_CREATION_ERROR_REGEX = 'ROUTE_CREATION_ERROR_REGEX',
  ROUTE_SERVING_ERROR = 'ROUTE_SERVING_ERROR',
  ROUTE_FILE_SERVING_ERROR = 'ROUTE_FILE_SERVING_ERROR',
  PROXY_ERROR = 'PROXY_ERROR',
  UNKNOWN_SERVER_ERROR = 'UNKNOWN_SERVER_ERROR'
}
