export const LANGUAGE_VERSIONS = {
  javascript: { id: 63, version: "Node.js 12.14.0" },
  python: { id: 71, version: "Python 3.8.1" },
  java: { id: 62, version: "OpenJDK 13.0.1" },
  rust: { id: 73, version: "Rust 1.40.0" },
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Sunny");\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Sunny")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Sunny!");\n\t}\n}\n`,
  rust: '\nfn main() { \n\n\t println!("Hello Sunny!"); \n \n }',
};
