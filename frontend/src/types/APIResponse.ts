export type APIResponse =
  | {
      success: false;
    }
  | {
      success: true;
      data: unknown;
    };
