import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cls4jfevw01hg01ut917xjtso/master`,
  documents: ["**/*.query.ts"],
  generates: {
    "./generated/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
