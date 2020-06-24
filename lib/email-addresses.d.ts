declare module "@leolabs/email-addresses" {
  export interface ASTNode {
    name: string;
    tokens: string;
    semantic: string;
    children: ASTNode[];
  }

  export interface ParsedMailbox {
    type: "mailbox";
    node?: ASTNode;
    parts: {
      name: ASTNode;
      address: ASTNode;
      local: ASTNode;
      domain: ASTNode;
      comments: ASTNode[];
    };
    name: string;
    address: string;
    local: string;
    domain: string;
  }

  export interface ParsedGroup {
    type: "group";
    node?: ASTNode;
    parts: {
      name: ASTNode;
    };
    name: string;
    addresses: ParsedMailbox[];
  }

  export interface Options {
    input: string;
    oneResult?: boolean;
    partial?: boolean;
    rejectTLD?: boolean;
    rfc6532?: boolean;
    simple?: boolean;
    startAt?: string;
    strict?: boolean;
  }

  export type AddressOrGroup = ParsedMailbox | ParsedGroup;
  export type Input = string | Options;

  export interface ParsedResult {
    ast: ASTNode;
    addresses: AddressOrGroup[];
  }

  function emailAddresses(
    opts: Options & { simple: true }
  ): AddressOrGroup[] | null;
  function emailAddresses(opts: Options): ParsedResult | null;
  function emailAddresses(email: string): ParsedResult | null;
  export default emailAddresses;

  export function parseOneAddress(input: Input): AddressOrGroup | null;
  export function parseAddressList(input: Input): AddressOrGroup[] | null;
  export function parseFrom(input: Input): AddressOrGroup[] | null;
  export function parseSender(input: string | Options): AddressOrGroup | null;
  export function parseReplyTo(input: Input): AddressOrGroup[] | null;
}
