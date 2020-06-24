import emailAddresses, { parseOneAddress } from "email-addresses";

emailAddresses("test@example.com")?.ast;

const simple = emailAddresses({ input: "test@example.com", simple: true });
simple?.[0].name;

const one = parseOneAddress("test@example.com");
one?.type === "mailbox" ? one.address : null;
one?.type === "group" ? one.addresses[0].address : null;
